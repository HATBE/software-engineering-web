import { VotingType } from "../types/VotingType";
import VotingButton from "./VotingButton";

type VotingButtonsProps = {
  votings: VotingType[];
  onVote: (index: number) => void;
};

export default function VotingButtons({ votings, onVote }: VotingButtonsProps) {
  return (
    <div className="voting-btns">
      {votings.map((voting, idx) => (
        <VotingButton
          key={idx}
          color={voting.style}
          onVote={() => onVote(idx)}
        />
      ))}
    </div>
  );
}
