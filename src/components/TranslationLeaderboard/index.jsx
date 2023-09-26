import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import leaderboardData from './leaderboard.json';
import './index.css'; // Adjust the path if the CSS file is not in the same directory

const TranslationsLeaderboard = () => {
    const { siteConfig } = useDocusaurusContext();
    
    return (
      <div className="leaderboard-container">
        {leaderboardData.map((user, index) => (
          <div key={index} className="user-card">
            <div className="avatar-container">
              <span className="ranking">{index + 1}</span>
              <img className="avatar" src={user.avatarUrl} alt={`${user.Name}'s avatar`} />
              <span className="username">{user.Name}</span>
            </div>
            <span className="translated-words">{user["Translated (Words)"]}</span>
          </div>
        ))}
      </div>
    );
  };
  

export default TranslationsLeaderboard;
