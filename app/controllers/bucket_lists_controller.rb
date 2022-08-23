class BucketListsController < ApplicationController
  before_action :set_bucket_list, only: %i[ show update destroy ]

  # GET /bucket_lists
  def index
    @bucket_lists = BucketList.all

    render json: @bucket_lists
  end

  # GET /bucket_lists/1
  def show
    render json: @bucket_list
  end

  # POST /bucket_lists
  def create
    @bucket_list = BucketList.new(bucket_list_params)

    if @bucket_list.save
      render json: @bucket_list, status: :created, location: @bucket_list
    else
      render json: @bucket_list.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /bucket_lists/1
  def update
    if @bucket_list.update(bucket_list_params)
      render json: @bucket_list
    else
      render json: @bucket_list.errors, status: :unprocessable_entity
    end
  end

  # DELETE /bucket_lists/1
  def destroy
    @bucket_list.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bucket_list
      @bucket_list = BucketList.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def bucket_list_params
      params.require(:bucket_list).permit(:name, :user_id, :activity_id)
    end
end
