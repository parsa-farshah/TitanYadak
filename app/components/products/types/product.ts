// types/product.ts
export type Category =
  | "starter"
  | "alternator"
  | "gauge"
  | "shut-off"
  | "battery-disconnector"
  | "sensor"
  | "starter-switch"
  | "alternator-parts"
  | "starter-parts"
  | "ac-compressor"
  | "electric-throttle"
  | "solenoid";

export interface Product {
  id: string;
  title: string;
  slug: string;
  category: Category;
  price: number;
  stock: number;
  image: string;
}
