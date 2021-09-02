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
        {leagues[0]?.name}<br />
        <div id="eplPlayers">
        {leagues?.map((league) => {
          return league.players.map((player) => {
            if (league.name === 'English Premiere League') {
              return player.name
            }
          })
        })}
          </div>
        </label>
        <label id="laliga">
        {leagues[1]?.name}<br />
        </label>
        <label id="bliga">
        {leagues[2]?.name}<br />
        </label>
        <label id="seriea">
        {leagues[3]?.name}<br />
        </label>
        <label id="ligueone">
        {leagues[4]?.name}<br />
        </label>
        <label id="pliga">
        {leagues[5]?.name}<br />
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
