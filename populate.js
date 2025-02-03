import { readFile } from 'fs/promises';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import Order from './models/OrderModel.js';
import User from './models/UserModel.js';
try {
  await mongoose.connect(process.env.MONGO_URL);
  // const user = await User.findOne({ email: 'admin@gmail.com' });
  const user = await User.findOne({ email: 'test@test.com' });

  const jsonOrders = JSON.parse(
    await readFile(new URL('./utils/mockData.json', import.meta.url))
  );
  const orders = jsonOrders.map((order) => {
    return { ...order, createdBy: user._id };
  });
  await Order.deleteMany({ createdBy: user._id });
  await Order.create(orders);
  console.log('Success!!!');
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}
