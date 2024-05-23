class Api::V1::SalersController < ApplicationController
  before_action :set_saler, only: [:show, :update, :destroy, :image_destroy]

  def index
    @salers = Saler.all
    render json: { saler: SalerSerializer.new(@salers).serializable_hash[:data] }
  end
  def image_destroy
    if @saler.image.attached?
      @saler.image.purge
      render json: { message: "Image deleted successfully" }, status: :ok
    else
      render json: { errors: "No image attached to this saler" }, status: :unprocessable_entity
    end
  end

  def create
    @saler = Saler.new(saler_params)
    if @saler.save
      render json: { saler: SalerSerializer.new(@saler).serializable_hash[:data] }, status: :ok
    else
      render json: { errors: @saler.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if @saler.update(saler_params)
      render json: { saler: SalerSerializer.new(@saler).serializable_hash[:data] }, status: :ok
    else
      render json: { errors: @saler.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @saler.destroy
    render json: { message: "Saler deleted successfully" }, status: :ok
  end

  private
  def saler_params
    params.require(:saler).permit(:name, :email, :book_title, :price, :image)
  end

  def set_saler
    @saler = Saler.find(params[:id])
  end
end


