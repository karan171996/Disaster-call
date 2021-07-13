import UserDetailModal from "../models/UserDetail";

export const UserDetailController = async (req, res, next) => {
  console.log("req", req.body);
  const detail = new UserDetailModal({
    disasterName: req.body.disasterName,
    userName: req.body.userName,
    location: req.body.location,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    department: req.body.department,
    date: req.body.date,
    situation: req.body.situation,
    familyMembers: req.body.familyMembers,
    phoneNumber: req.body.phoneNumber,
  });
  try {
    console.log("detail", detail);
    const newUserDetail = await detail.save();
    res.status(201).json({ newUserDetail });
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
