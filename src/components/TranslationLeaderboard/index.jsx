import React, { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import './index.css'; 

const isDev = process.env.NODE_ENV === 'production';
const dummyData = isDev ? require('./dummyLeaderboard.json') : null;

const TranslationsLeaderboard = () => {
    const { siteConfig } = useDocusaurusContext();
    
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [currentSelection, setCurrentSelection] = useState('allTime');

    useEffect(() => {
        const loadData = (filename) => {
            if (isDev) {
                setLeaderboardData(dummyData);
            } else {
                import(`./${filename}`)
                    .then((data) => setLeaderboardData(data.default))
                    .catch((err) => console.error('Error loading leaderboard data:', err));
            }
        };

        const fileToLoad = currentSelection === 'allTime' ? 'leaderboard.json' : 'leaderboard-monthly.json';
        loadData(fileToLoad);
    }, [currentSelection]);
    
    return (
        <div className="leaderboard-container">
            <div className="leaderboard-buttons">
                <button onClick={() => setCurrentSelection('allTime')}>All Time</button>
                <button onClick={() => setCurrentSelection('monthly')}>Monthly</button>
            </div>
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
