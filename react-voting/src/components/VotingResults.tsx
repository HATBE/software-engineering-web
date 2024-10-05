type VotingResultsProps = {
  votes: number[];
  colors: string[];
};

export default function VotingResults({ votes, colors }: VotingResultsProps) {
  let totalVotes = 0;
  votes.forEach((vote) => {
    totalVotes = totalVotes + vote;
  });

  return (
    <div>
      <p>Abgegebene Stimmen: {totalVotes}</p>
      <table>
        {colors.map((color, idx) => {
          let percentage = 0;
          if (totalVotes > 0) {
            percentage = (votes[idx] / totalVotes) * 100;
          }
          return (
            <tr key={idx}>
              <th>{color}</th>
              <td>
                ({percentage.toFixed(0)}%) {votes[idx]} stimmen
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
