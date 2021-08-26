# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Position.destroy_all
Player.destroy_all
User.destroy_all

@admin = User.create!(username: 'RyanL', email: 'ryanlee@email.com', password: '123456')
@josem = User.create!(username: 'JoseM', email: 'josem@email.com', password: '123456')
@alexf = User.create!(username: 'AlexF', email: 'alexf@email.com', password: '123456')
@pepg = User.create!(username: 'PepG', email: 'pepg@email.com', password: '123456')
@juliann = User.create!(username: 'JulianN' email: 'juliann@email.com', password: '123456')
@arsenew = User.create!(username: 'ArseneW' email: 'arsenew@email.com', password: '123456')

puts "#{User.count} users created"

Player.create!(name: )

@forward = Position.create!(name: 'forward')
@midfielder = Position.create!(name: 'midfielder')
@defender = Position.create!(name: 'defender')
@goalkeeper = Position.create!(name: 'goalkeeper')

puts "#{Position.count} positions created"


