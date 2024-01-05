import { Model, Types } from 'mongoose';

export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TOwner = {
  id: string;
  password: string;
  user: Types.ObjectId;
  name: TUserName;
  gender: 'male' | 'female' | 'other';
  email: string;
  contactNo: string;
  country: string;
  city: string;
  street: string;
  profileImage?: string;
  isDeleted: boolean;
};

// for creating static
export interface StudentModel extends Model<TOwner> {
  isUserExists(id: string): Promise<TOwner | null>;
}
