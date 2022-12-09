const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let highest = 0;
  let winner = "";
  vegetables.forEach(element => {
    if (element[metric] > highest) {
      highest = element[metric];
      winner = element.submitter;
    }
  });
  return winner;
};

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));
