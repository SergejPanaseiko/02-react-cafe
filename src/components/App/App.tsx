import { useState } from 'react';
import css from './App.module.css';
import { Votes, VoteType } from '../../types/votes';
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import Notification from '../Notification/Notification';

interface Values {
  x: number;
  y: number;
  z: number;
}

export default function App() {
  const [values, setValues] = useState<Values>({
    x: 1,
    y: 2,
    z: 3,
  });

  const updateValue = (key: keyof Values) => {
    setValues(prev => ({
      ...prev,
      [key]: prev[key] + 1,
    }));
  };

  return (
    <Headers
      values={values}
      onUpdate={updateValue}
    />
  );
}
