import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    rollno: { type: String, unique: true, required: true },
    name: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    department: { type: String, required: true },
    year: { type: String, required: true },
    section: { type: String, required: true },
    isAdmin: { type: String, default: false, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
export default User;
