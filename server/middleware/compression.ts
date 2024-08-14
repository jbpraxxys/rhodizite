import compression from 'compression'

export default defineEventHandler((event) => {
  compression()(event.node.req, event.node.res, () => {})
})
