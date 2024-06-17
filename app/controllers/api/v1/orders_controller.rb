class Api::V1::OrdersController < ApplicationController
  before_action :set_order, only: [:show, :update, :destroy, :order_items]

  def index
    @orders= Order.all
    render json: @orders
  end

  def show
    render json: @order
  end

  def order_items
    order_items = @order.order_items
    render json: order_items
  end

  def create
    @order = Order.new(order_params)
    if @order.save
      render json: @order, status: :created
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end
  private

  def set_order
    @order = Order.find(params[:id])
  end

  def order_params
    params.require(:order).permit(:customer_id, :status, :total_price)
  end
end
