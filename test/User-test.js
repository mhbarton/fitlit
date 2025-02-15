import { expect } from 'chai';
import User from '../src/User.js';

describe('User', () => {
    let user1, user2;
    let hydrationObject1, hydrationObject2, hydrationObject3, hydrationObject4, hydrationObject5, hydrationObject6, hydrationObject7, hydrationObject8, hydrationObject9, hydrationObject10;
    let hydrationArray, hydrationArray1;
    let sleepObject1, sleepObject2, sleepObject3;
    let sleepArray;
    let activityObject1, activityObject2, activityObject3, activityObject4;
    let activityArray;

    beforeEach(() => {
        user1 = new User({
            'id': 1,
            'name': 'Luisa Hane',
            'address': '15195 Nakia Tunnel, Erdmanport VA 19901-1697',
            'email': 'Diana.Hayes1@hotmail.com',
            'strideLength': 4.3,
            'dailyStepGoal': 10000,
            'friends': [
              16,
              4,
              8
            ]
          });

        user2 = new User({
            'id': 2,
            'name': 'Jarvis Considine',
            'address': '30086 Kathryn Port, Ciceroland NE 07273',
            'email': 'Dimitri.Bechtelar11@gmail.com',
            'strideLength': 4.5,
            'dailyStepGoal': 5000,
            'friends': [
              9,
              18,
              24,
              19
            ]
          });

        hydrationObject1 = {'userID': 1, 'date': '2022/08/29', 'numOunces': 36};

        hydrationObject2 = {'userID': 2, 'date': '2022/08/01', 'numOunces': 42};

        hydrationObject3 = {'userID': 2, 'date': '2022/08/02', 'numOunces': 2};

        hydrationObject4 = {'userID': 2, 'date': '2022/08/03', 'numOunces': 10};

        hydrationObject5 = {'userID': 2, 'date': '2022/08/04', 'numOunces': 23};

        hydrationObject6 = {'userID': 2, 'date': '2022/08/05', 'numOunces': 60};

        hydrationObject7 = {'userID': 2, 'date': '2022/08/06', 'numOunces': 19};

        hydrationObject8 = {'userID': 2, 'date': '2022/08/07', 'numOunces': 20};

        hydrationObject9 = {'userID': 2, 'date': '2022/08/08', 'numOunces': 40};

        hydrationObject10 = {'userID': 1, 'date': '2022/08/15', 'numOunces': 30};

        hydrationArray = [
            hydrationObject1,
            hydrationObject2,
            hydrationObject3,
            hydrationObject4,
            hydrationObject5,
            hydrationObject6,
            hydrationObject7,
            hydrationObject8,
            hydrationObject9,
            hydrationObject10
        ];

        hydrationArray1 = [
            hydrationObject2,
            hydrationObject3,
            hydrationObject4,
            hydrationObject5,
            hydrationObject6,
            hydrationObject7,
            hydrationObject8,
            hydrationObject9
        ];

        sleepObject1 = {'userID': 1, 'date': '2019/06/15', 'hoursSlept': 6.1, 'sleepQuality': 2.2};

        sleepObject2 = {'userID': 2, 'date': '2019/06/15', 'hoursSlept': 7, 'sleepQuality': 4.7};

        sleepObject3 = {'userID': 2, 'date': '2019/06/16', 'hoursSlept': 7.5, 'sleepQuality': 3.8};

        sleepArray = [
          sleepObject1,
          sleepObject2,
          sleepObject3
        ];

        activityObject1 = {'userID': 1, 'date': '2019/06/15', 'numSteps': 3577, 'minutesActive': 140, 'flightsOfStairs': 16};

        activityObject2 = {'userID': 1, 'date': '2019/06/16', 'numSteps': 6637, 'minutesActive': 175, 'flightsOfStairs': 36};

        activityObject3 = {'userID': 1, 'date': '2019/06/17', 'numSteps': 14329, 'minutesActive': 168, 'flightsOfStairs': 18};

        activityObject4 = {'userID': 2, 'date': '2019/06/15', 'numSteps': 4294, 'minutesActive': 138, 'flightsOfStairs': 10};

        activityArray = [
          activityObject1,
          activityObject2,
          activityObject3,
          activityObject4
        ]
    });

    it('Should be a function', () => {
        expect(User).to.be.a('function');
    });

    it('Should be an instance of User', () => {
        expect(user1).to.be.an.instanceOf(User);
        expect(user2).to.be.an.instanceOf(User);
    });

    it('Should have a unique ID', () => {
        expect(user1.id).to.equal(1);
        expect(user2.id).to.equal(2);
    });

    it('Should have a name', () => {
        expect(user1.name).to.equal('Luisa Hane');
        expect(user2.name).to.equal('Jarvis Considine');
    });

    it('Should have an address', () => {
        expect(user1.address).to.equal('15195 Nakia Tunnel, Erdmanport VA 19901-1697');
        expect(user2.address).to.equal('30086 Kathryn Port, Ciceroland NE 07273');
    });

    it('Should have an email', () => {
        expect(user1.email).to.equal('Diana.Hayes1@hotmail.com');
        expect(user2.email).to.equal('Dimitri.Bechtelar11@gmail.com');
    });

    it('Should have a stride length', () => {
        expect(user1.strideLength).to.equal(4.3);
        expect(user2.strideLength).to.equal(4.5);
    });

    it('Should have a daily step goal', () => {
        expect(user1.dailyStepGoal).to.equal(10000);
        expect(user2.dailyStepGoal).to.equal(5000);
    });

    it('Should have a friends', () => {
        expect(user1.friends).to.deep.equal([16, 4, 8]);
        expect(user2.friends).to.deep.equal([9, 18, 24, 19]);
    });

    it('Should return a user\'s first name', () => {
        expect(user1.returnUserFirstName()).to.equal('Luisa');
        expect(user2.returnUserFirstName()).to.equal('Jarvis');
    });

    it('Should filter all entries for a user', () => {
        expect(user2.findUser(hydrationArray)).to.deep.equal(hydrationArray1);
    });

    it('Should find the most recent date for a user', () => {
      expect(user2.findMostRecentDate(hydrationArray)).to.equal('2022/08/08');
    });

    it('Should return the total average ounces consumed for a user', () => {
        expect(user1.returnOverallAverage(hydrationArray, 'numOunces')).to.equal('33.00');
    });

    it('Should return user\'s data for a specific day', () => {
      expect(user1.returnUserDataByDay(hydrationArray, '2022/08/29', 'numOunces')).to.equal(36);
      expect(user1.returnUserDataByDay(activityArray, '2019/06/15', 'minutesActive')).to.equal(140)
    });

    it('Should return a week\'s data for a user', () => {
      expect(user2.returnUserWeekData(hydrationArray, 'numOunces')).to.deep.equal(['2022/08/08: 40', '2022/08/07: 20', '2022/08/06: 19', '2022/08/05: 60', '2022/08/04: 23', '2022/08/03: 10', '2022/08/02: 2']);
      expect(user2.returnUserWeekData(sleepArray, 'hoursSlept')).to.deep.equal(['2019/06/16: 7.5', '2019/06/15: 7']);
      expect(user2.returnUserWeekData(sleepArray, 'sleepQuality')).to.deep.equal(['2019/06/16: 3.8', '2019/06/15: 4.7']);
    });

    it('Should return the user\'s average hours of sleep per day', () => {
      expect(user2.returnOverallAverage(sleepArray, 'hoursSlept')).to.equal('7.25');
    });

    it('Should return the user\'s average sleep quality per day', () => {
      expect(user2.returnOverallAverage(sleepArray, 'sleepQuality')).to.equal('4.25');
    });

    it('Should return the hours a user slept on a specific day', () => {
      expect(user2.returnUserDataByDay(sleepArray, '2019/06/15', 'hoursSlept')).to.equal(7);
    });

    it('Should return the sleep quality amount a user slept on a specific day', () => {
      expect(user2.returnUserDataByDay(sleepArray, '2019/06/15', 'sleepQuality')).to.equal(4.7);
    });

    it('Should return the average active minutes for a user in a given week', () => {
      expect(user1.returnWeeksActivity(activityArray, '2019/06/15')).to.equal(161);
    });

    it('Should return all the days a user exceeds their step goal', () => {
      expect(user1.returnExceededStepGoals(activityArray)).to.deep.equal(['2019/06/17'])
    });

    it('Should return the user\'s all-time stair-climbing record', () => {
      expect(user1.returnStairRecord(activityArray)).to.equal(36);
    });

    it('Should return the number of miles walked for a user', () => {
        expect(user1.returnMilesWalked(activityArray, '2019/06/15')).to.equal('2.91');
    });

    it('Should log if the user reached their step goal on a given day', () => {
      expect(user2.achieveStepGoal(activityArray, '2019/06/15')).to.equal(false);
      expect(user1.achieveStepGoal(activityArray, '2019/06/17')).to.equal(true);
  });

});
