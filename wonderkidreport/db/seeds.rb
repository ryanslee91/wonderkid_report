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

  Player.create!(
  name: 'Jadon Sancho',
  img_url: 'https://img.a.transfermarkt.technology/portrait/header/401173-1623778009.jpg?lm=1',
  position: 'forward',
  footed: 'right',
  height_weight: '5-10½,, 161lb',
  national_team: 'England',
  club: 'Manchester United, England',
  ratings: '85',
  potentials: '97',
  stats_url: 'https://widgets.sports-reference.com/wg.fcgi?css=1&site=fb&url=%2Fen%2Fplayers%2Fdbf053da%2FJadon-Sancho&div=div_scout_summary_AM',
  user: @alexf,
  leagues: [@epl]
  )

  Player.create!(
    name: 'Kylian Mbappe',
    img_url: 'https://img.a.transfermarkt.technology/portrait/header/342229-1602849394.jpg?lm=1',
    position: 'forward',
    footed: 'right',
    height_weight: '5-10, 161lb',
    national_team: 'France',
    club: 'PSG, France',
    ratings: '90',
    potentials: '98',
    stats_url: 'https://widgets.sports-reference.com/wg.fcgi?css=1&site=fb&url=%2Fen%2Fplayers%2F42fd9c7f%2FKylian-Mbappe&div=div_scout_summary_AM',
    user: @pepg,
    leagues: [@ligue1]
    )

    Player.create!(
      name: 'Dusan Vlahovic',
      img_url: 'https://img.a.transfermarkt.technology/portrait/header/357498-1594713085.jpg?lm=1',
      position: 'forward',
      footed: 'left',
      height_weight: '6-2½, 183lb',
      national_team: 'Serbia',
      club: 'Fiorentina, Italy',
      ratings: '82',
      potentials: '94',
      stats_url: 'https://widgets.sports-reference.com/wg.fcgi?css=1&site=fb&url=%2Fen%2Fplayers%2F79443529%2FDusan-Vlahovic&div=div_scout_summary_FW',
      user: @juliann,
      leagues: [@seriea]
      )


    Player.create!(
      name: 'Martin Odegaard',
      img_url: 'https://img.a.transfermarkt.technology/portrait/header/316264-1510232173.jpg?lm=1',
      position: 'midfielder',
      footed: 'left',
      height_weight: '5-10, 150lb',
      national_team: 'Norway',
      club: 'Arsenal, England',
      ratings: '85',
      potentials: '92',
      stats_url: 'https://widgets.sports-reference.com/wg.fcgi?css=1&site=fb&url=%2Fen%2Fplayers%2F79300479%2FMartin-Odegaard&div=div_scout_summary_AM',
      user: @arsenew,
      leagues: [@epl]
      )

    Player.create!(
      name: 'Kai Havertz',
      img_url: 'https://img.a.transfermarkt.technology/portrait/header/309400-1620646226.jpg?lm=1',
      position: 'midfielder',
      footed: 'left',
      height_weight: '6-1, 170lb',
      national_team: 'Germany',
      club: 'Chelsea FC, England',
      ratings: '87',
      potentials: '93',
      stats_url: 'https://widgets.sports-reference.com/wg.fcgi?css=1&site=fb&url=%2Fen%2Fplayers%2Ffed7cb61%2FKai-Havertz&div=div_scout_summary_AM',
      user: @josem,
      leagues: [@epl]
      )

      Player.create!(
        name: 'Joao Felix',
        img_url: 'https://img.a.transfermarkt.technology/portrait/header/462250-1574866535.jpg?lm=1',
        position: 'midfielder',
        footed: 'right',
        height_weight: '5-10½, 139lb',
        national_team: 'Portugal',
        club: 'Atletico Madrid, Spain',
        ratings: '84',
        potentials: '92',
        stats_url: 'https://widgets.sports-reference.com/wg.fcgi?css=1&site=fb&url=%2Fen%2Fplayers%2F8aafd64f%2FJoao-Felix&div=div_scout_summary_FW',
        user: @pepg,
        leagues: [@laliga]
        )
  
        Player.create!(
        name: 'Alphonso Davies',
        img_url: 'https://img.a.transfermarkt.technology/portrait/header/424204-1570372661.jpg?lm=1',
        position: 'defender',
        footed: 'left',
        height_weight: '5-10, 152lb',
        national_team: 'Canada',
        club: 'Bayern Munich, Germany',
        ratings: '86',
        potentials: '93',
        stats_url: 'https://widgets.sports-reference.com/wg.fcgi?css=1&site=fb&url=%2Fen%2Fplayers%2Fd781d855%2FAlphonso-Davies&div=div_scout_summary_FB',
        user: @juliann,
        leagues: [@bundesliga]
        )

        Player.create!(
          name: 'Matthijs de Ligt',
          img_url: 'https://img.a.transfermarkt.technology/portrait/header/326031-1568111537.jpg?lm=1',
          position: 'defender',
          footed: 'right',
          height_weight: '6-2, 192lb',
          national_team: 'Netherlands',
          club: 'Juventus FC, Italy',
          ratings: '85',
          potentials: '94',
          stats_url: 'https://widgets.sports-reference.com/wg.fcgi?css=1&site=fb&url=%2Fen%2Fplayers%2Fd6e53a3a%2FMatthijs-de-Ligt&div=div_scout_summary_CB',
          user: @josem,
          leagues: [@seriea]
          )

          Player.create!(
            name: 'Jules Kounde',
            img_url: 'https://img.a.transfermarkt.technology/portrait/header/411975-1525683142.jpg?lm=1',
            position: 'defender',
            footed: 'right',
            height_weight: '5-10, 154lb',
            national_team: 'France',
            club: 'Sevilla FC, Spain',
            ratings: '84',
            potentials: '90',
            stats_url: 'https://widgets.sports-reference.com/wg.fcgi?css=1&site=fb&url=%2Fen%2Fplayers%2F4d1666ff%2FJules-Kounde&div=div_scout_summary_CB',
            user: @arsenew,
            leagues: [@ligue1]
            )

            Player.create!(
              name: 'Gianluigi Donnarumma',
              img_url: 'https://img.a.transfermarkt.technology/portrait/header/315858-1626449740.jpg?lm=1',
              position: 'goalkeeper',
              footed: 'right',
              height_weight: '6-5, 198lb',
              national_team: 'Italy',
              club: 'PSG, France',
              ratings: '89',
              potentials: '96',
              stats_url: 'https://widgets.sports-reference.com/wg.fcgi?css=1&site=fb&url=%2Fen%2Fplayers%2F08f5afaa%2FGianluigi-Donnarumma&div=div_scout_summary_GK',
              user: @alexf,
              leagues: [@ligue1]
              )

                Player.create!(
                  name: 'Unai Simon',
                  img_url: 'https://img.a.transfermarkt.technology/portrait/header/262396-1536311605.jpg?lm=1',
                  position: 'goalkeeper',
                  footed: 'right',
                  height_weight: '6-2½, 187lb',
                  national_team: 'Spain',
                  club: 'Athletic Bilbao, Spain',
                  ratings: '82',
                  potentials: '87',
                  stats_url: 'https://widgets.sports-reference.com/wg.fcgi?css=1&site=fb&url=%2Fen%2Fplayers%2F5dcf3e90%2FUnai-Simon&div=div_scout_summary_GK',
                  user: @juliann,
                  leagues: [@laliga]
                  )




  puts "#{Player.count} players created"

