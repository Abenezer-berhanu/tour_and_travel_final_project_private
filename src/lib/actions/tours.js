import connectDB from "../db/config";
import tourModel from "../db/model/tourModel";

export const fetchAllTours = async () => {
  "use server";
  try {
    await connectDB();
    const tours = await tourModel.find({}).lean();
    return tours ? JSON.stringify(tours) : false;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTourById = async (id) => {
  "use server";
  try {
    await connectDB();
    const tours = await tourModel
      .findById(id)
      .populate("guides", "name email")
      .lean();
    return tours ? JSON.stringify(tours) : false;
  } catch (error) {}
};

export const fetchTop5Cheap = async () => {
  "use server";
  try {
    await connectDB();
    const tours = await tourModel.find({}).sort({ price: 1 }).limit(5).lean();
    return tours ? JSON.stringify(tours) : false;
  } catch (error) {}
};

export const getAllTours = async () => {
  try {
    await connectDB();
    const tours = await tourModel.find({}).lean();
    if (tours) {
      return tours;
    }
  } catch (error) {
    console.log(error);
  }
};
