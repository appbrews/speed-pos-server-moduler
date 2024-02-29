import { Types } from 'mongoose';

export interface TProduct {
  name: string;
  price: number;
  quantity: number;
  category: Types.ObjectId;
  soldUnits: string;
  createdBy: Types.ObjectId;
}
