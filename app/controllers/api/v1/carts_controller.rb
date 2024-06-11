class Api::V1::CartsController < ApplicationController
  # before_action :authenticate_customer!

  def index
    # customer = current_customer
    # cart_items = customer.cart_items.includes(:book)

    # render json: { customer: customer, cart_items: cart_items }
    @carts = Cart.all
    render json: @carts
  end

  def  show
    @cart = Cart.find(params[:id])
    render json: { cart: @cart }, status: :ok
  end

  def create
    cart_params = {
      customer_id: current_customer&.id,
      status: params[:status] || "pending", 
      total_price: params[:total_price] || "0.00"
    }
    @cart = Cart.new(cart_params)

    if @cart.save
      render json: { message: 'Cart created successfully', cart: @cart }, status: :ok
    else
      render json: { error: 'Unable to create cart' }, status: :unprocessable_entity
    end
  end

  private

  def calculate_total_price(cart_items)
    total_price = cart_items.sum { |cart_item| cart_item.book.price * cart_item.quantity }
    total_price
  end
end
