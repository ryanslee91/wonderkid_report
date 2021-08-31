import { useState } from 'react';
import { useHistory } from 'react-router';

export default function PlayerCreate(props) {
  const [selectedLeague, setSelectedLeague] = useState("default");
  const history = useHistory()
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
    <div className='createPlayer'>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}>
        <h3>Create a Player</h3>
        <pre>
        <label>
          Name:
          <input type='text' name='name' value={name} onChange={handleChange} />
        </label><br />
        <label>
          Image:
          <input type='url' name='img_url' value={img_url} onChange={handleChange} />
        </label><br />
        <label>
          Position:
        <input type='text' name='position' value={position} onChange={handleChange} />
        </label><br />
        <label>
          Footed:
          <input type='text' name='footed' value={footed} onChange={handleChange} />
        </label><br />
        <label>
          Height/Weight:
          <input type='text' name='height_weight' value={height_weight} onChange={handleChange} />
        </label><br />
        <label>
          National Team:
          <input type='text' name='national_team' value={national_team} onChange={handleChange} />
        </label><br />
        <label>
          Club:
          <input type='text' name='club' value={club} onChange={handleChange} />
        </label><br />
        <label>
          Ratings:
          <input type='number' name='ratings' value={ratings} onChange={handleChange} />
        </label><br />
        <label>
          Potentials:
          <input type='number' name='potentials' value={potentials} onChange={handleChange} />
        </label><br />
        <label>
          Stats:
          <input type='url' name='stats_url' value={stats_url} onChange={handleChange} />
        </label><br />
          <button>Submit</button>
          </pre>
      </form>
    </div>
  )
}
