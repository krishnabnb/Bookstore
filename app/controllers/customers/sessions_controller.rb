# class Customers::SessionsController < Devise::SessionsController
#   skip_before_action :verify_authenticity_token
#   before_action :check_customer_logged_in, only: [:new]


#   respond_to :json

#   def destroy
#     sign_out(current_customer) if current_customer

#     respond_to_on_destroy
#   end

#   private

#   def respond_with(resource, _opts = {})
#     render json: {
#       status: { code: 200, message: 'Logged in successfully.' },
#       data: CustomerSerializer.new(resource).serializable_hash[:data][:attributes]
#     }, status: :ok
#   end

#   def respond_to_on_destroy
#     render json: {
#       status: 200,
#       message: "Logged out successfully"
#     }, status: :ok
#   end

#    def check_customer_logged_in
#     if customer_signed_in?
#       redirect_to logout_path
#     end
#   end
# end


class Customers::SessionsController < Devise::SessionsController
  skip_before_action :verify_authenticity_token
  respond_to :json

  def create
    customer = Customer.find_by(email: params[:email])
    if customer && customer.valid_password?(params[:password])
      token = encode_token(customer_id: customer.id)
      render json: { token: token }
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  def destroy
    if current_customer
      sign_out(current_customer)
      render json: { message: 'Logged out successfully' }
    else
      render json: { error: 'No active session' }, status: :unprocessable_entity
    end
  end

  private

  def encode_token(payload)
    JWT.encode(payload, '8f623e67de85ad4e6e6bd5b490f13323b84c15a727ba0a4286cdfe91898a299bb58b6470daa4fdbe163980b3624e78631ca962d88976ca96d1a2126210f022a3')
  end
end



