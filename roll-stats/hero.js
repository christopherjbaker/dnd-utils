const { d6 } = require('../lib/random');
const repeat = require('../lib/repeat');

/**
 * Roll 4d6, Reroll 1s, Keep 3
 * Repeat 7 times, Keep 6
 * Repeat 4 times, Choose 1
 */

function hero() {
  const sets = repeat(4, () => {
    const stats = repeat(7, () => {
      const stat = repeat(4, () => d6n1());

      if (Math.min(...stat) === 6) {
        return 20;
      }

      removeLowest(stat);

      return stat.reduce((sum, value) => sum + value, 0);
    });

    removeLowest(stats);
    stats.reverse();

    return stats;
  });

  const results = sets.map((stats) => {
    const points = stats.reduce((sum, value) => sum + value, 0);

    return {
      stats,
      points,
    }
  });

  results.sort(({ points: a }, { points: b }) => b - a)

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

function removeLowest(input) {
  input.sort((a, b) => a - b);
  input.splice(0, 1);
}

module.exports = hero;

if (require.main === module) {
  const results = hero();
  for (let result of results) {
    console.log(result.points, result.stats);
  }
}
