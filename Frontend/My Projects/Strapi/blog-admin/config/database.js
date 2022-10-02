module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'blog-admin'),
      user: env('DATABASE_USERNAME', 'rajalam'),
      password: env('DATABASE_PASSWORD', 'Rajalamdev2484;'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
