class CreateBucketLists < ActiveRecord::Migration[7.0]
  def change
    create_table :bucket_lists do |t|
      t.string :name
      t.integer :user_id
      t.integer :activity_id

      t.timestamps
    end
  end
end
