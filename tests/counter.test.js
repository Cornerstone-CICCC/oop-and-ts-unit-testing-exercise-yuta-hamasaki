// Create two test cases for incrementing and decrementing a number
// Test case 1: counter(10, 'increment') will eventualy return 10
// Test case 2: counter(10, 'decrement') will eventually return 0
// Both test cases need to pass
// HINT: Use the jest `resolves` matcher so that it is easier to work with async functions

const counter = require('../src/counter')
// test("counter(10, 'increment') will eventualy return 10",async ()=>{
//   const increment = await counter(10, 'increment')
//   expect(increment).toBe(10)
// })

// test("counter(10, 'decrement') will eventually return 0",async ()=>{
//   const decrement = await counter(10, 'decrement')
//   expect(decrement).toBe(0)
// })


test("counter(3, 'increment') will eventualy return 3", async()=>{
  await expect(counter(3, 'increment')).resolves.toBe(3)
})

test("counter(3, 'decrement') will eventually return 0", async()=>{
  await expect(counter(3, 'decrement')).resolves.toBe(0)
})
