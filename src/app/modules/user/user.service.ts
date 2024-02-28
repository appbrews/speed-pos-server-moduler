import httpStatus from 'http-status';
import mongoose from 'mongoose';
import AppError from '../../errors/AppError';

import { TMember } from '../member/member.interface';
import { Member } from '../member/member.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generateOwnerId } from './user.utils';

// create owner into DB
const createMemberIntoDB = async (payload: TMember) => {
  // create a user object
  const userData: Partial<TUser> = {};
  userData.password = payload.password;

  // set owner role
  userData.role = 'member';

  // set student email
  userData.email = payload.email;

  // START SESSION
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    // set generated id
    userData.id = await generateOwnerId();

    // create a user (transaction-1)
    const newUser = await User.create([userData], { session });

    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Faild to create user');
    }

    // set id, _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;

    // create a owner (transaction-2)
    const newOwner = await Member.create([payload], { session });

    if (!newOwner.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Faild to create Owner');
    }

    await session.commitTransaction();
    await session.endSession();
    return newOwner;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
  }
};

// DELETE

export const UserServices = {
  createMemberIntoDB,
};
