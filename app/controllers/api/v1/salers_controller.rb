class Api::V1::SalersController < ApplicationController
  before_action :set_saler , only:[:show, :update, :destroy]
  # before_action :authenticate_customer!


  def index
    @salers = Saler.all
    render json:  @salers
  end

  def show
    saler = Saler.find(params[:id])
    render json: @saler
  end

  def create
    @saler = Saler.new(saler_params)
    if @saler.save
      render json: @saler, status: :created
    else
      render json: @saler.errors, status: :unprocessable_entity
    end
  end

  def update
    if @saler.update(saler_params)
      render json: @saler, status: :ok
    else
      render @saler.erroers, status: :unprocessable_entity
    end
  end

  def destroy
    @saler = Saler.find(params[:id])
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
