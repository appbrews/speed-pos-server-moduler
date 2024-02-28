import { Types } from 'mongoose';

export interface TFeedback {
  feedback: string;
  createdBy: Types.ObjectId;
}
