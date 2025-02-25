export type TBook = {
  _id: string;
    name: string;
    brand: string;
    price: number;
    model: string;
    stock: number;
    image?: string;
    quantity:number;
    createdAt: string; 
    updatedAt: string; 
  };
  
  export type TCartItem = TBook & {
    id:string
    quantity: number;
  };