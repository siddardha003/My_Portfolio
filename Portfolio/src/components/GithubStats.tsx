"use client";
import { useEffect, useState } from "react";
import { Card } from "./Card";
import GitHubCalendar from "react-github-calendar";

const GitHubStats = ({ username }: { username: string }) => {
  const [stats, setStats] = useState({
    followers: 0,
    repositories: 0,
  });

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();

        const reposResponse = await fetch(data.repos_url);
        const reposData = await reposResponse.json();

        setStats({
          followers: data.followers,
          repositories: reposData.length,
        });
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    fetchGitHubData();
  }, [username]);

  return (
    <Card className="p-8 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">GitHub Stats</h2>
      <p>👥 Followers: {stats.followers}</p>
      <p>📂 Repositories: {stats.repositories}</p>
      <h2 className="text-xl font-semibold">Contribution Graph</h2>
      <GitHubCalendar
        username={username}
        transformData={(data) => data}
        colorScheme="dark"
        blockSize={15}
        blockMargin={5}
        fontSize={14}
      />
    </Card>
  );
};

export default GitHubStats;
