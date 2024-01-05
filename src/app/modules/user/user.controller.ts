import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

// Create owner
const createOwner = catchAsync(async (req, res) => {
  const { owner: ownerData } = req.body;

  const result = await UserServices.createOwnerIntoDB(ownerData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

export const UserControllers = {
  createOwner,
};
