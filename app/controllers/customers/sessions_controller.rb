# frozen_string_literal: true

class Customers::SessionsController < Devise::SessionsController
  respond_to :json

  # def create
  #   super do |resource|
  #     render json: resource.as_json, status: :ok and return if resource.persisted?
  #   end
  # end
  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  # def create
  #   super
  # end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
