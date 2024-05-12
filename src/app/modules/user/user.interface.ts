import { Model } from 'mongoose';
import { USER_ROLE } from './user.constants';

export interface TUser {
  id: string;
  email: string;
  password: string;
  role: 'admin' | 'merchant' | 'employee';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
}

export interface UserModel extends Model<TUser> {
  // instance methods for checking if the user exist
  isUserExistsByEmail(email: string): Promise<TUser>;

  // instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number,
  ): boolean;
}

export type TUserRole = keyof typeof USER_ROLE;
