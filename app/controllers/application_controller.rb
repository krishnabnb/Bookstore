class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  respond_to :json
  # before_action :authenticate_customer!

  def render_error(message = "Internal Server Error", code = 500)
    render json: { status: { code: code, message: message } }, status: code
  end

  private

  def set_cart
    if current_customer
      @cart = current_customer.cart || current_customer.create_cart
    else
      render_error("Customer not authenticated", 401)
    end
  end

end
