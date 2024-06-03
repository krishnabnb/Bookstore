class Api::V1::CartItemsController < ApplicationController
  before_action :authenticate_customer!
  before_action :set_cart

  def index
    @cart_items = current_customer.cart.cart_items.includes(:book) if current_customer

    if @cart_items
      cart_items_json= @cart_items.map do |cart_item|
        {
          book_id: cart_item.book.id,
          title: cart_item.book.title,
          price: cart_item.book.price,
          quantity: cart_item.quantity,
          image_url: cart_item.book.image_url 
        }
      end
      render json: { cart_items: cart_items_json, massage: 'Cart item for current customer'}
    else
      render json: { error: 'Cart items not found for current customer' }, status: :not_found
    end
  end
  

  def create
    book_id = params[:book_id]
    cart_item = @cart.cart_items.find_or_initialize_by(book_id: book_id)
    cart_item.quantity += 1
    if cart_item.save
      render json: cart_item, status: :ok
    else
      render json: { errors: cart_item.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    cart_item = @cart.cart_items.find(params[:id])
    if cart_item.update(quantity: params[:quantity])
      render json: cart_item
    else
      render json: { errors: cart_item.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    cart_item = @cart.cart_items.find(params[:id])
    cart_item.destroy
  end

  private 

  def set_cart
    @cart = current_customer.cart
  end
end
