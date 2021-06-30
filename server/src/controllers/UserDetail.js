import UserModel from "../models/UserDetail";

export const UserDetailController = async (req, res, next) => {
  console.log("req", req.body);
  const {
    disasterName,
    userName,
    location,
    latitude,
    longitude,
    department,
    date,
    situation,
    familyMembers,
    phoneNumber,
  } = req.body;
  const detail = new UserModel({
    disasterName,
    userName,
    location,
    latitude,
    longitude,
    department,
    date,
    situation,
    familyMembers,
    phoneNumber,
  });
  try {
    const newUserDetail = await detail.save();
    res.status(201).json({ newUserDetail });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
