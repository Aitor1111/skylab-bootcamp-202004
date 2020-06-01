require('dotenv').config()

const { env: { TEST_MONGODB_URL: MONGODB_URL } } = process

const unregisterUser = require('./unregister-user')
const { random } = Math
const { expect } = require('chai')
require('../utils/polyfills/json')
const { mongo } = require('../data')

describe.only('logic - unregister user', () => {
    let users

    before(() => mongo.connect(MONGODB_URL).then(connection => users = connection.db().collection('users')))

    let name, surname, email, password, userId

    beforeEach(() => {
        users.deleteMany()
            .then(() => {
                name = `name-${random()}`
                surname = `surname-${random()}`
                email = `e-${random()}@mail.com`
                password = `password-${random()}`
            })
    })

    describe('when user exists', () => {
        beforeEach(() => {
            const user = { name, surname, email, password }
            return users.insertOne(user)
                .then(result => {
                    userId = result.insertedId.toString()  // "ObjectId('4739fnn193e')"
                    debugger
                })
        })

        it('should succeed on correct user id', () => {
            return unregisterUser(userId)
                .then(result => {
                    expect(users.length).to.equal(0)
                    expect(result.acknowledged).to.equal(true)
                    expect(result.deletedCount).to.equal(1)
                })
        })

        // it('should ')
    })
})

//     it('should fail when user does not exist', () => {
//         const userId = '5ed1204ee99ccf6fae798aef'

//         return retrieveUser(userId)
//             .then(() => { throw new Error('should not reach this point') })
//             .catch(error => {
//                 expect(error).to.exist

//                 expect(error).to.be.an.instanceof(Error)
//                 expect(error.message).to.equal(`user with id ${userId} does not exist`)
//             })
//     })

//     afterEach(() => users.deleteMany())

//     after(() => users.deleteMany().then(mongo.disconnect))
// })

