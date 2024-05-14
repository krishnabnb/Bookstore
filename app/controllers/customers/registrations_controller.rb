class Customers::RegistrationsController < Devise::RegistrationsController
  skip_before_action :verify_authenticity_token
  before_action :check_customer_logged_in, only: [:new]
  respond_to :json
  
  def create
    customer = Customer.new(customer_params)
    if customer.save
      sign_in(customer)
      render json: {
        status: { code: 200, message: 'Logged in successfully.' },
        customer: CustomerSerializer.new(customer).serializable_hash[:data][:attributes],
        token: request.env['warden-jwt_auth.token']
      }, status: :ok
    else
      render_error("Customer couldn't be created successfully. #{customer.errors.full_messages.to_sentence}", 422)
    end
  end

  private

  def customer_params
    params.require(:customer).permit(:firstname, :lastname, :address, :city, :contactno, :email, :password, :password_confirmation)
  end
end
