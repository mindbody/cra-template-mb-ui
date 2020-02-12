module.exports = {
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/src'],
    collectCoverageFrom: [
        'src/**/*.ts',
        'src/**/*.tsx',
        '!src/**/*.stories.tsx',
        '!src/**/index.ts',
        '!src/**/index.tsx',
        '!src/**/*.d.ts',
    ],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    testPathIgnorePatterns: ['node_modules'],
};
