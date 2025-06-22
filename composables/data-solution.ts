export const useDataSolution = () => {

  const solutions = [
    {
      name: 'Computer & Peripheral',
      description: 'Laptop, PC,Monitor, Printer,Scanner, SSD, Memory',
      image: '/solution/soluiton1b.jpg',
      link: '/brand/computer-peripheral'
    },
    {
      name: 'IT Infrastructure',
      description: `Server, Data Storage, Networking, UPS, Rack`,
      image: '/solution/soluiton2.jpg',
      link: '/brand/it-infrastructure'
    },
    {
      name: 'Solution',
      description: `POS, Network & Security, Data Security, CCTV`,
      image: '/solution/soluiton3.jpg',
      link: '/brand/solution'
    },
    {
      name: 'Office Supplies',
      description: `Toner, Ink, …`,
      image: '/solution/soluiton4.jpg',
      link: '/brand/office-supplies'
    }
  ]
  return {
    solutions
  }
}
