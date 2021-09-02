import React, { useState, useEffect } from 'react'
import PlayerCard from '../PlayerCard/PlayerCard'
import FeaturedCard from '../FeaturedCard/FeaturedCard'
import { Link } from 'react-router-dom'
import './Tabbar.css'


export default function Tabbar(props) {
  const [toggleState, setToggleState] = useState(1);
  const [queriedLeague, setQueriedLeague] = useState("default")
  const { players, leagues } = props;

  useEffect(() => {
    const fetchQueriedLeagues = () => {
      const queried =
        queriedLeague === "default"
          ? players
          : players?.filter(
            (player) =>
              player.leagues[0].name === queriedLeague ||
              player.leagues[1]?.name === queriedLeague
          );
      setQueriedLeague(queried);
      
    }
    fetchQueriedLeagues()
  }, [queriedLeague, players])
  

  const handleChange = (e) => {
    setQueriedLeague(e.target.value)
  }

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <div className="tab-container">
      <div className="bloc-tabs">
        <div className={toggleState === 1 ? "tab active-tab" : "tab"} onClick={() => toggleTab(1)}>Featured</div>
        <div className={toggleState === 2 ? "tab active-tab" : "tab"} onClick={() => toggleTab(2)}>All Players</div>
     
      </div>
      <div className="content-tabs">
        <div className={toggleState === 1 ? "content active-content" : "content"}>
        <FeaturedCard />
        </div>
        <div className={toggleState === 2 ? "content active-content" : "content"}>
        <Link id="sortLeague" to="/leagues/"><span id="sortSpan">Sort By Leagues</span></Link>
        {leagues?.map((league) => (
        <p key={league.id}>{league.name}</p>
      ))}
         {leagues?.map((league) => (
        <p key={league.id}>{league.name.players}</p>
      ))}
      {/* <select
            value={setQueriedLeague}
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
          <PlayerCard />
        </div>
      </div>
    </div>
  )
}
