export function useApi() {
    const config = useRuntimeConfig()
    
    return {
      get: (endpoint) => useFetch(`${config.public.apiBaseUrl}${endpoint}`),
      // You can add other methods like post, put, delete, etc.
    }
  }
  