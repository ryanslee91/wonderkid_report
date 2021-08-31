import React, { useState } from 'react'
import './Leagues.css'

export default function Leagues(props) {
  const [value, setValue] = useState('');
  const { leagues, currentUser } = props;
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  // console.log(leagues)
  // console.log(currentUser)
  return (
    <div className="filterDiv">
      {leagues?.map((league) => (
        <p key={league.id}>{league.name}</p>
      ))}
         {leagues?.map((league) => (
        <p key={league.id}>{league.name.players}</p>
      ))}
      <select
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
          </select>
    </div>

  )
}
