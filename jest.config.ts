export default {
	bail: 1,
	collectCoverageFrom: [
		'src/**/*.{js,jsx,tsx,ts}',
		'!**/node_modules/**',
		'!docs',
		'!__mocks__'
	],
	coverageDirectory: 'coverage',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	testPathIgnorePatterns: ['/node_modules/', '/build/', '__mocks__'],
	clearMocks: true,
	coverageProvider: 'v8',
	testEnvironment: 'node',
	preset: 'ts-jest',
	moduleNameMapper: {
		'@settings': '<rootDir>/config/settings.ts',
		'@functions/(.*)': '<rootDir>/src/functions/$1'
	}
}
