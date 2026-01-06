import css from './VoteOptions.module.css';
import { Votes } from '../../types/votes';
// import { VoteType } from '../../types/votes';


interface VoteOptionsProps{
    totalVotes: number;
    onVote: (key: keyof Votes) => void;
    onReset: () => void;
    };


export default function VoteOptions({totalVotes, onVote,onReset }: VoteOptionsProps) {
    return (
        <div className={css.container}>
            <button className={css.button} onClick={() => onVote("good")}>Good</button>
            <button className={css.button} onClick={() => onVote("neutral")}>Neutral</button>
            <button className={css.button} onClick={() => onVote("bad")}>Bad</button>
            {totalVotes > 0 && (
        <button
          className={`${css.button} ${css.reset}`}
          onClick={onReset}>
          Reset
        </button>
      )}
        </div>
    );
}


