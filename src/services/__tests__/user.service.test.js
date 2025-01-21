import test from 'ava'
import userService from '../user.service'
import { countReset } from 'console';

let sampleUser;

test.beforeEach(() => {
    sampleUser = {
       name: 'Jon Doe',
       email: 'jondoe@email.com',
       city: 'New York',
       country: 'USA'
    }
})

test.after(() => {
    if (userService.getUser(3)) {
        console.log('User 3 has been removed')
        userService.removeUser(3)
    }
})

test('must add a user', (t) => {
    const expectedId = 2
    const user = userService.addUser(sampleUser)
    
    t.is(user.id, expectedId)
    t.deepEqual(user, {id: expectedId, ...sampleUser})
})

test('must get a user', (t) => {
    const expectedId = 2
    const user = userService.getUser(expectedId)
    
    t.is(user.id, expectedId)
    t.deepEqual(user, {id: expectedId, ...sampleUser})
})

test('must get all user', (t) => {
    const expectedId = 2
    const user = userService.getAllUser()
    
    t.deepEqual(user[1], {id: expectedId, ...sampleUser})
})

test('must update a user', (t) => {
    const expectedId = 2
    const updatedDetails = {
        name: 'Pierre',
        email: 'pierre@email.com',
        city: 'Adelaide',
        country: 'Australia'
    }
    const user = userService.updateUser(expectedId, updatedDetails)
    
    t.is(user.id, expectedId)
    t.deepEqual(user, {id: expectedId, ...updatedDetails})
})

test('must delete a user', (t) => {
    const expectedId = 2
    const expected = userService.removeUser(expectedId)
    
    t.is(expected, true)
    const user = userService.getUser(expectedId)
    t.is(user,undefined)
})

