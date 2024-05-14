class HomeController < ApplicationController
  def index
    # respond_to do |format|
    #   format.html do
    #     # Render HTML view
    #   end
    #   format.jpeg do
    #     book = Book.order(created_at: :desc).first
    #     if book.present? && book.image.present?
    #       image_path = File.join(Rails.root, 'public', 'image', book.image)
    #       if File.exist?(image_path)
    #         send_file image_path, type: 'image/jpeg', disposition: 'inline'
    #       else
    #         render plain: 'Image file not found', status: :not_found
    #       end
    #     else
    #       render plain: 'No image found for the latest book', status: :not_found
    #     end
    #   end
    # end
  end
end
