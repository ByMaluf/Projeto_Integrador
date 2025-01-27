import { Product } from "../../pages/home/types";

export type CardProps = {
  name: string;
  img: string;
  manufacturer: string;
  price: number;
  id?: string;
  setMyProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};
