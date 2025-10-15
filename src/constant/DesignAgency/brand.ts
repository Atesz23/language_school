export interface Brand {
  image: string;
}

export interface BrandData {
  title: string;
  brands: Brand[];
}


const brandData:BrandData = {
    title: 'Suntem Parteneri de încredere',
    brands: [
      { image: '/assets/imgs/brand/1.jpg' },
      { image: '/assets/imgs/brand/2.svg' },
      { image: '/assets/imgs/brand/3.png' },
      { image: '/assets/imgs/brand/4.png' },
    
    ],
  };
  export default brandData;