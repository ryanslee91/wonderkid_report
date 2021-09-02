import React, { useState } from 'react'
import './Leagues.css'

export default function Leagues(props) {
  const [value, setValue] = useState('');
  const { leagues } = props;
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  console.log(leagues[0]?.players[0].name)
  // console.log(currentUser)

  const leagueMapping = 
      leagues?.map((league) => {
        return league.players.map((player) => {
          return player.name
        })
      }) 
  
  console.log(leagueMapping)
  return (
    <div className="filterDiv">
          {leagueMapping}
      {leagues?.map((league) => (
        <p id="leagueName" key={league.id}>
          {league.name}
        </p>
        
      ))}
      
     
      
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
