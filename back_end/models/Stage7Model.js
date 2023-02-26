import mongoose from 'mongoose';

const stage7Schema = mongoose.Schema(
  {
    rollno: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    department: { type: String, required: true, default: 7 },
  },
  {
    timestamps: true,
  }
);

const Stage7 = mongoose.model('Stage7', stage7Schema);
export default Stage7;
