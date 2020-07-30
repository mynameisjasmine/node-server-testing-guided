 const db = require('../data/dbConfig.js');
 const {insert } = require('./hobbitsModel.js');

describe('testing hobbits model', function() {
describe('insert()', function() {
    beforeEach(async () => {
    await db('hobbits').truncate()
    });

    it('should insert a hobbit', async function() {
    // insert a hobbit
    await insert({name: 'sam'});
    
    // check if it was inserted into the db
    const hobbits = await db('hobbits')

    expect(hobbits).toHaveLength(1);
    expect(hobbits[0].name).toBe('sam');
    // expect(hobbits[0].name).toBe('tony'); //should fail
    })
    
    it('should return the inserted hobbit', async function() {
    let hobbit = await insert({name: 'gaffer'})
    expect(hobbit.name).toBe('gaffer');
    expect(hobbit.id).toBeDefined();
    });
    })
  })
