export function useBaseAsset() {
  const config = useRuntimeConfig();
  const baseUrl = config.app.baseURL || '/';
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

  return (input: string) => {
    const value = String(input || '');
    if (!value) return value;

    // Keep absolute and data URLs untouched.
    if (/^(https?:)?\/\//i.test(value) || value.startsWith('data:') || value.startsWith('#')) {
      return value;
    }

    // Only prefix root-relative app assets.
    if (!value.startsWith('/')) {
      return value;
    }

    return `${normalizedBase}${value}` || value;
  };
}
