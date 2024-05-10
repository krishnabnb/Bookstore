# # # frozen_string_literal: true
# class Customers::RegistrationsController < Devise::RegistrationsController
#   skip_before_action :verify_authenticity_token
#   before_action :check_customer_logged_in, only: [:new]


#   respond_to :json
#   private

#   def respond_with(resource, _opts = {})
#     if  request.method == "POST" && resource.persisted?
#       token = generate_token(resource)
#       render json: {
#         status: {code: 200, message: 'Signed up sucessfully.'},
#         data: CustomerSerializer.new(resource).serializable_hash[:data][:attributes],
#         token: token 
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

#   def generate_token(customer)
#     payload = { customer_id: customer.id, jti: SecureRandom.uuid }
#     JWT.encode(payload, 'd3312d781ea0bb3a7d80050a443b66d993bbc8df5a212264262096cd92ea3ca05d6da5fb1bdd4ca7a588a04ddf896c65bbde5e92c4b941bc49cb3238efcf34e8')
#   end

#   def check_customer_logged_in
#     if customer_signed_in?
#       redirect_to logout_path
#     end
#   end
# end

# class Customers::RegistrationsController < Devise::RegistrationsController
#   skip_before_action :verify_authenticity_token
#   respond_to :json

#   def create
#     @customer = Customer.new(sign_up_params)
#     if @customer.save
#       render json: { message: 'Successfully registered.', customer: @customer }, status: :created
#     else
#       render json: { error: @customer.errors.full_messages.join(', ') }, status: :unprocessable_entity
#     end
#   end

#   private

#   def sign_up_params
#     params.require(:customer).permit(:firstname, :lastname, :address, :city, :contactno, :email, :password, :password_confirmation)
#   end
# # end
class Customers::RegistrationsController < Devise::RegistrationsController
  skip_before_action :verify_authenticity_token
  respond_to :json

  def create
    customer = Customer.new(customer_params)
    if customer.save
      token = encode_token(customer_id: customer.id)
      render json: { token: token }, status: :created
    else
      render json: { error: customer.errors.full_messages.join(', ') }, status: :unprocessable_entity
    end
  end

  private

  def customer_params
    params.require(:customer).permit(:firstname, :lastname, :address, :city, :contactno, :email, :password, :password_confirmation)
  end

  def encode_token(payload)
    JWT.encode(payload, 'd3312d781ea0bb3a7d80050a443b66d993bbc8df5a212264262096cd92ea3ca05d6da5fb1bdd4ca7a588a04ddf896c65bbde5e92c4b941bc49cb3238efcf34e8')
  end
end

