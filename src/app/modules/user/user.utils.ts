import { User } from './user.model';

// Owner ID
export const findLastOwnerId = async () => {
  const lastOwner = await User.findOne(
    {
      role: 'owner',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({
      createdAt: -1,
    })
    .lean();
  console.log(lastOwner?.id, 'ownerID');
  return lastOwner?.id ? lastOwner.id.substring(2) : undefined;
};

export const generateOwnerId = async () => {
  let currentId = (0).toString();
  const lastOwnerId = await findLastOwnerId();

  if (lastOwnerId) {
    currentId = lastOwnerId.substring(4);
  }

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  const currentYear = new Date().getFullYear();
  incrementId = `O-${currentYear}${incrementId}`;

  return incrementId;
};
