// composables/useWpFeaturedImage.ts
export const useWpFeaturedImage = (post: any, fallback = '/no-image.png') => {
  if (
    post &&
    post._embedded &&
    Array.isArray(post._embedded['wp:featuredmedia']) &&
    post._embedded['wp:featuredmedia'][0]?.source_url
  ) {
    return post._embedded['wp:featuredmedia'][0].source_url
  }

  return fallback
}
