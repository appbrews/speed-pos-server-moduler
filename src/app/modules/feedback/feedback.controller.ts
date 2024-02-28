import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { FeedbackServices } from './feedback.service';

const createFeedback = catchAsync(async (req, res) => {
  const result = await FeedbackServices.createFeedbackIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feedback is created successfully',
    data: result,
  });
});

export const FeedbackControllers = {
  createFeedback,
};
