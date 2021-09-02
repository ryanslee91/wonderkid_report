import React, { useState } from 'react'
import './Leagues.css'

export default function Leagues(props) {
  // const [value, setValue] = useState('');
  const { leagues } = props;
  const { players } = props;
  // const handleChange = (e) => {
  //   setValue(e.target.value)
  // }
  // console.log(leagues[0]?.players[0].name)
  
  // console.log(currentUser)

  const leagueMapping = 
      leagues?.map((league) => {
        return league.players.map((player) => {
          if (league.name === 'La Liga') {
            return player.name
          }
        })
      })

  
  console.log(leagueMapping)
  return (
    <div className="leagueDiv">
      <label id="epl">
        <span id="leagueName">
          {leagues[0]?.name}<br />
          </span>
        {leagues?.map((league) => {
          return league.players.map((player) => {
            if (league.name === 'English Premiere League') {
              return player.name
            }
          })
        })} 
        </label>
        <label id="laliga">
        <span id="leagueName">
          {leagues[1]?.name}<br />
          </span>
        {leagues?.map((league) => {
          return league.players.map((player) => {
            if (league.name === 'La Liga') {
              return player.name
            }
          })
        })} 
        </label>
        <label id="bliga">
        <span id="leagueName">
          {leagues[2]?.name}<br />
          </span>
        {leagues?.map((league) => {
          return league.players.map((player) => {
            if (league.name === 'Bundesliga') {
              return player.name
            }
          })
        })} 
        </label>
        <label id="seriea">
        <span id="leagueName">
          {leagues[3]?.name}<br />
          </span>
        {leagues?.map((league) => {
          return league.players.map((player) => {
            if (league.name === 'Serie A') {
              return player.name
            }
          })
        })} 
        </label>
        <label id="ligueone">
        <span id="leagueName">
          {leagues[4]?.name}<br />
          </span>
        {leagues?.map((league) => {
          return league.players.map((player) => {
            if (league.name === 'Ligue 1') {
              return player.name
            }
          })
        })} 
        </label>
        <label id="pliga">
        <span id="leagueName">
          {leagues[5]?.name}<br />
          </span>
        {leagues?.map((league) => {
          return league.players.map((player) => {
            if (league.name === 'Primeira Liga') {
              return player.name
            }
          })
        })} 
        </label>
 
      
      {/* <select
            value={setValue}
            placeholder="League"
            onChange={handleChange}
          >
            <option disabled value="default">
              Default
            </option>
            {leagues?.map((league) => (
              <option value={league.name} key={league.id}>
                {league.name}
              </option>
            ))}
          </select> */}
    </div>

  )
}
