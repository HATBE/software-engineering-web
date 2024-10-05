import { useState } from "react";
import VotingButtons from "../components/VotingButtons";
import VotingResults from "../components/VotingResults";
import { VotingType } from "../types/VotingType";

export default function VotingPage() {
  const initialVotings: VotingType[] = [
    {
      color: "Blau",
      style: "blue",
      count: 0,
    },
    {
      color: "Rot",
      style: "red",
      count: 0,
    },
    {
      color: "Grün",
      style: "green",
      count: 0,
    },
    {
      color: "Gelb",
      style: "yellow",
      count: 0,
    },
  ];

  const [votes, setVotes] = useState(initialVotings);

  const handleVote = (index: number) => {
    const newVotes = [...votes];
    newVotes[index] = {
      ...newVotes[index],
      count: newVotes[index].count + 1,
    };
    setVotes(newVotes);
  };

  return (
    <main>
      <div className="card">
        <h2>Stimme für deine lieblingsfarbe</h2>
        <VotingButtons votings={votes} onVote={handleVote} />
        <hr />
        <VotingResults votings={votes} />
      </div>
    </main>
  );
}
