import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import VotingButtons from "../components/VotingButtons";
import VotingResults from "../components/VotingResults";
import { VotingType } from "../types/VotingType";

export default function VotingPage() {
  const initialVotings: VotingType[] = [
    {
      id: uuidv4(),
      color: "Blau",
      style: "blue",
      count: 0,
    },
    {
      id: uuidv4(),
      color: "Rot",
      style: "red",
      count: 0,
    },
    {
      id: uuidv4(),
      color: "Grün",
      style: "green",
      count: 0,
    },
    {
      id: uuidv4(),
      color: "Gelb",
      style: "yellow",
      count: 0,
    },
  ];

  const [votes, setVotes] = useState(initialVotings);

  const handleVote = (id: string) => {
    const newVotes = votes.map((vote) =>
      vote.id === id ? { ...vote, count: vote.count + 1 } : vote
    );
    setVotes(newVotes);
  };

  return (
    <main>
      <div className="card">
        <h2>Stimme für deine Lieblingsfarbe</h2>
        <VotingButtons votings={votes} onVote={handleVote} />
        <hr />
        <VotingResults votings={votes} />
      </div>
    </main>
  );
}
