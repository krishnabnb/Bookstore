# ApplicationController
class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  before_action :process_token
  respond_to :json

  def render_success(message = "Success", data: nil, token: nil, code: 200)
    response_data = { status: { code: code, message: message } }
    response_data[:data] = data if data
    response_data[:token] = token if token
    render json: response_data, status: code
  end

  def render_error(message = "Internal Server Error", code = 500)
    render json: { status: { code: code, message: message } }, status: code
  end

  private

  def x
    if request.headers['Authorization'].present?
      begin
        jwt_payload = JWT.decode(request.headers['Authorization'].split(' ')[1], Rails.application.secrets.secret_key_base).first
        @current_customer_id = jwt_payload['id']
      rescue JWT::ExpiredSignature, JWT::VerificationError, JWT::DecodeError
        head :unauthorized
      end
    end
  end

  def authenticate_customer!(options = {})
    head :unauthorized unless signed_in?
  end

  def current_customer
    @current_customer ||= super || (Customer.find_by(id: @current_customer_id) if @current_customer_id)
  end

  def signed_in?
    @current_customer_id.present?
  end

  # Logout method
  def logout
    sign_out(:customer) if customer_signed_in?
  end
end
