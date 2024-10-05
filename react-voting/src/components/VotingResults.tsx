import { VotingType } from "../types/VotingType";

type VotingResultsProps = {
  votings: VotingType[];
};

export default function VotingResults({ votings }: VotingResultsProps) {
  const totalVotes = votings.reduce((total, vote) => total + vote.count, 0);

  return (
    <div>
      <p>Abgegebene Stimmen: {totalVotes}</p>
      <table>
        <tbody>
          {votings.map((voting) => {
            let percentage = 0;
            if (totalVotes > 0) {
              percentage = (voting.count / totalVotes) * 100;
            }
            return (
              <tr key={voting.id}>
                <th style={{ color: voting.style }}>{voting.color}</th>
                <td>
                  ({percentage.toFixed(0)}%) {voting.count} stimmen
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
