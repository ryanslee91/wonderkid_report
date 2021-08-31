class LeaguesController < ApplicationController
  before_action :set_league, only:  :add_to_player

  # GET /leagues
  def index
    @leagues = League.all

    render json: @leagues, include: :players
  end

 # get /players/1/leagues/2
  # def add_to_player
  #   @player = Player.find(params[:player_id])
  #   @player.leagues << @league
  #   # this gets association
  #   render json: @player, include: :leagues
  # end

  def show
    render json: @league, include: :players
  end

def add_league_to_player
  @player = Player.find(params[:id])
  @league = League.find(params[:league_id])
  @player.leagues << @league
  # private
    # Use callbacks to share common setup or constraints between actions.
    # def set_league
    #   @league = League.find(params[:id])
    # end
end
end
