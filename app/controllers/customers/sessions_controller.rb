class Customers::SessionsController < Devise::SessionsController
  skip_before_action :verify_authenticity_token
  before_action :check_customer_logged_in, only: [:new]


  respond_to :json

  def destroy
    sign_out(current_customer) if current_customer

    respond_to_on_destroy
  end

  private

  def respond_with(resource, _opts = {})
    render json: {
      status: { code: 200, message: 'Logged in successfully.' },
      data: CustomerSerializer.new(resource).serializable_hash[:data][:attributes]
    }, status: :ok
  end

  def respond_to_on_destroy
    render json: {
      status: 200,
      message: "Logged out successfully"
    }, status: :ok
  end

   def check_customer_logged_in
    if customer_signed_in?
      redirect_to logout_path
    end
  end
end
