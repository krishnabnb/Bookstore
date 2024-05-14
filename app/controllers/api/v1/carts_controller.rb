class Api::V1::CartsController < ApplicationController
  before_action :set_cart, only: [:show, :update, :destroy]
  skip_before_action :verify_authenticity_token
  # before_action :authenticate_customer!

  def index
    @carts = Cart.all.includes(:customer, :book)
    render json: @carts.map { |cart| cart_with_customer_firstname_and_book_title(cart) }
  end

  def create
    @cart = Cart.new(cart_params)
    if @cart.save
      render json: cart_with_customer_firstname_and_book_title(@cart), status: :created
    else
      render json: { errors: @cart.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @cart.update(cart_params)
      render json: cart_with_customer_firstname_and_book_title(@cart), status: :ok
    else
      puts " ---------------------#{@cart.inspect}"
      render json: { errors: @cart.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @cart.destroy
    render json: { message: "Cart destroyed successfully" }, status: :ok
  end

  private

  def set_cart
    @cart = Cart.find(params[:id])
  end

  def cart_params
    params.require(:cart).permit(:customer_id, :book_id, :quntity) 
  end

  def cart_with_customer_firstname_and_book_title(cart)
    cart_data = cart.as_json
    cart_data['customer_id'] = cart.customer.firstname if cart.customer.present?
    cart_data['book_id'] = cart.book.title if cart.book.present?
    cart_data
  end
end
