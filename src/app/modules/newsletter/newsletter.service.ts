import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TNewsletter } from './newsletter.interface';
import { Newsletter } from './newsletter.model';

const createNewsletterIntoDB = async (payload: TNewsletter) => {
  const existingEmail = await Newsletter.isEmailExist(payload.email);

  if (existingEmail) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'Your are already been subscribed to our newsletter',
    );
  }

  const result = Newsletter.create(payload);
  return result;
};

export const NewsletterServices = {
  createNewsletterIntoDB,
};
