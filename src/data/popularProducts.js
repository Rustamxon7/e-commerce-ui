import cam from './../assets/popularProducts/laptop.png';
import laptop from './../assets/popularProducts/laptop.png';
import phone from './../assets/popularProducts/phone.png';
import Macbook from './../assets/popularProducts/Macbook.png';
import AirPots from './../assets/popularProducts/AirPots.png';
import r2 from './../assets/popularProducts/r2.png';
import r3 from './../assets/popularProducts/r3.png';
import r4 from './../assets/popularProducts/r4.png';

export const list = [
  {
    name: 'Lenovo 15 inch, 1TB HDD, 8GB RAM',
    prev_price: 1200,
    price: 1000,
    condition: 'New',
    stars: 4,

    img: cam,
  },
  {
    name: 'iPhone 12 Pro Max 128GB Memory',
    price: 1200,
    condition: 'New',
    stars: 5,
    img: phone,
  },
  {
    name: 'Asus 15 inch, 1TB HDD, 8GB RAM',
    price: 1200,
    condition: 'New',
    shippable: true,
    stars: 4,
    img: laptop,
  },
  {
    name: 'AirPots Pro',
    price: 500,
    condition: 'New',
    stars: 5,
    img: AirPots,
  },
  {
    name: 'HeadPhones Logitech GXT 322',
    price: 200,
    price: 189,
    condition: 'New',
    stars: 4,
    img: r2,
  },
  {
    name: 'Macbok 13 inch, 1TB HDD, 8GB RAM',
    price: 1300,
    condition: 'New',
    stars: 5,
    img: Macbook,
  },
  {
    name: 'Keyboard Logitech Ultra X',
    price: 200,
    condition: 'New',
    stars: 4,
    img: r4,
  },
  {
    name: 'Keyboard Logitech Ultra X',
    price: 200,
    condition: 'New',
    stars: 4,
    img: r4,
  },
  {
    name: 'Keyboard Logitech Ultra X',
    price: 200,
    condition: 'New',
    stars: 4,
    img: r4,
  },
  {
    name: 'Keyboard Logitech Ultra X',
    price: 200,
    condition: 'New',
    stars: 4,
    img: r4,
  },
];

export const list_item_variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },

  hover: {
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    transition: {
      duration: 0.5,
    },
  },
};
