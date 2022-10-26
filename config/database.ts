export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'spa-strapi-v4'),
      user: env('DATABASE_USERNAME', 'mlghr'),
      password: env('DATABASE_PASSWORD', 'Leahcim12!'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
