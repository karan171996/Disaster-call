import mongoose from "mongoose";
const { Schema, model } = mongoose;

const familyMembers = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true, index: true },
  image: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        const urlPattern =
          /(http|https):\/\/(\w+:{0,1}\w*#)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%#!\-/]))?/;
        const urlRegExp = new RegExp(urlPattern);
        return value.match(urlRegExp);
      },
      message: (props) => `${props.value} is not a valid URL`,
    },
  },
});

const UserDetails = new Schema(
  {
    disasterName: { type: String, required: true },
    userName: { type: String, required: true },
    location: { type: String, required: true },
    latitude: { type: String, required: true },
    longitude: { type: String, required: true },
    department: { type: String, required: true },
    phoneNumber: { type: Number, required: true, index: true },
    date: { type: Date, default: Date.now(), required: true },
    situation: { type: String, required: true },
    familyMembers: { type: [familyMembers], required: false },
  },
  {
    collection: "userDetails",
  }
);

const UserDetailModal = model("UserDetail", UserDetails);

module.exports = UserDetailModal;
