class Api::V1::CustomersController < ApplicationController
  before_action :set_customer , only:[:show, :update, :destroy]

  def index
    @customers = Customer.all
    render json: @customers
  end

  def show
    @customer = Customer.find(params[:id])
    render json: @customer
  end

  def create
    @customer = Customer.new(customer_params)
    if  @customer.save
      render json: @customer, status: :created
    else
      render json: @customer.erroers, status: :unprocessable_entity
    end
  end

  def update
    if @customer.update(customer_params)
      render json: @customer, status: :ok
    else
      render @customer.erroers, status: :unprocessable_entity
    end
  end

  def destroy
    @customer.destroy
    render json:{message: "Customer destroy succesfully"},status: :ok
  end

  private
  def customer_params
    params.require(:customer).permit(:firstname, :lastname, :address, :city, :contactno)
  end

  def set_customer
    @customer = Customer.find(params[:id])
  end
end
