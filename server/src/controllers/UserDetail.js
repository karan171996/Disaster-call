//Models
import UserDetailModal from "../models/UserDetail";

// Adding UserDetail post call
export const UserDetailController = async (req, res, next) => {

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
    await detail.save();
    res.status(201).json({ message: 'success' });
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Read UserDetail get call
export const getLocations = async (req, res, next) => {
  try {
    let locations = await UserDetailModal.find({department: req.query.department});
    res.status(200).json({ locations });
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
