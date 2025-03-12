export interface Product {
  kalite: string;
  yüzey: string;
  kalınlık: number;
  genişlik: number;
  uzunluk: number | string; // uzunluk hem number hem string olabilir
  ağırlık: number;
}