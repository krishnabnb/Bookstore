require 'test_helper'

class Api::V1::SalerBooksControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_saler_books_index_url
    assert_response :success
  end

end
