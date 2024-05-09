class CurrentCustomerController < ApplicationController
  before_action :authenticate_customer!

  def index
    render json: current_customer, status: :ok
    puts "-------------------#{current_customer.inspect}"
  end
end
