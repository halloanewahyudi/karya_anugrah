
export const useMenus = () => {
  const { solutions, brands } = useDataHome()
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
      child: [
        {
          id: 1,
          name: 'Computer & Peripheral',
          path: '/brand/computer-peripheral',
          image: '/img/computer.svg'
        },
        {
          id: 2,
          name: 'IT Infrastructure',
          path: '/brand/it-infrastructure',
          image: '/img/it-infrastructure.svg'
        },
        {
          id: 3,
          name: 'Solution',
          path: '/brand/solution',
          image: '/img/solution-services.svg'
        },
        {
          id: 4,
          name: 'Office Supplies',
          path: '/brand/office-supplies',
          image: '/img/office-equipment.svg'
        }
        
      ]
    },
    {
      id: 4,
      name: 'Brands',
      path: '/partners',
      child: brands
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
