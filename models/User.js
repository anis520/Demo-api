import mongoose from "mongoose";

// adress types objects
const AddressSchema = new mongoose.Schema({
  address: String,
  type: Number,
});

// schema
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,

      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// export model
export default mongoose.model("User", userSchema);
