import { useState, useEffect } from 'react';
import './App.css';
import CafeInfo from './components/CafeInfo/CafeInfo';
import VoteOptions from './components/VoteOptions/VoteOptions';
import VoteStats from './components/VoteStats/VoteStats';
import Notification from './components/Notification/Notification';
import type { Votes, VoteType } from './types/votes';

export default function App() {
    const [votes, setVotes] = useState<Votes>(() => {
    const savedVotes = window.localStorage.getItem('saved-votes');
    return savedVotes !== null 
      ? JSON.parse(savedVotes) 
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem('saved-votes', JSON.stringify(votes));
  }, [votes]);

  const updateVote = (key: VoteType) => {
    setVotes(prev => ({
      ...prev,
      [key]: prev[key] + 1,
    }));
  };

const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes > 0 
    ? Math.round((votes.good / totalVotes) * 100) 
    : 0;

  return (
    <div>
      <CafeInfo />
      
      <VoteOptions
        onVote={updateVote}
        onReset={resetVotes}
        canReset={totalVotes > 0}
      />

      {totalVotes > 0 ? (
        <VoteStats 
          votes={votes} 
          totalVotes={totalVotes} 
          positiveRate={positiveRate} 
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}