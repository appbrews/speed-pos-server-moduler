import { Schema, model } from 'mongoose';
import { NewsletterModel, TNewsletter } from './newsletter.interface';

const newsletterSchema = new Schema<TNewsletter>(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true },
);

newsletterSchema.statics.isEmailExist = async function (email: string) {
  return await Newsletter.findOne({ email });
};

export const Newsletter = model<TNewsletter, NewsletterModel>(
  'Newsletter',
  newsletterSchema,
);
