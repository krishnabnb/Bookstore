class Api::V1::CartsController < ApplicationController
  before_action :set_cart, only: [:show, :update, :destroy]

  def index
    @carts = Cart.all
    render json: @carts
  end

  def show
    @cart = Cart.find(params[:id])
    render json: @cart
  end

  def create
    @cart = Cart.new(cart_params)
    if @cart.save
      render json: @cart, status: :created
    else
      render json: { errors: @cart.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @cart.update(cart_params)
      render json: @cart, status: :ok
    else
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

end
