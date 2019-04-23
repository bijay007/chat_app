const url = {
  ip: {
    local: process.env.HOSTNAME,
    http: 'localhost',
    ws: 'localhost'
  },
  port: {
    local: process.env.PORT,
    http: '4000',
    ws: '4000'
  }
}

export default url;
