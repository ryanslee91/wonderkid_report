class PositionsController < ApplicationController
  before_action :set_position, only:  :add_to_player

  # GET /positions
  def index
    @positions = Position.all

    render json: @positions
  end

 # get /foods/1/positions/2
  def add_to_player
    @player = Player.find(params[:player_id])
    @player.positions << @position
    # this gets association
    render json: @player, include: :positions
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_position
      @position = Position.find(params[:id])
    end
end
