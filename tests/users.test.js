// You already have the methods imported
const { default: expect } = require('expect');
const { getUser, getUsers } = require('../users');
const users = require('../data');

// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

// READ documentation

describe('GetUsers functions test', () => {
    it('Filter first user by its specific ID', () => {
        const userTest = getUser(1);
        expect(userTest).toEqual(users[0]);
    });

    it('Filters all users by their specific ID', () => {
        for (let i = 0; i < users.length; i++) {
            const userTest = getUser(i + 1);
            expect(userTest).toEqual(users[i]);
        }
    });

    it('Fetches all users', () => {
        const allUsersTest = getUsers();
        expect(allUsersTest).toEqual(users);
    });
});