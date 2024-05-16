class Api::V1::ContactsController < ApplicationController
  before_action :set_contact, only: [:show, :update, :destroy]
  # before_action :authenticate_customer!

  def index
    @contacts = Contact.all
    render json: @contacts
  end

  def create
    @contact = Contact.new(contact_params)

    if @contact.save
      render json: @contact, status: :created
    else
      render json: @contact.errors, status: :unprocessable_entity
    end
  end

  def update
    if @contact.update(contact_params)
      render json: @contact
    else
      render json: @contact.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @contact.destroy
    render json: { message: "Contact deleted successfully" }, status: :ok
  end

  private
    def set_contact
      @contact = Contact.find(params[:id])
    end

    def contact_params
      params.require(:contact).permit(:name, :email, :subject, :massage)
    end
end
