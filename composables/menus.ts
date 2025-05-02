export const useMenus = () => {
  const menus = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Products',
      path: '/products',
    },
    {
      name: 'Brands',
      path: '/partners'
    },
    {
      name: 'Articles',
      path: '/articles'
    },
    {
      name: 'Contact',
      path: '/contact'
    }
  ]
  return {
    menus
  }
}
