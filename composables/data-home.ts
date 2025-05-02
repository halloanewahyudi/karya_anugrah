export const useDataHome = () => {

  const solution = [
    {
      title: 'Computer & Peripheral',
      description: 'Laptop, PC,Monitor, Printer,Scanner, SSD, Memory',
      image: '/img/computer.svg'
    },  {
      title: 'IT Infrastructure',
      description: `Server, Data Storage, Networking, UPS, Rack`,
      image: '/img/it-infrastructure.svg'
    }, 
    {
      title: 'Solution',
      description: `POS, Rental, Network & Security, Data Security, CCTV`,
      image: '/img/solution-services.svg'
    },{
      title: 'Office Supplies',
      description: `Toner, Ink, …`,
      image: '/img/office-equipment.svg'
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
      image:'/img/pupuk-indonesia.png'
    }
  ]

  const brands = [
    {
      image: '/brand/adata.png'
    }, {
      image: '/brand/apc.png'
    }, {
      image: '/brand/apple.png'
    }, {
      image: '/brand/dell.png'
    }, {
      image: '/brand/epson.png'
    }, {
      image: '/brand/fujitsu.png'
    },
    {
      image:'/brand/gli.png'
    },{
      image:'/brand/hp.png'
    },
    {
      image:'/brand/lenovo.png'
    },
    {
      image:'/brand/huawei.png'
    },
    {
      image:'/brand/lg.png'
    },
    {
      image:'/brand/logitech.png'
    },
    {
      image:'/brand/microsoft.png'
    },
    {
      image:'/brand/posbank.png'
    },{
      image:'/brand/samsung.png'
    },{
      image:'/brand/seagate.png'
    },{
      image:'/brand/tp-link.png'
    },{
      image:'/brand/v-gen.png'
    },{
      image:'/brand/wd.png'
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
      image: 'https://fakeimg.pl/600x400/e3e0e0/b8b4b4?text=News+Image&font=noto&font_size=30',
      date: '2023-10-12'
    },
    {
      title: 'Sed ut perspiciatis unde omnis iste natus',
      description: 'Lorem Ipsum doloret sitamet',
      image: 'https://fakeimg.pl/600x400/e3e0e0/b8b4b4?text=News+Image&font=noto&font_size=30',
      date: '2024-01-07'
    },
    {
      title: 'sit voluptatem accusantium doloremque ',
      description: 'Lorem Ipsum doloret sitamet',
      image: 'https://fakeimg.pl/600x400/e3e0e0/b8b4b4?text=News+Image&font=noto&font_size=30',
      date: '2024-2-21'
    },
    {
      title: ' Quis autem vel eum iure reprehenderit qui in ',
      description: 'Lorem Ipsum doloret sitamet',
      image: 'https://fakeimg.pl/600x400/e3e0e0/b8b4b4?text=News+Image&font=noto&font_size=30',
      date: '2024-10-7'
    },
  ]

  return {
    solution,
    products,
    posts,
    partners,
    brands
  }
}
