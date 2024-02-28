import { TFeedback } from './feedback.interface';
import { Feedback } from './feedback.model';

const createFeedbackIntoDB = (payload: TFeedback) => {
  const result = Feedback.create(payload);
  return result;
};

export const FeedbackServices = {
  createFeedbackIntoDB,
};
