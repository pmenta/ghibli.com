// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'

process.env = {
  ...process.env,
  __NEXT_IMAGE_OPTS: {
    experimentalFuture: true, // Added this,
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [],
    domains: ['image.tmdb.org', 'www.themoviedb.org'],
    path: '/_next/image',
    loader: 'default',
  },
}
