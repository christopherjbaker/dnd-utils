var crypto = require('crypto');

const random = module.exports = function random(min, max) {
  if (typeof max !== 'undefined') {
    return Math.floor(random() * (max - min) + min);
  }

  if (typeof min !== 'undefined') {
    return random(0, min);
  }

  var rand = crypto.randomBytes(4);
  return rand.readUInt32BE(0) / 4294967296.0; // returns [0, 1)
};

module.exports.d4  = () => random(4) + 1;
module.exports.d6  = () => random(6) + 1;
module.exports.d8  = () => random(8) + 1;
module.exports.d10 = () => random(10) + 1;
module.exports.d12 = () => random(12) + 1;
module.exports.d20 = () => random(20) + 1;
