class Api::V1::CartItemsController < ApplicationController
  before_action :set_cart_item, only: [:show, :update, :destroy]
  before_action :set_cart, only: [:create, :update, :destroy]

  def index
    cart_items = CartItem.all
    render json: cart_items, status: :ok
  end

  def create
    chosen_book = Book.find(params[:cart_item][:book_id][:id])
    @cart = current_customer&.cart || Cart.create(customer: current_customer)
  
    if @cart
      if @cart.cart_items.exists?(book_id: chosen_book.id)
        @cart_item = @cart.cart_items.find_by(book_id: chosen_book.id)
        @cart_item.quantity += params[:cart_item][:quantity].to_i
      else
        @cart_item = CartItem.new(book: chosen_book, cart: @cart, quantity: params[:cart_item][:quantity])
      end
  
      if @cart_item.save
        render json: @cart_item, status: :ok
      else
        render json: { errors: @cart_item.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: "Current customer not found" }, status: :unprocessable_entity
    end
  end
  
  def update
    if @cart_item.update(cart_item_params)
      render json: @cart_item, status: :ok
    else
      render json: { errors: @cart_item.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def set_cart
    @cart = current_customer.cart if current_customer.present?
  end

  def set_cart_item
    @cart_item = CartItem.find(params[:id])
  end

  def cart_item_params
    params.require(:cart_item).permit(:book_id, :quantity, :cart_id)
  end

end