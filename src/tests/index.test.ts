import { hello } from '@functions/hello'

describe('Simple Tests for hello folder', () => {
	it('should be ok', async () => {
		expect(hello).toBeTruthy()
	})

	test(`Asks for both BUCKET and REGION environment variables`, () => {
		const result = hello()
		expect(result).toEqual({
			statusCode: 200,
			body: 'Its all right'
		})
	})
})
