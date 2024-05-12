import httpStatus from 'http-status';
import mongoose from 'mongoose';
import AppError from '../../errors/AppError';

import { TMerchant } from '../merchant/merchant.interface';
import { Merchant } from '../merchant/merchant.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generateMerchentId } from './user.utils';

// create owner into DB
const createMerchantIntoDB = async (payload: TMerchant) => {
  // create a user object
  const userData: Partial<TUser> = {};
  userData.password = payload.password;

  // set owner role
  userData.role = 'merchant';

  // set student email
  userData.email = payload.email;

  // START SESSION
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    // set generated id
    userData.id = await generateMerchentId();

    // create a user (transaction-1)
    const newUser = await User.create([userData], { session });

    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    // set id, _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;

    // create a member (transaction-2)
    const newMember = await Merchant.create([payload], { session });

    if (!newMember.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create Owner');
    }

    await session.commitTransaction();
    await session.endSession();
    return newMember;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
  }
};

// DELETE

export const UserServices = {
  createMerchantIntoDB,
};
