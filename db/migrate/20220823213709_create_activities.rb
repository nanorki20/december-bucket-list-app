class CreateActivities < ActiveRecord::Migration[7.0]
  def change
    create_table :activities do |t|
      t.string :name
      t.string :image_url
      t.string :description
      t.string :location
      t.string :category

      t.timestamps
    end
  end
end
