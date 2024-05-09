class Customers::SessionsController < Devise::SessionsController
  skip_before_action :verify_authenticity_token
  before_action :check_customer_logged_in, only: [:new]

  respond_to :json

  def create
    customer = Customer.find_by(email: params[:email])

    if customer && customer.valid_password?(params[:password])
      sign_in(customer)

      token = generate_token(customer)
      respond_with(customer, token)
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  def destroy
    sign_out(current_customer) if current_customer
    respond_to_on_destroy
  end

  private

  def respond_with(resource, token)
    render json: {
      status: { code: 200, message: 'Logged in successfully.' },
      data: CustomerSerializer.new(resource).serializable_hash[:data][:attributes],
      token: token
    }, status: :ok
  end

  def respond_to_on_destroy
    render json: {
      status: 200,
      message: "Logged out successfully"
    }, status: :ok
  end

  def generate_token(customer)
    payload = { customer_id: customer.id, jti: SecureRandom.uuid }
    JWT.encode(payload, 'd3312d781ea0bb3a7d80050a443b66d993bbc8df5a212264262096cd92ea3ca05d6da5fb1bdd4ca7a588a04ddf896c65bbde5e92c4b941bc49cb3238efcf34e8')
  end

  def check_customer_logged_in
    redirect_to logout_path if customer_signed_in?
  end
end



# set_customer












# class Customers::SessionsController < Devise::SessionsController
#   skip_before_action :verify_authenticity_token
#   respond_to :json

#   def create
#     customer = Customer.find_by(email: params[:email])
#     if customer && customer.valid_password?(params[:password])
#       token = encode_token(customer_id: customer.id)
#       render json: { token: token }
#     else
#       render json: { error: 'Invalid email or password' }, status: :unauthorized
#     end
#   end

#   def destroy
#     reset_session
#     render json: { message: "Logged out successfully" }, status: :ok
#   end
  

#   private

#   def encode_token(payload)
#     JWT.encode(payload, 'd3312d781ea0bb3a7d80050a443b66d993bbc8df5a212264262096cd92ea3ca05d6da5fb1bdd4ca7a588a04ddf896c65bbde5e92c4b941bc49cb3238efcf34e8')
#   end

 
# end
