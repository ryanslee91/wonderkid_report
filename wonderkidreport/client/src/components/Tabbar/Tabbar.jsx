import React, { useEffect, useState } from 'react'
import PlayerCard from '../PlayerCard/PlayerCard'
import FeaturedCard from '../FeaturedCard/FeaturedCard'
import { Link } from 'react-router-dom'
import './Tabbar.css'

export default function Tabbar(props) {
  const [toggleState, setToggleState] = useState(1);

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
        <PlayerCard />
        </div>
      </div>
    </div>
  )
}
