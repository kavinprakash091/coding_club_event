import mongoose from 'mongoose';

const stage6Schema = mongoose.Schema(
  {
    rollno: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
  },
  {
    timestamps: true,
  }
);

const Stage6 = mongoose.model('Stage6', stage6Schema);
export default Stage6;
