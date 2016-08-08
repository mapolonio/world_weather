module.exports = class APIError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.name = 'APIError';
  }
};
