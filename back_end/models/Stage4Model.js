import mongoose from 'mongoose';

const stage4Schema = mongoose.Schema(
  {
    rollno: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    department: { type: String, required: true, default: 4 },
  },
  {
    timestamps: true,
  }
);

const Stage4 = mongoose.model('Stage4', stage4Schema);
export default Stage4;
