class Api::V1::CurrentCustomerController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: CustomerSerializer.new(current_customer).serializable_hash[:data][:attributes], status: :ok 

  end
  
end
