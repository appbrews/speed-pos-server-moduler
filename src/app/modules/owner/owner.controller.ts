import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { OwnerServices } from './owner.service';

const deleteOwner = catchAsync(async (req, res) => {
  const { id } = req.params;
  console.log(id, 'paramsID');
  const result = await OwnerServices.deleteOwnerFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Owner is deleted succesfully',
    data: result,
  });
});

export const OwnerControllers = {
  deleteOwner,
};
