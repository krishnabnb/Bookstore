class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  respond_to :json
  before_action :underscore_params!
  before_action :configure_permitted_parameters, if: :devise_controller?
  # before_action :authenticate_customer

  private

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
  end

  def authenticate_customer
    if request.headers['Authorization'].present?
      authenticate_or_request_with_http_token do |token|
        begin
          jwt_payload = JWT.decode(token, 'd3312d781ea0bb3a7d80050a443b66d993bbc8df5a212264262096cd92ea3ca05d6da5fb1bdd4ca7a588a04ddf896c65bbde5e92c4b941bc49cb3238efcf34e8').first
          @current_customer_id = jwt_payload['id']
        rescue JWT::ExpiredSignature, JWT::VerificationError, JWT::DecodeError
          head :unauthorized
        end
      end
    else
      head :unauthorized
    end
  end
  
  def underscore_params!
    params.to_unsafe_h.deep_transform_keys!(&:underscore)
  end
  

  def current_customer
    @current_customer ||= super || Customer.find(@current_customer_id)
  end

  def signed_in?
    @current_customer_id.present?
  end
end
