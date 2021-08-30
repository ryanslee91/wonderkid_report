import React from 'react'
import PlayerCard from '../../components/PlayerCard/PlayerCard'

export default function Home() {
  return (
    <div>
      <Layout currentUser={props.currentUser} setCurrentUser={props.setCurrentUser}>
<PlayerCard />
      </Layout>
    </div>
  )
}
