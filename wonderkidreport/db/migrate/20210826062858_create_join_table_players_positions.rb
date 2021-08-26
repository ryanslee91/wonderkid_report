class CreateJoinTablePlayersPositions < ActiveRecord::Migration[6.1]
  def change
    create_join_table :players, :positions do |t|
    # t.index [:player_id, :position_id]
    # t.index [:position_id, :player_id]
    end
  end
end
