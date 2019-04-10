const resolvers = {
  Query: {
    getUser: () => {
      return {
        id: Math.round(Math.random() * 10),
        name: 'Bijay',
        message: 'Hope this works :D'
      }
    }
  }
}

export default resolvers;
