class Customers::SessionsController < Devise::SessionsController
  skip_before_action :verify_signed_out_user, only: [:destroy]
  skip_before_action :verify_authenticity_token, only: [:create, :destroy]
  respond_to :json

  def create
    customer_params = params[:customer] || {} 
    email = customer_params[:email]
    password = customer_params[:password]
    customer = Customer.find_by(email: email)
    if customer && customer.valid_password?(password)
      sign_in(:customer, customer)
      render json: {
        status: { code: 200, message: 'Logged in successfully.' },
        customer: CustomerSerializer.new(customer).serializable_hash[:data][:attributes],
        token: request.headers['warden-jwt_auth.token']
      }, status: :ok
    else
      render_error("Invalid email or password", 401)
    end
  end

  def destroy
    if params[:token].blank?
      render_error("Token is missing", 400)
    else
      sign_out(:customer) if customer_signed_in? 
      render json: {
        status: 200,
        message: "Logged out successfully"
      }, status: :ok
    end
  end
end
