import { Model, Types } from 'mongoose';

export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TMember = {
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
export interface StudentModel extends Model<TMember> {
  isUserExists(id: string): Promise<TMember | null>;
}
