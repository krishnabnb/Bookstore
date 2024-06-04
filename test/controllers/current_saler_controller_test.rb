require 'test_helper'

class CurrentSalerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get current_saler_index_url
    assert_response :success
  end

end
