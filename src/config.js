const PERSISTENCE_TYPES = {
    TYPE_MEM: 'MEMORY',
    TYPE_FILE: 'FILE SYSTEM',
    TYPE_MONGODB: 'MONGODB',
};

const config = {
  PORT: 3000,
  PERSISTENCE_TYPE: PERSISTENCE_TYPES.TYPE_MONGODB,
  MONGODB_CONNECTION_STR: "mongodb://localhost/crud-mongo",
  MONGODB_TIMEOUT: 2000,
};

export default config;
