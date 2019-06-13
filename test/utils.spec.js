import { assert,expect } from 'chai'

import { randomInt, range, zip, cross } from "../src/typescript/utils"

describe("Utils",()=>{
    describe("#randomInt()",()=>{
        it("randomInt(5) should generate a number between 0 and 4", ()=>{
            let int = randomInt(5);
            assert(0<=int && int<5)
        })
    })

    describe("#zip()",()=>{
        it("zip(['a','b'],[1,0]) should return [['a',1],['b',0]]", ()=>{
           let zipped = zip(['a','b'],[1,0])
           expect(zipped).to.deep.equal([['a',1],['b',0]])
        })
    })

    describe("#cross()",()=>{
        it("corss(['a','b'],[1,0]) should return [['a',1],['a',0],['b',1],['b',0]]",()=>{
            let crossed = cross(['a','b'],[1,0])            
            expect(crossed).to.deep.equal([['a',1],['a',0],['b',1],['b',0]])
        })
    })

    describe("#range()",()=>{
        it("range(5) should return [0,1,2,3,4]", ()=>{
            let range_array = range(5);
            let expected_range = [0,1,2,3,4]
            expect(range_array.length).to.be.equal(5)
            expect(range_array).to.deep.equal(expected_range)
        })
    })
})