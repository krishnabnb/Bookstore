class Api::V1::SalersController < ApplicationController

  def index
    salers = Saler.all
    render json: SalerSerializer.new(salers).serializable_hash[:data]
    # cover_url = rails_blob_path(salers.cover, disposition: "attachment", only_path: true)

  end

  def show
    saler = Saler.find(params[:id])
    render json: saler
  end

  def create
    saler = Saler.new(saler_params)
    if saler.save
      render json: SalerSerializer.new(saler).serializable_hash[:data]

    else
      render json: { error: saler.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # def create
  #   saler = Saler.new(saler_params)
  #   if saler.save
  #     render json: saler, status: :created
  #   else
  #     render json: { error: saler.errors.full_messages }, status: :unprocessable_entity
  #   end
  # end


  def update
    saler = Saler.find(params[:id])
    if saler.update(saler_params)
      render json: saler, status: :ok
    else
      render json: { error: saler.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    saler = Saler.find(params[:id])
    saler.destroy
    render json: { message: "Saler deleted successfully" }, status: :ok
  end

  private

  def saler_params
    params.require(:saler).permit(:name, :email, :book_title, :price, :image)
  end
end
