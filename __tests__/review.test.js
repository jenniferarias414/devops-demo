test("checking if Jest works", () => {
    expect(2).toBe(2)
})

let oddNum = 15
let evenNum = 2

describe("can we do basic math?", () => {
    test('is odd num truly odd?', () => {
        expect(oddNum%2).toEqual(1)
    })

    test('is even num the number 2?', () => {
        // expect(evenNum).toBe(2)
        let comparingNum = 2
        expect(evenNum).toBe(comparingNum)
    })

    test('if we multiply even and odd, it should be an even num', () => {
        let product = evenNum * oddNum
        expect(product%2).toBe(0)
    })

    test('if we multiply the nums, they should be greater than 50', () => {
        let product = evenNum * oddNum
        expect(product).toBeGreaterThan(50)
    })
})