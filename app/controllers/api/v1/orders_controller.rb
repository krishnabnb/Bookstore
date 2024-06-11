class Api::V1::OrdersController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :update, :destroy]
  before_action :set_order, only: [:show, :update, :destroy]

  def index
    @orders = Order.all
    render json: @orders
  end

  def create
    @order = Order.new(order_params)
    if @order.save
      render json: { message: 'Order created successfully', order: @order }, status: :created
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  def update
    if @order.update(order_params)
      render json: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @order.destroy
    head :no_content
  end

  private

  def set_order
    @order = Order.find(params[:id])
  end

  def order_params
    params.require(:order).permit(:customer_id, :total_price, :status)
  end
end
