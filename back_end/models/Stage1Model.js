import mongoose from 'mongoose';

const stage1Schema = mongoose.Schema(
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

const Stage1 = mongoose.model('Stage1', stage1Schema);
export default Stage1;
