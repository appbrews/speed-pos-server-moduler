import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

// Create member
const createMember = catchAsync(async (req, res) => {
  const { member: MemberData } = req.body;

  const result = await UserServices.createMemberIntoDB(MemberData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

export const UserControllers = {
  createMember,
};
