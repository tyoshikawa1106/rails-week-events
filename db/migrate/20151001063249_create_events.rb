class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :subject
      t.string :location
      t.text :description
      t.datetime :start_date_time

      t.timestamps null: false
    end
  end
end
