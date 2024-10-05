import { useState } from "react";
import VotingButtons from "../components/VotingButtons";
import VotingResults from "../components/VotingResults";

export default function VotingPage() {
  const colors = ["Blau", "Rot", "Grün", "Gelb"];

  const [votes, setVotes] = useState([0, 0, 0, 0]);

  const handleVote = (index: number) => {
    const newVotes = [...votes];
    newVotes[index] += 1;
    setVotes(newVotes);
  };

  return (
    <main>
      <div className="card">
        <h2>Stimme für deine lieblingsfarbe</h2>
        <VotingButtons colors={colors} onVote={handleVote} />
        <hr />
        <VotingResults votes={votes} colors={colors} />
      </div>
    </main>
  );
}
