import * as utilities from "./index"


test("Should export public API", () => {
  expect(typeof utilities.classNames).toBe("function")
  expect(typeof utilities.every).toBe("function")
  expect(typeof utilities.filter).toBe("function")
  expect(typeof utilities.forEach).toBe("function")
  expect(typeof utilities.map).toBe("function")
  expect(typeof utilities.mapKeys).toBe("function")
  expect(typeof utilities.reduce).toBe("function")
  expect(typeof utilities.some).toBe("function")

  // Typeguards
  expect(typeof utilities.isArray).toBe("function")
  expect(typeof utilities.isBoolean).toBe("function")
  expect(typeof utilities.isDate).toBe("function")
  expect(typeof utilities.isEmpty).toBe("function")
  expect(typeof utilities.isError).toBe("function")
  expect(typeof utilities.isFunction).toBe("function")
  expect(typeof utilities.isMap).toBe("function")
  expect(typeof utilities.isNil).toBe("function")
  expect(typeof utilities.isNull).toBe("function")
  expect(typeof utilities.isNumber).toBe("function")
  expect(typeof utilities.isObject).toBe("function")
  expect(typeof utilities.isPromise).toBe("function")
  expect(typeof utilities.isRegExp).toBe("function")
  expect(typeof utilities.isSet).toBe("function")
  expect(typeof utilities.isString).toBe("function")
  expect(typeof utilities.isUndefined).toBe("function")
})
