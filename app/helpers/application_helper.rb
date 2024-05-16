module ApplicationHelper
  require 'base64'

  def image_tag_base64(file_path, mime_type = 'image/jpeg', options = {})
    image_tag("data:#{mime_type};base64,#{Base64.strict_encode64(File.open(file_path, 'rb') { |io| io.read })}", options)
  end
end
