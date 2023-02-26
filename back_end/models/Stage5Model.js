import mongoose from 'mongoose';

const stage5Schema = mongoose.Schema(
  {
    rollno: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    department: { type: String, required: true, default: 1 },
  },
  {
    timestamps: true,
  }
);

const Stage5 = mongoose.model('Stage5', stage5Schema);
export default Stage5;
