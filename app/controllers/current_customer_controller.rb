class CurrentCustomerController < ApplicationController
  # before_action :authenticate_customer!

  def index
    if current_customer.present?
      render json: { email: current_customer.email, firstname: current_customer.firstname }, status: :ok
      puts "-------------------#{current_customer.inspect}"
    else
      render_error("Current customer not found", 404)
    end
  end
end
