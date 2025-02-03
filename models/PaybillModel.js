import mongoose from 'mongoose';

const PaybillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 50,
      required: [true, 'Name is required'],
    },

    contact: { type: Number, required: [true, 'Contact is required'] },

    ID_number: {
      type: Number,
      maxlength: 50,
      required: [true, 'ID Number is required'],
    },

    bank_telco: {
      type: String,
      maxlength: 50,
      required: [true, 'Bank or Telco is required'],
    },

    //Text input, instructions:{ }
    //upload files fileupUpload: { }
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Paybill', PaybillSchema);
