import { jest } from '@jest/globals';
import { backend } from './api'

const expectedResponse = {
  jwt: expect.any(String),
}

describe('API Test Suite', () => {

  beforeAll(() => { });
  afterAll(() => { });

  beforeEach(() => { });
  afterEach(() => { });

  test('should test case 1', async () => {
    const actual = await backend.postCall()
    console.dir(actual)
    expect(actual).toMatchObject(expectedResponse);
  })

});
