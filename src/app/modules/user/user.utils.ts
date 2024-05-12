import { User } from './user.model';

// Finde by merchant id
export const findlastMerchantId = async () => {
  const lastMerchant = await User.findOne(
    {
      role: 'merchant',
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

  console.log(lastMerchant?.id, 'merchant');
  return lastMerchant?.id ? lastMerchant.id.substring(2) : undefined;
};

export const generateMerchentId = async () => {
  let currentId = (0).toString();

  const lastMerchantId = await findlastMerchantId();

  if (lastMerchantId) {
    currentId = lastMerchantId.substring(4);
  }

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  const currentYear = new Date().getFullYear();
  incrementId = `M-${currentYear}${incrementId}`;

  return incrementId;
};
