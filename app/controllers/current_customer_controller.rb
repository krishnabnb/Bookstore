  class CurrentCustomerController < ApplicationController
    # before_action :authenticate_customer!

    def index
      if current_customer.present?
        render json: current_customer, only: [:id, :email, :firstname, :lastname, :contactno, :address, :city], status: :ok
      else
        render_error("Current customer not found", 404)
      end
    end
  end
