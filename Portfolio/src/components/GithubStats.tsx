"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Repo {
    id: number;
    name: string;
    stargazers_count: number;
    followers: number;
    contributions: number;
}

const GitHubStats: React.FC = () => {
    const [stats, setStats] = useState<Repo[] | null>(null);
    const username = 'siddardha003'; // Replace with your GitHub username

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axios.get<Repo[]>(`https://api.github.com/users/${username}/repos`);
                setStats(response.data);
            } catch (error) {
                console.error('Error fetching GitHub stats:', error);
            }
            try {
                const response = await axios.get<Repo[]>(`https://api.github.com/users/${username}/followers`);
                setStats(response.data);
            } catch (error) {
                console.error('Error fetching GitHub stats:', error);
            }
            try {
                const response = await axios.get<Repo[]>(`https://api.github.com/users/${username}/contributions`);
                setStats(response.data);
            } catch (error) {
                console.error('Error fetching GitHub stats:', error);
            }
        };

        fetchStats();
    }, [username]);

    if (!stats) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>GitHub Stats</h2>
            <ul>
                {stats.map(repo => (
                    <li key={repo.id}>
                        {repo.name}: {repo.stargazers_count} stars
                    </li>
                    
                    
                ))}
            </ul>
        </div>
    );
};

export default GitHubStats;
