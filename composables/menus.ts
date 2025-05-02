export const useMenus = () => {
  const menus = [
    {
      id: 1,
      name: 'Home',
      path: '/'
    },
    {
      id: 2,
      name: 'About',
      path: '/about'
    },
    {
      id: 3,
      name: 'Products',
      path: '/products',
    },
    {
      id: 4,
      name: 'Brands',
      path: '/partners'
    },
    {
      id: 5,
      name: 'Articles',
      path: '/articles'
    },
    {
      id: 6,
      name: 'Contact',
      path: '/contact'
    }
  ]
  
  return {
    menus
  }
}
