// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

//IMPORTS:
import userData from './data/users';
import UserRepository from './UserRepository';
import User from './User';
import fetchData from './apiCalls.js';

//GLOBAL VARIABLES:
let userRepository = new UserRepository(userData);
let currentUser;
let allUserData;
let allSleepData;
let allHydrationData;

// FETCH PROMISE:
function startData() {
    Promise.all([fetchData('users'), fetchData('sleep'), fetchData('hydration')])
      .then((dataSet) => {
        allUserData = dataSet[0];
        allSleepData = dataSet[1];
        allHydrationData = dataSet[2];
  });
};

function printData() {
  startData().then((a) => console.log(a))
}

printData();
console.log(allHydrationData);


//QUERY SELECTORS:
let waterIcon = document.getElementById('water-icon');
let sleepIcon = document.getElementById('sleep-icon');
let activityIcon = document.getElementById('activity-icon');
let welcomeMessage = document.getElementById('welcomeMessage');
let friendContainer = document.getElementById('myFriendBoxContainer');
let userInfoContainer = document.getElementById('myUserInfo');
let userInfotext
let userStepGoalContainer = document.getElementById('userStepsContainer');
let averageStepGoalContainer = document.getElementById('averageStepGoalContainer');
let mainDisplay = document.getElementById('userDataContainer');
let myDayInfoContainer = document.getElementById('myDayInfoContainer');
let myAverageInfo = document.getElementById('myAverageInfoContainer');
let myWeekInfo = document.getElementById('myWeekInfoContainer');
let navIcons = [waterIcon, sleepIcon, activityIcon];
let logoContainer = document.getElementById('logoContainer');

//EVENT LISTENERS:
window.addEventListener('load', generatePageLoad);

navIcons.forEach(icon => {
  icon.addEventListener('click', changeDisplay)
});


//EVENT HANDLERS:
function generatePageLoad() {
  generateRandomUser(userData);
  renderMyInfo();
  renderMyFriends();
  renderMyStepGoal();
  renderAvgStepGoal();
};

function generateRandomUser(userData) {
  let currentUserObj = userData[Math.floor(Math.random() * userData.length)];
  currentUser = new User(currentUserObj);
};

function welcomeUser() {
  welcomeMessage.innerHTML = `Hi, ${currentUser.returnUserFirstName}!`
};

function changeDisplay() {
  if (event.target.id === 'water-icon') {
    renderData(water);
  } else if (event.target.id === 'sleep-icon') {
    renderData(sleep);
  } else if (event.target.id === 'activity-icon') {
    renderData(activity);
  }
  hide(welcomeMessage);
  unhide(userDataContainer);
  unhide(logoContainer);
};

function hide(element) {
  element.classList.add('hidden');
};

function unhide(element) {
  element.classList.remove('hidden');
};

function renderMyInfo(currentUser) {
  var userAvatar = document.createElement('img');
  userAvatar.classList.add('medium');
  userInfoContainer.appendChild(userAvatar);
  userInfoContainer.innerHTML = `Name: ${currentUser.name}
    Address: ${currentUser.address}
    Email: ${currentUser.email}
    Stride Length: ${currentUser.strideLength}`
};

function makeAFriend(friendName) {
  var friendDisplay = document.createElement('div');
  var friendIcon = document.createElement('img');
  var friendNameElement = document.createElement('h6');
  friendIcon.src = './images/friendIcon.svg';
  friendIcon.classList.add('small');
  friendDisplay.appendChild(friendIcon);
  friendDisplay.appendChild(friendNameElement);
  friendNameElement.innerText = friendName;
  return friendDisplay;
};

function renderMyFriends(currentUser) {
  currentUser.friends.forEach(friendID => {
    const friendObj = userData.find(userObj => friendID === userObj.id)
    const friendName = friendObj.name
    myFriendBoxContainer.appendChild(makeAFriend(friendName))
  });
};

// function renderData(dataType) {
//   myDayInfoContainer.innerText = //call currentUser.whatever to get data. Need to move these methods into user I think
// //consider making more dynamic to take in both dataType AND element where it will display
// }



//click on a water/sleep/activity icon populates the larger bubbles with
//user info from user class
//average step goal for all users will populate in box, also user's step goal
