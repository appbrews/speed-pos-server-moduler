import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

// Create a merchant
const createMerchant = catchAsync(async (req, res) => {
  const { merchant: merchantData } = req.body;

  const result = await UserServices.createMerchantIntoDB(merchantData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

export const UserControllers = {
  createMerchant,
};
