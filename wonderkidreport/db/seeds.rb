# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
League.destroy_all
Player.destroy_all
User.destroy_all

@admin = User.create!(username: 'RyanL', email: 'ryanlee@email.com', password: '123456')
@josem = User.create!(username: 'JoseM', email: 'josem@email.com', password: '123456')
@alexf = User.create!(username: 'AlexF', email: 'alexf@email.com', password: '123456')
@pepg = User.create!(username: 'PepG', email: 'pepg@email.com', password: '123456')
@juliann = User.create!(username: 'JulianN', email: 'juliann@email.com', password: '123456')
@arsenew = User.create!(username: 'ArseneW', email: 'arsenew@email.com', password: '123456')

puts "#{User.count} users created"

@epl = League.create!(name: 'English Premiere League')
@laliga = League.create!(name: 'La Liga')
@bundesliga = League.create!(name: 'Bundesliga')
@seriea = League.create!(name: 'Serie A')
@ligue1 = League.create!(name: 'Ligue 1')
@plaliga = League.create!(name: 'Primeira Liga')

puts "#{League.count} leagues created"

Player.create!(
  name: 'Erling Braut Haaland',
  img_url: 'https://img.a.transfermarkt.technology/portrait/big/418560-1607454139.jpg?lm=1',
  position: 'forward',
  footed: 'left',
  height_weight: '6-3, 192lb',
  national_team: 'Norway',
  club: 'Dortmund, Germany',
  ratings: '88',
  potentials: '99',
  stats_url: 'https://widgets.sports-reference.com/wg.fcgi?css=1&site=fb&url=%2Fen%2Fplayers%2F1f44ac21%2FErling-Haaland&div=div_scout_summary_FW',
  user: @alexf,
  leagues: [@bundesliga]
  )
  

  puts "#{Player.count} players created"

