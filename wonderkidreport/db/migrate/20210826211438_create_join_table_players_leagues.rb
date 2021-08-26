class CreateJoinTablePlayersLeagues < ActiveRecord::Migration[6.1]
  def change
    create_join_table :players, :leagues do |t|
      # t.index [:player_id, :league_id]
      # t.index [:league_id, :player_id]
  end
end
end