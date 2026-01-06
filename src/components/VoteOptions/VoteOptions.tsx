import css from './VoteOptions.module.css';
import type { VoteType } from '../../types/votes';

interface VoteOptionsProps {
  totalVotes: number;
  onVote: (key: VoteType) => void;
  onReset: () => void;
}

export default function VoteOptions({
  totalVotes,
  onVote,
  onReset,
}: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote('good')}>
        Good
      </button>
      <button className={css.button} onClick={() => onVote('neutral')}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onVote('bad')}>
        Bad
      </button>

      {totalVotes > 0 && (
        <button
          className={`${css.button} ${css.reset}`}
          onClick={onReset}
        >
          Reset
        </button>
      )}
    </div>
  );
}