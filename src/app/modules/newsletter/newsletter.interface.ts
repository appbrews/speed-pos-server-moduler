import { Model } from 'mongoose';

export interface TNewsletter {
  email: string;
}

export interface NewsletterModel extends Model<TNewsletter> {
  isEmailExist(email: string): Promise<TNewsletter | null>;
}
