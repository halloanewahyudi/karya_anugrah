import { Title } from "#components"

export const useDataAbout = () => {
  const aboutOne = [
    {
      title:'APC Best Growing Partner',
      description:'During our early days, we strive to boost our client’s business productivity through our high-quality technical support and high-grade products, providing a wide range of solutions: retail, data protection, network. After a few years of establishing PT. Karya Anugerah Teknologi, we were honored to receive an award from APC by Schneider Electric as the ‘APC Best Growing Partner’ in 2015.',
      image:'/about/about1.jpg',
    },
    {
      title:'APC Top Partner',
      description:'Our reliable IT solutions and customer-centric services in the past years have been consistent in providing excellent IT services and solutions for our clients. Thus, PT. Karya Anugerah Indonesia is grateful to receive the ‘APC Top Partner Award’ in 2014, 2015, 2016, and 2020.',
      image:'/about/about2.jpg',
    },
    {
     title:'Pupuk Indonesia Best Performance Vendor',
     description:'PT. Karya Anugerah Teknologi has been working with Pupuk Indonesia, a state-owned company, during the past couple of years. Our company assists Pupuk Indonesia in their digital journey through supplying trusted IT products and services. This resulted in the ‘Pupuk Indonesia Best Performance Vendor’ awards that we have delightedly received in 2021 and 2022.',
     image:'/about/about3.jpg',
    }
  ]
 
  const aboutTwo = [
    {
      title:'Trusted business partner of Alfamart',
      description:'As one of our biggest and earliest clients, we are entrusted by PT.SUMBER ALFARIA TRIJAYA,Tbk to continuously provide a comprehensive range of products such as thermal printers, UPS systems, POS equipment, and scanners. Our tailored approach and commitment to delivering top-notch hardware have contributed to streamlining the business processes of PT. SUMBER ALFARIA TRIJAYA, Tbk, ensuring they have the tools necessary for success in their industry.',
      image:'/about/about4.jpg',
    }, 
    {
      title:'Supporting equipment for Kayu Agung-Palembang toll road section.',
      description:'Over the years, PT Jasamarga Tollroad Operator has remained a crucial client, one of our most recent collaboration involved providing IT hardware support for the construction of the Semarang – Batang toll road. During the project, we have helped them to provide traffic management systems with cameras and sensors, communication infrastructure, toll collection equipment, and emergency response systems.',
      image:'/about/about5.jpg',
    },
    {
      title:'Trusted long-term hardware vendor for PT Pupuk Indonesia',
      description:'PT Pupuk Indonesia is also one of our long-lasting clients, each year we have provided them with Industrial grade hardware designed to withstand harsh conditions typically used in factories. This type of hardware is engineered for reliability, longevity, and optimal performance in challenging settings.',
      image:'/about/about6.jpg',
    }
  ]

  const faq = [
    {
      question:'Curious about the what Karya Anugrah Teknologi offers?',
      answer:'Or maybe who we work with and what warranties we provide. Explore our FAQ section for a comprehensive understanding of our services and products.'
    }
  ]

  return {
    aboutOne,
    aboutTwo,
    faq
  }
}
