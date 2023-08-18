module.exports = {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules', '/.next'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.ts(x)'],
    setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.ts'],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/.jest/empty-module.ts"
    }
};
