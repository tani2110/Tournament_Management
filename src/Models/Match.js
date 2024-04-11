import uid from "uid";

function team_one() {
  return "team_one";
}
function team_two() {
  return "team_two";
}
class Match {
  constructor(team_one, team_two) {
    this.id = uid;
    this.team_one = team_one;
    this.team_two = team_two;
    this.winner = null;
    this.score_one = 0;
    this.score_two = 0;
  }

  setWinner(winner) {
    this.winner = winner;
  }
  matchEnded() {
    return this.winner !== null;
  }
}
export { team_one, team_two };
export default Match;
