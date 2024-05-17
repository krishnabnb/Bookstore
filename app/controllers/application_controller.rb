class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  respond_to :json

  def render_error(message = "Internal Server Error", code = 500)
    render json: { status: { code: code, message: message } }, status: code
  end

  private

  def authenticate_customer!(options = {})
    head :unauthorized unless signed_in?
  end

  def current_customer
    @current_customer ||= super || (Customer.find_by(id: @current_customer_id) if @current_customer_id)
  end

  def signed_in?
    @current_customer_id.present?
  end

  def logout
    sign_out(:customer) if customer_signed_in?
  end
end
