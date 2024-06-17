# class Api::V1::CartsController < ApplicationController
#   def index
#     @carts = Cart.all
#     render json: @carts
#   end

#   def show
#     @cart = Cart.find(params[:id]) 
#     render json: { cart: @cart }, status: :ok
#   end

#   # def show
#   # @order_items = current_order.order_itmes
#   #   render json: { cart: @cart }, status: :ok
#   # end

#   def create
#     book = Book.find(params[:cart][:book_id]) 
#     total_price = book.price * params[:cart][:quantity].to_i

#     @cart = Cart.new(cart_params.merge(total_price: total_price))

#     if @cart.save
#       render json: { message: "Cart created successfully", cart: @cart }, status: :ok
#     else
#       render json: { errors: @cart.errors.full_messages }, status: :unprocessable_entity
#     end
#   end

#   def update
#     @cart = Cart.find_by(id: params[:id]) 
#     if @cart.nil?
#       render json: { error: "Cart not found" }, status: :not_found
#     else
#       if @cart.update(cart_params)
#         if params[:cart][:quantity].present? || params[:cart][:book_id].present?
#           book = Book.find(@cart.book_id)
#           quantity = params[:cart][:quantity].to_i
#           @cart.update(total_price: book.price * quantity)
#         end
  
#         render json: { message: "Cart updated successfully", cart: @cart }, status: :ok
#       else
#         render json: { errors: @cart.errors.full_messages }, status: :unprocessable_entity
#       end
#     end
#   end
  

#   private

#   def cart_params
#     params.require(:cart).permit(:customer_id, :book_id, :quantity, :status)
#   end

#   def create_order_for_cart(cart)
#     order = Order.create(cart_id: cart.id, customer_id: cart.customer_id)
#     order.id
#   end
# end


class Api::V1::CartsController < ApplicationController
    before_action :set_cart, only: [:show]

    # def index
    #   @carts = Cart.all
    #   render json: @carts
    # end

    # def show
    #   render json: @cart
    # end

    # private
    #   def set_cart
    #     @cart = Cart.find(params[:id])
    #   end


    def show
      @cart = @current_cart
    end
  
    def destroy
      @cart = @current_cart
      @cart.destroy
      session[:cart_id] = nil
    end
end