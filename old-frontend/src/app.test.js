import { xyz } from './someFile.js'

describe('API TestSuite', () => {

  test('should be upper Case text', () => {
    const actual = xyz('some args')
    const expected = 'SOME ARGS'
    expect(actual).toEqual(expected)
  })

  test('should test 2', () => {

  })

})

useEffect(() => {


  return () => {
    cleanup
    EventListners
  }

}, [dep1, dep2])