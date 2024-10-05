type VotingButtonProps = {
  color: string;
  onVote: () => void;
};

export default function VotingButton({ color, onVote }: VotingButtonProps) {
  return (
    <button onClick={onVote} className={color + " vote-btn"}>
      {color}
    </button>
  );
}
