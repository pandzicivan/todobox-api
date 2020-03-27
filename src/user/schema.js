module.exports = {
  registerSchema: {
    properties: {
      firstName: {
        type: 'string',
        minLength: 2,
      },
      lastName: {
        type: 'string',
        minLength: 2,
      },
      email: {
        type: 'string',
        format: 'email',
      },
      password: {
        type: 'string',
        minLength: 4,
      },
    },
    required: ['firstName', 'lastName', 'email', 'password'],
  },
  loginSchema: {
    properties: {
      email: {
        type: 'string',
        format: 'email',
      },
      password: {
        type: 'string',
      },
    },
    required: ['email', 'password'],
  },
};
