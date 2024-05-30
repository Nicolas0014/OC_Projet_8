import './TeamsList.scss';
import { useState, useEffect } from 'react';

export default function TeamsList() {

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('datas/teams/allTeams.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        let allTeams = [];

        data.forEach((region) => {
          allTeams.push(...region.teams);
        });

        setTeams(allTeams);

        console.log(allTeams)
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='teams-list'>
      <h2 className='title-category'>Teams</h2>
        <div className="container">
          {teams.map((team) => (
            <div key={team.teamID} className="team-card">
              <img src={team.logo} alt={team.name} />
              <p>{team.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
