var Matrix = require('lightning-matrix')
var html = require('yo-yo')

module.exports = function () {
  var el = html`<div class="viz-wrapper"></div>`

  var data = {
    matrix: [[9, 7, 7, 8, 3, 8, 5, 0, 6, 2], [5, 9, 8, 1, 8, 3, 8, 1, 3, 8], [5, 1, 4, 3, 4, 3, 9, 2, 3, 0], [1, 0, 2, 2, 0, 3, 1, 7, 1, 9], [3, 6, 7, 8, 1, 9, 6, 5, 6, 6], [1, 4, 4, 1, 3, 3, 2, 0, 4, 3], [1, 7, 0, 5, 5, 7, 6, 6, 1, 7], [0, 9, 8, 2, 9, 9, 1, 4, 7, 0], [1, 1, 9, 4, 8, 3, 9, 5, 2, 4], [9, 1, 4, 8, 0, 3, 3, 5, 2, 8]],
    colormap: 'Purples'
  }

  var options = {
    numbers: true,
    width: 600,
    height: 400
  }

  var matrix = new Matrix(el, data, null, options)
  return el
}
