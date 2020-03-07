const assert = require('assert')
const _ = require('lodash')

const testdatas = [
  {
    message: 'test max width',
    input: {
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
    },
    output: {
      computed: {
        position: {
          x: 1000,
          y: 300
        }
      }
    }
  },
  {
    message: 'test max height & min width',
    input: {
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
          x: -1200,
          y: 900
        }
      }
    },
    output: {
      computed: {
        position: {
          x: 0,
          y: 800
        }
      }
    }
  }
]

const { query } = require('./index.js')

_.each(testdatas, testdata => {
  const { computed } = query(testdata.input)

  assert(
    _.isEqual(computed, testdata.output.computed),
    testdata.message
  )
})
