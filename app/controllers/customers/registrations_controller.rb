# # frozen_string_literal: true

# class Customers::RegistrationsController < Devise::RegistrationsController
#   skip_before_action :verify_authenticity_token

#   respond_to :json
#   private

#   def respond_with(resource, _opts = {})
#     if  request.method == "POST" && resource.persisted?
#       render json: {
#         status: {code: 200, message: 'Signed up sucessfully.'},
#         data: CustomerSerializer.new(resource).serializable_hash[:data][:attributes]
#       },status: :ok
#     elsif request.method == "DELETE"
#       render json: {
#         status: {code: 200, message: 'Account delete  sucessfully.'},
#       },status: :ok
#     else
#       render json: {
#         status: {message: "User couldn't be created successfully. #{resource.errors.full_messages.to_sentence}"}
#       }, status: :unprocessable_entity
#     end
#   end
# end
# app/controllers/customers/registrations_controller.rb


class Customers::RegistrationsController < Devise::RegistrationsController
  skip_before_action :verify_authenticity_token
  respond_to :json

  def create
    @customer = Customer.new(sign_up_params)
    if @customer.save
      render json: { message: 'Successfully registered.', customer: @customer }, status: :created
    else
      render json: { error: @customer.errors.full_messages.join(', ') }, status: :unprocessable_entity
    end
  end

  private

  def sign_up_params
    params.require(:customer).permit(:firstname, :lastname, :address, :city, :contactno, :email, :password, :password_confirmation)
  end
end
