module.exports = {
	clearMocks: true,
	collectCoverage: false,
	moduleFileExtensions: ['js', 'jsx', 'mjs'],
	testEnvironment: 'jest-environment-node',
	testPathIgnorePatterns: ['/node_modules/'],
	transform: {
		'^.+\\.jsx?$': 'babel-jest',
		'^.+\\.mjs$': 'babel-jest'
	},
	testMatch: [
		'<rootDir>/src/**/*.(test).{mjs,js,jsx,ts,tsx}',
		'<rootDir>/src/**/?(*.)(spec|test).{mjs,js,jsx,ts,tsx}'
	]
};
