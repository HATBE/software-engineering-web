import VotingButton from "./VotingButton";

type VotingButtonsProps = {
  colors: string[];
  onVote: (index: number) => void;
};

export default function VotingButtons({ colors, onVote }: VotingButtonsProps) {
  return (
    <div className="voting-btns">
      {colors.map((color, idx) => (
        <VotingButton key={idx} color={color} onClick={() => onVote(idx)} />
      ))}
    </div>
  );
}
