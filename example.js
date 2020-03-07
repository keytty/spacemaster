// import
const spacemaster = require('./query.js')

// or like this
const { query } = require('./query.js')

const example1 = {
  resolution: {
    width: 1000,
    height: 800
  },
  positions: {
    alpha: {
      x: 900,
      y: 500
    },
    delta: {
      x: 200,
      y: -200
    }
  }
}

const result1 = spacemaster.query(example1)

console.info('\n[example1]')
console.info('input:', example1)
console.info('output:', result1)

const resolution = { width: 800, height: 600 }
const alpha = { x: 100, y: 400 }
const delta = { x: 100, y: -300 }
const example2 = { resolution, positions: { alpha, delta } }

const result2 = query(example2)

console.info('\n[example2]')
console.info('input:', example2)
console.info('output:', result2)
