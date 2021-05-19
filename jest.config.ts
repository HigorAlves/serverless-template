export default {
	verbose: true,
	bail: 1,
	coverageDirectory: 'coverage',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	testPathIgnorePatterns: ['/node_modules/', '/build/', '__mocks__'],
	clearMocks: true,
	coverageProvider: 'v8',
	testEnvironment: 'node',
	preset: '@shelf/jest-dynamodb',
	testTimeout: 50000,
	transform: {
		'^.+\\.(ts|tsx|js|jsx)$': 'ts-jest'
	},
	collectCoverageFrom: [
		'src/**/*.{js,jsx,tsx,ts}',
		'!**/node_modules/**',
		'!docs',
		'!__mocks__'
	],
	moduleNameMapper: {
		'@settings': '<rootDir>/config/settings.ts',
		'@functions/(.*)': '<rootDir>/src/functions/$1',
		'@core/(.*)': '<rootDir>/src/core/$1'
	}
}
