import { TOwner } from '../owner/owner.interface';
import { Owner } from '../owner/owner.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generateOwnerId } from './user.utils';

// create owner into DB
const createOwnerIntoDB = async (payload: TOwner) => {
  // create a user object
  const userData: Partial<TUser> = {};
  userData.password = payload.password;

  // set owner role
  userData.role = 'owner';

  // set student email
  userData.email = payload.email;

  // set generated id
  userData.id = await generateOwnerId();

  // create a user
  const newUser = await User.create(userData);

  // create a owner
  if (Object.keys(newUser).length) {
    // set id, _id as user
    payload.id = newUser.id;
    payload.user = newUser._id;
  }
  const newOwner = await Owner.create(payload);
  return newOwner;
};

export const UserServices = {
  createOwnerIntoDB,
};
