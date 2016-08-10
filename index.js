var html = require('yo-yo')

function content () {
  return html`<div class="app">
    <h1>using lightning with yo-yo</h1>
    <h2><a href="https://github.com/lightning-viz/lightning-adjacency">adjacency</a></h2>
    ${require('./examples/adjacency')()}

    <h2><a href="https://github.com/lightning-viz/lightning-circle">circle</a></h2>
    ${require('./examples/circle')()}

    <h2><a href="https://github.com/lightning-viz/lightning-force">force</a></h2>
    ${require('./examples/force')()}

    <h2><a href="https://github.com/lightning-viz/lightning-graph-bundled">graph-bundled</a></h2>
    ${require('./examples/graph-bundled')()}

    <h2><a href="https://github.com/lightning-viz/lightning-histogram">histogram</a></h2>
    ${require('./examples/histogram')()}

    <h2><a href="https://github.com/lightning-viz/lightning-line">line</a></h2>
    ${require('./examples/line')()}

    <h2><a href="https://github.com/lightning-viz/lightning-map">map</a></h2>
    ${require('./examples/map')()}

    <h2><a href="https://github.com/lightning-viz/lightning-matrix">matrix</a></h2>
    ${require('./examples/matrix')()}

    <h2><a href="https://github.com/lightning-viz/lightning-scatter">scatter</a></h2>
    ${require('./examples/scatter')()}
  </div>`
}

var tree = content()
document.body.appendChild(tree)
