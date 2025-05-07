export const useWpApi = (endpoint: string, options: any = {}) => {
  const config = useRuntimeConfig()
  const url = `${config.public.baseUrl}/${endpoint}`

  console.log('[WP API] URL:', url)

  return {
    url,
    options: {
      headers: {
        Accept: 'application/json',
        ...(options.headers || {})
      },
      ...options
    }
  }
}
