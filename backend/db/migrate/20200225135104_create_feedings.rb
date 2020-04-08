class CreateFeedings < ActiveRecord::Migration[6.0]
  def change
    create_table :feedings do |t|
      t.string :reptile_name
      t.string :date
      t.boolean :successful

      t.timestamps
    end
  end
end
