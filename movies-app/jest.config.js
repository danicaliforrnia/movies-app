module.exports = {
    clearMocks: true,
    collectCoverage: false,
    moduleFileExtensions: ['js', 'jsx', 'mjs'],
    setupFilesAfterEnv: ['<rootDir>/src/setup-tests.js'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.mjs$': 'babel-jest'
    },
    testMatch: [
        '<rootDir>/src/**/*.(test).{mjs,js,jsx,ts,tsx}',
        '<rootDir>/src/**/?(*.)(spec|test).{mjs,js,jsx,ts,tsx}'
    ],
    testEnvironment: 'jsdom'
};
