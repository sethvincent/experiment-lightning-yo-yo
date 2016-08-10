var Map = require('lightning-map')
var html = require('yo-yo')

module.exports = function () {
  var el = html`<div class="viz-wrapper"></div>`

  var data = {
    regions: ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY'],
    values: [37, 1, 47, 47, 9, 38, 24, 45, 28, 4, 38, 18, 32, 33, 19, 22, 11, 45, 42, 44, 19, 26, 30, 27, 26, 15, 5, 5, 19, 44, 33, 25, 12, 30, 16, 41, 43, 22, 28, 44, 48, 3, 27, 8, 7, 23, 44, 25, 38, 2, 36, 16, 7],
    colormap: 'Oranges'
  }

  var options = {
    width: 600,
    height: 400
  }

  var map = new Map(el, data, null, options)
  return el
}
