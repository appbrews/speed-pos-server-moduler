import { User } from './user.model';

// Owner ID
export const findLastMemberId = async () => {
  const lastMember = await User.findOne(
    {
      role: 'member',
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
  console.log(lastMember?.id, 'memberID');
  return lastMember?.id ? lastMember.id.substring(2) : undefined;
};

export const generateOwnerId = async () => {
  let currentId = (0).toString();
  const lastMemberId = await findLastMemberId();

  if (lastMemberId) {
    currentId = lastMemberId.substring(4);
  }

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  const currentYear = new Date().getFullYear();
  incrementId = `O-${currentYear}${incrementId}`;

  return incrementId;
};
