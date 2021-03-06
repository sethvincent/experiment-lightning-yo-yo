var Circle = require('lightning-circle')
var html = require('yo-yo')

module.exports = function () {
  var el = html`<div class="viz-wrapper"></div>`

  var data = {
    nodes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    links: [[0, 1], [0, 2], [3, 5], [2, 4], [1, 2], [3, 4], [1, 5], [1, 6], [2, 7], [2, 8], [3, 8], [8, 7]],
    labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
    group: [[0, 0, 0, 1, 1, 1, 2, 2, 2]]
  }

  var options = {
    labels: true,
    width: 600,
    height: 400
  }

  var circle = new Circle(el, data, null, options)
  return el
}
