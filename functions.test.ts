const {shuffleArray} = require('./utils')

describe('shuffleArray tests', () => {
    test('Does shuffleArray return a string', () => {
        expect(shuffleArray([1,2])).toBe([])
    })
    test('Does shuffleArray return right number of elements ', () => {
        expect((shuffleArray([4,3,5,4])).length).toEqual(4)
    })
    test('expect shuffleArray not to work if wrong elements passed in', () => {
        expect(shuffleArray(['robert', 'hank'])).not.toEqual(
            expect.arrayContaining(shuffleArray),)        
    })
})

//////1st and 3rd tests don't work.  Will come back if time/////