import { model, Schema } from 'mongoose';

const noteSchema = new Schema(
  {
    title: {
      required: true,
      trim: true,
    },
    content: {
      required: false,
      default: '',
      trim: true,
    },
    tag: {
      enum: [
        'Work',
        'Personal',
        'Meeting',
        'Shopping',
        'Ideas',
        'Travel',
        'Finance',
        'Health',
        'Important',
        'Todo',
      ],
      required: false,
      default: 'Todo',
    },
  },
  {
    timestamps: true,
  },
);

export const Note = model('Note', noteSchema);
