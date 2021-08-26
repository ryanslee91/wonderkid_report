class CreatePlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.string :name
      t.string :img_url
      t.string :position
      t.string :footed
      t.string :height_weight
      t.string :national_team
      t.string :club
      t.integer :ratings
      t.string :stats_url
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
