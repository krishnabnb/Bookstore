class Salers::RegistrationsController < Devise::RegistrationsController
  skip_before_action :verify_authenticity_token
  respond_to :json

  def create
    saler = Saler.new(saler_params)
    if saler.save
      sign_in(saler)
      render json: {
        status: { code: 200, message: 'Saler registered successfully.' },
        saler: SalerSerializer.new(saler).serializable_hash[:data][:attributes],
        token: request.env['warden-jwt_auth.token']
      }, status: :ok
    else
      render json: { errors: saler.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def saler_params
    params.require(:saler).permit(:name, :email, :password, :password_confirmation, :image, :city, :adress, :phoneno)
  end
end
