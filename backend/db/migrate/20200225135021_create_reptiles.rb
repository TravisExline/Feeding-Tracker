class CreateReptiles < ActiveRecord::Migration[6.0]
  def change
    create_table :reptiles do |t|
      t.string :name
      t.integer :age
      t.string :species
      t.integer :user_id

      t.timestamps
    end
  end
end
