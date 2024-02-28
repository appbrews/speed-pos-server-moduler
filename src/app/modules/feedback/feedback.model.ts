import { Schema, model } from 'mongoose';
import { TFeedback } from './feedback.interface';

const feedbackSchema = new Schema<TFeedback>(
  {
    feedback: {
      type: String,
      required: true,
      trim: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true },
);

export const Feedback = model<TFeedback>('Feedback', feedbackSchema);
