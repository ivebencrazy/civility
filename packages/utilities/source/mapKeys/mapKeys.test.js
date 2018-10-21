import { mapKeys } from "./mapKeys";

describe("mapKeys", () => {
  test("Should return a new object", () => {
    const values = { one: 1, two: 2 }
    const mapped = mapKeys(values, val => val)
    expect(mapped).toEqual(values)
    expect(mapped === values).toBe(false)
  })

  test("Should map to new values", () => {
    const values = { zero: 0, one: 1, two: 2 }
    const mapped = mapKeys(values, val => ++val)
    expect(mapped).toEqual({"one": 2, "two": 3, "zero": 1})
  })
})
