
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
      path: '#',
      child: [
        {
          id: 1,
          name: 'Computer & Peripheral',
          path: '/brands/computer-peripheral',
          image: '/img/computer.svg'
        },
        {
          id: 2,
          name: 'IT Infrastructure',
          path: '/brands/it-infrastructure',
          image: '/img/it-infrastructure.svg'
        },
        {
          id: 3,
          name: 'Solution',
          path: '/brands/solution',
          image: '/img/solution-services.svg'
        },
       /*  {
          id: 4,
          name: 'Office Supplies',
          path: '/brands/office-supplies',
          image: '/img/office-equipment.svg'
        } */
        
      ]
    },
    {
      id: 5,
      name: 'News',
      path: '/news'
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
