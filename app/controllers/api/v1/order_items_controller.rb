class Api::V1::OrderItemsController < ApplicationController
    before_action :set_order
    before_action :set_order_item, only: [:show, :update, :destroy]
  
    # GET /api/v1/orders/:order_id/order_items
    def index
      @order_items = @order.order_items
      render json: @order_items, each_serializer: OrderItemSerializer
    end
  
    # GET /api/v1/orders/:order_id/order_items/:id
    def show
      render json: @order_item, serializer: OrderItemSerializer
    end
  
    # POST /api/v1/orders/:order_id/order_items
    def create
      @order_item = @order.order_items.build(order_item_params)
      if @order_item.save
        render json: { message: 'Order item created successfully', order_item: @order_item }, status: :created
      else
        render json: @order_item.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /api/v1/orders/:order_id/order_items/:id
    def update
      if @order_item.update(order_item_params)
        render json: @order_item, serializer: OrderItemSerializer
      else
        render json: @order_item.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /api/v1/orders/:order_id/order_items/:id
    def destroy
      @order_item.destroy
      head :no_content
    end
  
    private
  
    def set_order
      @order = Order.find(params[:order_id])
    end
  
    def set_order_item
      @order_item = @order.order_items.find(params[:id])
    end
  
    def order_item_params
      params.require(:order_item).permit(:book_id, :quantity, :price)
    end
  end
  