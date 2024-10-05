type VotingButtonProps = {
  color: string;
  onVote: () => void;
};

export default function VotingButton({ color, onVote }: VotingButtonProps) {
  return (
    <button
      onClick={onVote}
      style={{ borderColor: color }}
      className={" vote-btn"}
    >
      {color}
    </button>
  );
}
