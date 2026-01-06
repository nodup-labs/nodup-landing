// Provide a safe no-op localStorage on the Node server process when it's missing
// This prevents third-party dev overlay code from calling localStorage.getItem
// during server-side initialization when a malformed --localstorage-file flag
// or other environment causes a non-standard global.localStorage to exist.

declare global {
  var localStorage: Storage;
}

if (typeof globalThis.localStorage === 'undefined' || typeof globalThis.localStorage?.getItem !== 'function') {
  // Provide a minimal, safe shim
  globalThis.localStorage = {
    getItem: (_key: string) => null,
    setItem: (_key: string, _value: string) => undefined,
    removeItem: (_key: string) => undefined,
    clear: () => undefined,
    length: 0,
    key: (_index: number) => null,
  } as Storage;
}

export {};
