module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/populate',
     handler: 'populate.user',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
