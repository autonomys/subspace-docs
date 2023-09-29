import React, { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import './index.css'; // Adjust the path if the CSS file is not in the same directory

// Import dummy data for development
const isDev = process.env.NODE_ENV === 'development';
const dummyData = isDev ? require('./dummyLeaderboard.json') : null;

const TranslationsLeaderboard = () => {
    const { siteConfig } = useDocusaurusContext();
    
    // State to hold leaderboard data
    const [leaderboardData, setLeaderboardData] = useState([]);
    
    // Effect to load the appropriate data
    useEffect(() => {
        if (isDev) {
            // Use dummy data in development
            setLeaderboardData(dummyData);
        } else {
            // Fetch real data in production
            import('./leaderboard.json')
                .then((data) => setLeaderboardData(data.default))
                .catch((err) => console.error('Error loading leaderboard data:', err));
        }
    }, []);
    
    return (
      <div className="leaderboard-container">
        {leaderboardData.map((user, index) => (
          <div key={index} className="user-card">
            <div className="avatar-container">
              <span className="ranking">
                  {index === 0 ? '🏆' : index === 1 ? '🥈' : index === 2 ? '🥉' : index + 1}
              </span>
              <img className="avatar" src={user.avatarUrl} alt={`${user.Name}'s avatar`} />
              <div className="user-info">
                  <span className="username">{user.Name}</span>
                  <span className="languages">{user.Languages || 'N/A'}</span>
              </div>
            </div>
            <span className="translated-words">{user["Translated (Words)"]} words</span>
          </div>
        ))}
      </div>
    );
};

export default TranslationsLeaderboard;
