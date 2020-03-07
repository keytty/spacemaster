const _ = require('lodash')

const points = {
  sum: (ps) => _.reduce(
    ps,
    ({ x: sx, y: sy }, { x, y }) => ({ x: x + sx, y: y + sy }),
    { x: 0, y: 0 }
  ),
  min: (ps, maxp) => _.reduce(
    ps,
    ({ x: sx, y: sy }, { x, y }) => ({ x: Math.min(x, sx), y: Math.min(y, sy) }),
    maxp
  ),
  max: (ps, minp) => _.reduce(
    ps,
    ({ x: sx, y: sy }, { x, y }) => ({ x: Math.max(x, sx), y: Math.max(y, sy) }),
    minp
  )
}

const point = {
  sum: (p1, p2) => points.sum([p1, p2]),
  min: (p1, p2) => points.min([p1], p2),
  max: (p1, p2) => points.max([p1], p2)
}

const query = ({
  resolution: { width, height },
  positions: { alpha, delta }
}) => {
  const position = _.flow(
    // first add delta to alpha
    point.sum,
    // limit up to resolution
    p => point.min(p, { x: width, y: height }),
    // limit down to zero
    p => point.max(p, { x: 0, y: 0 })
  )(alpha, delta)

  return { computed: { position } }
}

module.exports = { query }
