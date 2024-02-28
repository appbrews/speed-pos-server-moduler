import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { NewsletterServices } from './newsletter.service';

const createNewsletter = catchAsync(async (req, res) => {
  const result = await NewsletterServices.createNewsletterIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Subscribed to newsletter successfully',
    data: result,
  });
});

export const NewsletterControllers = {
  createNewsletter,
};
