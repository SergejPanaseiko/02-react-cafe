import { useState } from 'react'
import './App.css'
import css from './App.module.css'
import CafeInfo from './components/CafeInfo/CafeInfo'
import VoteOptions from './components/VoteOptions/VoteOptions'
import VoteStats from './components/VoteStats/VoteStats'
import Notification from './components/Notification/Notification'
import Votes from './types/votes';

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateValue = (key: keyof Votes) => {
    setVotes(prev => ({
      ...prev,
      [key]: prev[key] + 1,
    }));
  };

  const onReset = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  const totalVotes =
    votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes? Math.round((votes.good / totalVotes) * 100) : 0;
  
  
  return (
    <>
      <CafeInfo />
      <VoteOptions
        totalVotes={totalVotes}
        onVote={updateValue}
        onReset={onReset}
      />
      {totalVotes === 0 ? (
        <Notification />
      ) : (
          <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={ positiveRate } />
      )}
    </>
  );
}