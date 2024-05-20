class Api::V1::BookShowController < ApplicationController
  def update_banner_image
    book = Book.find(params[:id])

    if params[:banner_image].present?
      if book.update(banner_image: params[:banner_image])
        render json: { message: 'Banner image updated successfully', book: BookSerializer.new(book).serializable_hash[:data] }, status: :ok
      else
        render json: { error: 'Failed to update banner image' }, status: :unprocessable_entity
      end
    else
      default_banner_image_path = Rails.root.join('app', 'assets', 'images', 'horrer3.jpeg')
      default_banner_image = File.open(default_banner_image_path)

      book.update(banner_image: default_banner_image)

      render json: { message: 'Default banner image set successfully', book: BookSerializer.new(book).serializable_hash[:data] }, status: :ok
    end
  end

  def delete_banner_image
    book = Book.find(params[:id])

    if book.update(banner_image: nil)
      render json: { message: 'Banner image deleted successfully', book: BookSerializer.new(book).serializable_hash[:data] }, status: :ok
    else
      render json: { error: 'Failed to delete banner image' }, status: :unprocessable_entity
    end
  end
end
