import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  getProduct(id: string) {
    return {
      id,
      images: [
        'https://multimedia.bbycastatic.ca/multimedia/products/500x500/164/16497/16497749.jpeg',
        'https://multimedia.bbycastatic.ca/multimedia/products/500x500/164/16497/16497749_1.jpeg',
        'https://multimedia.bbycastatic.ca/multimedia/products/500x500/164/16497/16497749_2.jpeg',
      ],
      title:
        'Unisex Photochromic Polarized Aviator Sunglasses with Case for Driving/Cycling',
      stars: 3,
      modelNumber: 'ced_42979812835573',
      soldBy: 'Gadget Lab',
      price: 3000,
      discountPercent: 20,
      aboutThisProduct: [
        'MATERIAL: 50 x 50 cm scarves made with 100% premium polyester silk',
        'We love how creative you are, so let us know how you have made use of these beautiful scarves. These scarves are polyester silk.',
        'USE: Cool and airy for the spring and summer seasons and useable all seasons as well as for accessorizing fashion handbags and as a neck scarf coming in unique yet durable styles for all seasons',
      ],
      fromTheManufacturer: 'lorem',
      specifications: {
        productCondition: 'Brand New',
        color: 'Red',
      },
    };
  }
}
