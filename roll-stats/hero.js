const { d6 } = require('../lib/random');

/**
 * Roll 4d6, Reroll 1s, Keep 3
 * Repeat 7 times, Keep 6
 * Repeat 4 times, Choose 1
 */

const hero = module.exports = function hero() {
  const results = [];

  // Repeat 4 times
  for (let i = 0; i < 4; i++) {

    // Repeat 7 times, Keep 6
    const stats = [];
    for (let j = 0; j < 7; j++) {

      // Roll 4d6, Reroll 1s, Keep 3
      const stat = [];
      for (let k = 0; k < 4; k++) {
        stat.push(d6n1());
      }
      stat.sort(sortNumbers);
      stat.splice(0, 1); // remove lowest

      stats.push(stat.reduce((sum, value) => sum + value, 0));
    }
    stats.sort(sortNumbers);
    stats.splice(0, 1); // remove lowest

    results.push(stats);
  }

  return results;
};

function d6n1() {
  while(1) {
    const roll = d6();
    if (roll !== 1) {
      return roll;
    }
  }
}

function sortNumbers(a, b) {
  return a - b;
}

if (require.main === module) {
  const results = hero();
  for (let result of results) {
    console.log(result, result.reduce((sum, value) => sum + value, 0));
  }
}
