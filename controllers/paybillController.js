import Paybill from '../models/PaybillModel.js';
import { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';
import day from 'dayjs';

//GET ALL PAYBILLS
export const getAllPaybills = async (req, res) => {
  const { name, contact, ID_number, bank_telco, search, sort } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };

  if (search) {
    queryObject.$or = [
      { name: { $regex: search, $options: 'i' } },
      { contact: { $regex: search, $options: 'i' } },
      { ID_number: { $regex: search, $options: 'i' } },
      { bank_telco: { $regex: search, $options: 'i' } },
    ];
  }

  if (name && name !== 'all') {
    queryObject.name = name;
  }

  if (contact && contact !== 'all') {
    queryObject.contact = contact;
  }

  if (bank_telco && bank_telco !== 'all') {
    queryObject.bank_telco = bank_telco;
  }

  if (ID_number && ID_number !== 'all') {
    queryObject.ID_number = ID_number;
  }

  const sortOptions = {
    newest: '-createdAt',
    oldest: 'createdAt',
    'a-z': '-subject',
    'z-a': 'subject',
  };

  // Pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const sortKey = sortOptions[sort] || sortOptions.newest;
  const paybills = await Paybill.find(queryObject)
    .sort(sortKey)
    .skip(skip)
    .limit(limit);

  const totalPaybills = await Paybill.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalPaybills / limit);
  res
    .status(StatusCodes.OK)
    .json({ totalPaybills, numOfPages, currentPage: page, paybills });
};

//CREATE PAYBILLS
export const createPaybill = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const paybill = await Paybill.create(req.body);
  res.status(StatusCodes.CREATED).json({ paybill });
};

//GET PAYBILL
export const getPaybill = async (req, res) => {
  const paybill = await Paybill.findById(req.params.id);
  res.status(StatusCodes.OK).json({ paybill });
};

//UPDATE PAYBILLS
export const updatePaybill = async (req, res) => {
  const updatedPaybill = await Paybill.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(StatusCodes.OK).json({ paybill: updatedPaybill });
};

//DELETE PAYBILLS
export const deletePaybill = async (req, res) => {
  const removedPaybill = await Paybill.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ paybill: removedPaybill });
};

//SHOW STATS
export const showStats = async (req, res) => {
  let stats = await Order.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: '$orderStatus', count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    bidding: stats.bidding || 0,
    progress: stats.progress || 0,
    done: stats.done || 0,
  };

  let monthlyPaybills = await Paybill.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
        count: { $sum: 1 },
      },
    },
    { $sort: { '_id.year': -1, '_id.month': -1 } },
    { $limit: 6 },
  ]);

  monthlyPaybills = monthlyPaybills
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;

      const date = day()
        .month(month - 1)
        .year(year)
        .format('MMM YY');

      return { date, count };
    })
    .reverse();

  res.status(StatusCodes.OK).json({ defaultStats, monthlyPaybills });
};
