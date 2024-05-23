class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  respond_to :json

  def render_error(message = "Internal Server Error", code = 500)
    render json: { status: { code: code, message: message } }, status: code
  end

end
