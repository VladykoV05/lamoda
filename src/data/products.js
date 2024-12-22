import { v4 as uuidv4 } from "uuid"; 
import Chance from "chance";

const chance = new Chance();

const colors = ["Red", "Blue", "Green", "Yellow", "Black"];
const categories = ["Shoes", "Clothes", "Accessories", "Bags", "Watches", "Jewelry", "Hats", "Socks", "Scarves", "Belts"];
const images = [
  "/images/samba.jpg",
  "/images/Dmx.jpg",
  "/images/HOOPS.jpg",
  "/images/converse.jpg",
  "/images/FX-1000.jpg",
  "/images/GIUSTO.jpg",
  "/images/CAMPUS.jpg",
  "/images/SUPERSTAR.jpg",
  "/images/Suede.jpg",
  "/images/Balance.jpg",
  "/images/GAZELLE.jpg",
  "/images/Vans.jpg",
];

const generateRandomProduct = () => {
  return {
    id: uuidv4(),
    name: chance.pickone(["adidas", "Reebok", "converse", "Fila", "Kappa", "PUMA", "New Balance", "Vans"]),
    description: `${chance.word()} ${chance.word()} ${chance.word()} ${chance.word()} ${chance.word()}`,
    color: chance.pickone(colors),
    category: chance.pickone(categories),
    price: chance.integer({ min: 10, max: 9999 }),
    rating: chance.floating({ min: 0, max: 5, fixed: 1 }),
    imageUrl: chance.pickone(images),
  };
};

export const products = Array.from({ length: 9 }, generateRandomProduct); 