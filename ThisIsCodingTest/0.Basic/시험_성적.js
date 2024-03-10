function solution() {
  let score = 100;
  score = Math.floor(score / 10); // *

  switch (score) {
    case 5:
      return "F";
    case 6:
      return "D";
    case 7:
      return "C";
    case 8:
      return "B";
    default:
      return "A";
  }
}

console.log(solution());
