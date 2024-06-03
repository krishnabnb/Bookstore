# # frozen_string_literal: true

class Salers::SessionsController < Devise::SessionsController

    skip_before_action :verify_signed_out_user, only: [:destroy]
    skip_before_action :verify_authenticity_token, only: [:create, :destroy]
    respond_to :json

  def create
    saler_params = params[:saler]
    email = saler_params[:email]
    password = saler_params[:password]
    saler = Saler.find_by(email: email)
    if saler && saler.valid_password?(password)
      sign_in(:saler, saler)
      render json: {
        status: { code: 200, message: 'Logged in successfully.' },
        saler: SalerSerializer.new(saler).serializable_hash[:data][:attributes],
        token: request.headers['warden-jwt_auth.token']
      }, status: :ok
    else
      render_error("Invalid email or password", 401)
    end
  end

  def destroy
    sign_out(:saler) if saler_signed_in? 
    render json: {status: 200,message: "Logged out successfully"}, status: :ok
  end
end


      

