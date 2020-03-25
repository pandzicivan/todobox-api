class User {
  constructor(user) {
    this.id = user.id;
    this.firstName = user.first_name;
    this.lastName = user.last_name;
    this.email = user.email;
  }
};

module.exports = User;
