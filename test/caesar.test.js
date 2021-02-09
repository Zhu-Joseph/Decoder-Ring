// Write your tests here!
const expect = require("chai").expect
const caesar = require("../src/caesar.js")

describe('caesar', () => {
    it('changes input by the number amount in shift', () => {
        const expected = "bcd"
        const actual = caesar("abc", 1, true)
        expect(actual).to.equal(expected)
    })
    it('allows for a negative shift to the left', () => {
        const expected = 'a'
        const actual = caesar("b", -1, true)
        expect(actual).to.equal(expected)
    })
    it("if shift is greater than 25 or less than -25, return false", () => {
        const expected = false
        const actual = caesar("abc", 26, true)
        expect(actual).to.equal(expected)
    })
    it("if shift equals 0, return false", () => {
        const expected = false
        const actual = caesar("abc", 0, true)
        expect(actual).to.equal(expected)
    })   
    it("if encode is false, return original input", () => {
        const expected = "this is a secret message!"
        const actual = caesar('bpqa qa i amkzmb umaaiom!', 8, false)
        expect(actual).to.equal(expected)
    })
    it("maintains spaces and non-alphabetic symbols", () => {
        const expected = "#j0k1un 4 sfml :)"
        const actual = caesar("#c0d1ng 4 lyfe :)", 7, true)
        expect(actual).to.eql(expected)
    })
    describe('decoding a message', () => {
        it("decoding a message should ignore capital letters", () => {
            const expected = caesar("abc", 10, true)
            const actual = caesar("ABC", 10, true)
            expect(actual).to.equal(expected)
        })
    })
})