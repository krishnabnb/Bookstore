require 'test_helper'

class CurrentCustomerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get current_customer_index_url
    assert_response :success
  end

end
