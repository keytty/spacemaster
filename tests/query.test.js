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

const { query } = require('../src/query.js')

_.each(testdatas, ({ message, input, output }) => {
  test(message, () => {
    const { computed } = query(input)

    expect(computed).toEqual(output.computed)
  })
})
