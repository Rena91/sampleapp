const assert = require("assert")

const User = require('../src/User')

describe('creating records',() => {
    it('saves a user',(done) => {
        
        const joe = new User({
            name :' Joe2'
        })
        joe.save()
        .then(() => {
            assert(!joe.isNew)
            done()
        })
    })
})