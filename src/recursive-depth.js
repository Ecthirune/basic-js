const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth( arr ) {
      
    if (!Array.isArray(arr)) {
      return 0;
    }
    
    const depths = arr.map(item => this.calculateDepth(item));
  
    if (depths.length === 0) {
      return 1;
    }
    
    return Math.max(...depths) + 1;
  }
}

module.exports = {
  DepthCalculator
};
