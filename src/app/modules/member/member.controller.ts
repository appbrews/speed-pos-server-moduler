import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { MemberServices } from './member.service';

const deleteMember = catchAsync(async (req, res) => {
  const { id } = req.params;
  console.log(id, 'paramsID');
  const result = await MemberServices.deleteMemberFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Owner is deleted succesfully',
    data: result,
  });
});

export const MemberControllers = {
  deleteMember,
};
