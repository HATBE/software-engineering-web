type VotingButtonProps = {
  color: string;
  onClick: () => void;
};

export default function VotingButton({ color, onClick }: VotingButtonProps) {
  return (
    <button onClick={onClick} className={color + " vote-btn"}>
      {color}
    </button>
  );
}
