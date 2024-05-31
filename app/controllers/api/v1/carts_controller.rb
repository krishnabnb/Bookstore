class Api::V1::CartsController < ApplicationController
  before_action :authenticate_customer!

  def index
    customer = current_customer
    cart_items = customer.cart_items.includes(:book)

    render json: { customer: customer, cart_items: cart_items }
  end

  # def add_item
  #   book_id = params[:book_id]
  #   customer_id = current_customer.id

  #   cart_item = CartItem.find_by(book_id: book_id, customer_id: customer_id)

  #   if cart_item
  #     cart_item.update(quantity: cart_item.quantity + 1)
  #   else
  #     cart_item = CartItem.create(book_id: book_id, customer_id: customer_id, quantity: 1)
  #   end

  #   render json: { message: 'Item added to cart successfully', cart_item: cart_item }
  # rescue => e
  #   render json: { error: e.message }, status: :unprocessable_entity
  # end

  private

  def calculate_total_price(cart_items)
    total_price = cart_items.sum { |cart_item| cart_item.book.price * cart_item.quantity }
    total_price
  end
end
