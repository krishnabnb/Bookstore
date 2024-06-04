class CurrentSalerController < ApplicationController
  def index
    if current_saler.present?
      render json: current_saler, only: [:id, :name, :email,:phoneno, :adress, :city], status: :ok
    else
      render_error("Current seller not found", 404)
    end
  end
end
