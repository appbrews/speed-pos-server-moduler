import { Types } from 'mongoose';

export interface TProduct {
  name: string;
  price: number;
  image: string;
  quantity: number;
  category: Types.ObjectId;
  soldUnits: string;
  createdBy: Types.ObjectId;
}
