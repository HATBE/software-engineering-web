import { VotingType } from "../types/VotingType";
import VotingButton from "./VotingButton";

type VotingButtonsProps = {
  votings: VotingType[];
  onVote: (id: string) => void;
};

export default function VotingButtons({ votings, onVote }: VotingButtonsProps) {
  return (
    <div className="voting-btns">
      {votings.map((voting) => (
        <VotingButton
          key={voting.id}
          color={voting.style}
          onVote={() => onVote(voting.id)}
        />
      ))}
    </div>
  );
}
