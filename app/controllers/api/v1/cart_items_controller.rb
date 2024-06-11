class Api::V1::CartItemsController < ApplicationController
  before_action :authenticate_customer!
  before_action :set_cart

  def index
    @cart_items = current_customer.cart.cart_items.includes(:book) if current_custome
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
    @book = Book.find(params[:book_id])

    if @cart.books.include?(@book)
      render json: { error: "Book already exists in the cart" }, status: :unprocessable_entity
    else
      @cart_item = @cart.cart_items.build(book: @book, quantity: params[:quantity] || 1)

      if @cart_item.save
        render json: @cart_item, status: :created
      else
        render json: @cart_item.errors, status: :unprocessable_entity
      end
    end
  end

  private

  def set_cart
    @cart = current_customer.cart
  end

  def item_attributes(cart_item)
    {
      book_id: cart_item.book.id,
      title: cart_item.book.title,
      price: cart_item.book.price,
      quantity: cart_item.quantity,
      image_url: cart_item.book.image_url
    }
  end
end
