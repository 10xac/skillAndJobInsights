module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1005c1fbecc8c84526af5e2cfde28a04'),
  },
});
