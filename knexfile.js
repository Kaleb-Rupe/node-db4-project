const sharedConfig = {
  client: "sqlite3",
  migration: { directory: "./data/migrations" },
  seeds: {
    directory: "./data/seeds",
  },
  //sqlite3
  useNullAsDefault: true,
  pool: {
    afterCreate: (conn, done) => conn.run("PRAGMA foreign_keys = ON", done),
  },
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: {
      filename: "./data/cook_book.db3",
    },
  },
  testing: {
    ...sharedConfig,
    connections: { filename: "./data/cook_book.test.db3" },
  },
  production: {},
};