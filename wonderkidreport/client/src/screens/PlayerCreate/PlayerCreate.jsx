import { useState } from 'react';

export default function PlayerCreate(props) {
  const [selectedLeague, setSelectedLeague] = useState("default")
  const [formData, setFormData] = useState({
    name: '',
    img_url: '',
    position: '',
    footed: '',
    height_weight: '',
    national_team: '',
    club: '',
    ratings: '',
    potentials: '',
    stats_url: ''
  })
  const { name, img_url, position, footed,
    height_weight, national_team, club,
    ratings, potentials, stats_url } = formData;
  const { leagues } = props;
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleLeagueChange = (e) => {
    setSelectedLeague(e.target.value)
  }

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}>
        <h3>Create a Player</h3>
        <label>
          Name:
          <input type='text' name='name' value={name} onChange={handleChange} />
        </label>
        <label>
          Image:
          <input type='url' name='img_url' value={img_url} onChange={handleChange} />
        </label>
        <label>
          Position:
        <input type='text' name='position' value={position} onChange={handleChange} />
        </label>
        <label>
          Footed:
          <input type='text' name='footed' value={footed} onChange={handleChange} />
        </label>
        <label>
          Height/Weight:
          <input type='text' name='height_weight' value={height_weight} onChange={handleChange} />
        </label>
        <label>
          National Team:
          <input type='text' name='national_team' value={national_team} onChange={handleChange} />
        </label>
        <label>
          Club:
          <input type='text' name='club' value={club} onChange={handleChange} />
        </label>
        <label>
          Ratings:
          <input type='number' name='ratings' value={ratings} onChange={handleChange} />
        </label>
        <label>
          Potentials:
          <input type='number' name='potentials' value={potentials} onChange={handleChange} />
        </label>
        <label>
          Stats:
          <input type='url' name='stats_url' value={stats_url} onChange={handleChange} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}
