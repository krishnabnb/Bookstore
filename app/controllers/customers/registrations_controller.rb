# # frozen_string_literal: true

class Customers::RegistrationsController < Devise::RegistrationsController
  skip_before_action :verify_authenticity_token
  before_action :check_customer_logged_in, only: [:new]


  respond_to :json
  private

  def respond_with(resource, _opts = {})
    if  request.method == "POST" && resource.persisted?
      render json: {
        status: {code: 200, message: 'Signed up sucessfully.'},
        data: CustomerSerializer.new(resource).serializable_hash[:data][:attributes]
      },status: :ok
    elsif request.method == "DELETE"
      render json: {
        status: {code: 200, message: 'Account delete  sucessfully.'},
      },status: :ok
    else
      render json: {
        status: {message: "User couldn't be created successfully. #{resource.errors.full_messages.to_sentence}"}
      }, status: :unprocessable_entity
    end
  end
  def check_customer_logged_in
    if customer_signed_in?
      redirect_to logout_path
    end
  end
end