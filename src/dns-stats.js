const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  const dnsStats = {};

  for (let i = 0; i < domains.length; i++) {
    const domainParts = domains[i].split('.').reverse();
    let dns = '';

    for (let j = 0; j < domainParts.length; j++) {
      dns += '.' + domainParts[j];
      dnsStats[dns] = dnsStats[dns] ? dnsStats[dns] + 1 : 1;
    }
  }

  return dnsStats;
}

module.exports = {
  getDNSStats
};
