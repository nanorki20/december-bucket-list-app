require "test_helper"

class BucketListsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @bucket_list = bucket_lists(:one)
  end

  test "should get index" do
    get bucket_lists_url, as: :json
    assert_response :success
  end

  test "should create bucket_list" do
    assert_difference("BucketList.count") do
      post bucket_lists_url, params: { bucket_list: { activity_id: @bucket_list.activity_id, name: @bucket_list.name, user_id: @bucket_list.user_id } }, as: :json
    end

    assert_response :created
  end

  test "should show bucket_list" do
    get bucket_list_url(@bucket_list), as: :json
    assert_response :success
  end

  test "should update bucket_list" do
    patch bucket_list_url(@bucket_list), params: { bucket_list: { activity_id: @bucket_list.activity_id, name: @bucket_list.name, user_id: @bucket_list.user_id } }, as: :json
    assert_response :success
  end

  test "should destroy bucket_list" do
    assert_difference("BucketList.count", -1) do
      delete bucket_list_url(@bucket_list), as: :json
    end

    assert_response :no_content
  end
end
