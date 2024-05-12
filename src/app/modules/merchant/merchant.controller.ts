import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { MemberServices } from './merchant.service';

const deleteMerchant = catchAsync(async (req, res) => {
  const { id } = req.params;
  console.log(id, 'paramsID');
  const result = await MemberServices.deleteMerchantFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Merchant is deleted succesfully',
    data: result,
  });
});

export const MemberControllers = {
  deleteMerchant,
};
