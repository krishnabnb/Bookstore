class Api::V1::PaymentsController < ApplicationController
  before_action :set_payment, only: [:show, :update, :destroy]
  # before_action :authenticate_customer!

  def index
    @payments = Payment.all
    render json: @payments
  end

  def create
    @payment = Payment.new(payment_params)
    @payment.date ||= Date.today 
  
    if @payment.save
      render json: @payment, status: :created
    else
      render json: @payment.errors, status: :unprocessable_entity
    end
  end

  def update
    if @payment.update(payment_params)
      render json: @payment
    else
      render json: @payment.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @payment.destroy
    render json: { message: "Payment deleted successfully" }, status: :ok
  end

  private
  def set_payment
    @payment = Payment.find(params[:id])
  end

  def payment_params
    params.require(:payment).permit(:amount, :date, :mathod, :cart_id)
  end

end
