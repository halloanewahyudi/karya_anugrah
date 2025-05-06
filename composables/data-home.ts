export const useDataHome = () => {

  const solutions = [
    {
      name: 'Computer & Peripheral',
      description: 'Laptop, PC,Monitor, Printer,Scanner, SSD, Memory',
      image: '/solution/solution1b.jpg',
      link: '/brand/computer-peripheral'
    },
    {
      name: 'IT Infrastructure',
      description: `Server, Data Storage, Networking, UPS, Rack`,
      image: '/solution/solution2.jpg',
      link: '/brand/it-infrastructure'
    },
    {
      name: 'Solution',
      description: `POS, Rental, Network & Security, Data Security, CCTV`,
      image: '/solution/solution3.jpg',
      link: '/brand/solution'
    },
    {
      name: 'Office Supplies',
      description: `Toner, Ink, …`,
      image: '/solution/solution4.jpg',
      link: '/brand/office-supplies'
    }
  ]

  const partners = [
    {
      image: '/img/alfamart.png'
    }, {
      image: '/img/apc.png'
    }, {
      image: '/img/footfallcam.png'
    }, {
      image: '/img/fujitsu.png'
    }, {
      image: '/img/jasamarga.png'
    }, {
      image: '/img/postbank.png'
    },
    {
      image: '/img/pupuk-indonesia.png'
    }
  ]

  const brands = [
    {
      name: 'Adata',
      image: '/brand/adata.png',
      path: '/brand/adata'
    },
    {
      name: 'Apc',
      image: '/brand/apc.png',
      path: '/brand/apc'
    },
    {
      name: 'Apple',
      image: '/brand/apple.png',
      path: '/brand/apple'
    },
    {
      name: 'Dell',
      image: '/brand/dell.png',
      path: '/brand/dell'
    }, {
      name: 'Epson',
      image: '/brand/epson.png',
      path: '/brand/epson'
    }, 
    {
      name: 'Fujitsu',
      image: '/brand/fujitsu.png',
      path: '/brand/fujitsu'
    },
    {
      name: 'Gli',
      image: '/brand/gli.png',
      path: '/brand/gli'
    }, {
      name: 'HP',
      image: '/brand/hp.png',
      path: '/brand/hp'
    },
    {
      name: 'Lenovo',
      image: '/brand/lenovo.png',
      path: '/brand/lenovo'
    },
    {
      name:'Huawei',
      image: '/brand/huawei.png',
      path: '/brand/huawei'
    },
    {
      name: 'LG',
      image: '/brand/lg.png',
      path:'/brand/lg'
    },
    {
      name: 'Logitech',
      image: '/brand/logitech.png',
      path: '/brand/logitech'
    },
    {
      name: 'Microsoft',
      image: '/brand/microsoft.png',
      path: '/brand/microsoft'
    },
    {
      name:'Posbank',
      image: '/brand/posbank.png',
      path: '/brand/posbank'
    }, {
      name: 'Samsung',
      image: '/brand/samsung.png',
      path: '/brand/samsung'
    }, {
      name: 'Seagate',
      image: '/brand/seagate.png',
      path: '/brand/seagate'
    }, {
      name:'TP-Link',
      image: '/brand/tp-link.png',
      path:'/brand/tp-link'
    }, {
      name:'V-Gen',
      image: '/brand/v-gen.png',
      path:'/brand/v-gen'
    }, {
      name:'WD',
      image: '/brand/wd.png',
      path:'/brand/wd'
    }
  ]

  // fetch products
  const products = [
    {
      title: 'HP EliteBook 840 G8',
      description: `Product 1`,
      image: 'https://karyaanugrah.com/wp-content/uploads/2023/11/HP-EliteBook-840-G8.webp',
    }, {
      title: 'HP PC 24-cb1023d',
      description: `Product 2`,
      image: 'https://karyaanugrah.com/wp-content/uploads/2023/11/HP-PC-24-cb1023d.webp'
    }, {
      title: 'HP Scanjet Pro N4000',
      description: `Product 3`,
      image: 'https://karyaanugrah.com/wp-content/uploads/2023/11/HP-Scanjet-Pro-N4000.webp'
    }, {
      title: 'Samsung 22" FHD Flat Monitor',
      description: `Product 4`,
      image: 'https://karyaanugrah.com/wp-content/uploads/2023/11/Samsung-22-FHD-Flat-Monitor.png'
    }, {
      title: 'BIGPOS 2150',
      description: `Product 5`,
      image: 'https://karyaanugrah.com/wp-content/uploads/2023/11/BIGPOS-2150.png'
    }, {
      title: 'Epson L3110',
      description: `Product 6`,
      image: 'https://karyaanugrah.com/wp-content/uploads/2023/11/printer-epson-L3110.png'
    }, {
      title: 'FP-2000​',
      description: `Product 7`,
      image: 'https://karyaanugrah.com/wp-content/uploads/2023/11/FP-2000-series.jpeg'
    }, {
      title: 'TP-Link AC1200',
      description: `Product 8`,
      image: 'https://karyaanugrah.com/wp-content/uploads/2023/11/TP-Link-AC1200.jpg'
    }
  ]



  const posts = [
    {
      title: 'Lorem Ipsum doloret sitamet',
      description: 'Lorem Ipsum doloret sitamet',
      image: 'https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '2023-10-12'
    },
    {
      title: 'Sed ut perspiciatis unde omnis iste natus',
      description: 'Lorem Ipsum doloret sitamet',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '2024-01-07'
    },
    {
      title: 'sit voluptatem accusantium doloremque ',
      description: 'Lorem Ipsum doloret sitamet',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '2024-2-21'
    },
    {
      title: ' Quis autem vel eum iure reprehenderit qui in ',
      description: 'Lorem Ipsum doloret sitamet',
      image: 'https://images.pexels.com/photos/5055212/pexels-photo-5055212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '2024-10-7'
    },
  ]

  return {
    solutions,
    products,
    posts,
    partners,
    brands
  }
}

