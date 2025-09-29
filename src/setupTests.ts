// Basic test setup for Vitest + Testing Library

// Provide a minimal matchMedia implementation often used by components
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false
  })
});

// Mock ResizeObserver if components use it
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

(global as any).ResizeObserver = ResizeObserverMock;

// default timezone & locale can be useful in tests
Intl.DateTimeFormat = Intl.DateTimeFormat;
