class User {
  constructor(userObj) {
    this.id = userObj.id;
    this.name = userObj.name;
    this.address = userObj.address;
    this.email = userObj.email;
    this.strideLength = userObj.strideLength;
    this.dailyStepGoal = userObj.dailyStepGoal;
    this.friends = userObj.friends;
  }

  returnUserFirstName() {
    let arrayedName = this.name.split(" ");
    return arrayedName[0];
  };
};

module.exports = User;