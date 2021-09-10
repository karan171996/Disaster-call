import React, { useEffect, useRef, useState, useMemo } from "react";
import { Drawer, Button, Space, notification } from "antd";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css"; // eslint-disable-line import/no-webpack-loader-syntax
import "./index.scss";

import * as actions from "../../actions";

const Department = ({ department }) => {
  // let { id } = useParams();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [selectedDepartment, setDepartment] = useState({});
  const locationDeleteMessage = useSelector(
    (state) => state.department?.locationDeleteMessage
  );
  const mapContainer = useRef(null);
  mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_ACCESSTOKEN;
  const geo = useMemo(
    () =>
      department?.length
        ? department.map((item) => [item?.latitude, item?.longitude])
        : [],
    [department]
  );
  useEffect(() => {
    notification.success({
      message: "Location Deleted",
    });
  }, [locationDeleteMessage]);
  useEffect(() => {
    const mapBox = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
      center: [77.1025, 28.7041],
      zoom: 10,
    });
    geo.length &&
      geo.forEach((item) => {
        const el = document.createElement("div");
        const width = 40;
        const height = 40;
        el.className = "marker";
        el.style.backgroundImage = `url(https://placekitten.com/g/${width}/${height}/)`;
        el.style.width = `${width}px`;
        el.style.height = `${height}px`;
        el.style.backgroundSize = "100%";
        el.addEventListener("click", (e) => {
          e.preventDefault();
          const locationClicked = department.find(
            (data) =>
              item.includes(data?.latitude) && item.includes(data?.longitude)
          );
          setDepartment(locationClicked);
          setVisible(true);
        });
        new mapboxgl.Marker(el).setLngLat(item).addTo(mapBox);
      });
    mapBox.on("load", () => {
      mapBox.resize();
    });
  }, [geo]);

  const onClose = () => {
    setVisible(false);
  };
  const deleteRequest = () => {
    const id = selectedDepartment?._id;
    dispatch(actions.deleteLocationRequest(id));
    setVisible(false);
  };
  return (
    <>
      <div
        ref={(el) => (mapContainer.current = el)}
        className="map-container"
      />

      <Drawer
        title="Location Details"
        placement="right"
        width={500}
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <div className="drawer">
          <div className="drawer__date">
            <label>
              <b>Date</b>
            </label>
            <p>
              {moment(selectedDepartment?.date).format("hh:mm A DD/MM/YYYY")}
            </p>
          </div>
          <div className="drawer__coordinates">
            <label>
              <b>Coordinates</b>
            </label>
            <div className="drawer__coordinates__container">
              <label>
                <b>Lat</b>
              </label>
              <p>{selectedDepartment?.latitude}</p>
            </div>
            <div className="drawer__coordinates__container">
              <label>
                <b>Long</b>
              </label>
              <p>{selectedDepartment?.longitude}</p>
            </div>
          </div>
          <div className="drawer__disasterName">
            <label>
              <b>Disaster Name</b>
            </label>
            <p>{selectedDepartment?.disasterName}</p>
          </div>

          <div className="drawer__userData">
            <label>
              <b>User Data</b>
            </label>
            <div className="drawer__userData-container">
              <label>
                <b>Name</b>
              </label>
              <p>{selectedDepartment?.userName}</p>
            </div>
            <div className="drawer__userData-container">
              <label>
                <b>PhoneNumber</b>
              </label>
              <p>{selectedDepartment?.phoneNumber}</p>
            </div>
            <div className="drawer__userData-container">
              <label>
                <b>Location</b>
              </label>
              <p>{selectedDepartment?.location}</p>
            </div>
            <div className="drawer__userData-container">
              <label>
                <b>FamilyMembers</b>
              </label>
              <p>{selectedDepartment?.familyMembers}</p>
            </div>
          </div>

          <div className="drawer__situationData">
            <label>
              <b>Situation</b>
            </label>
            <p>{selectedDepartment?.situation}</p>
          </div>
        </div>

        <Button type="danger" onClick={deleteRequest}>
          Delete
        </Button>
      </Drawer>
    </>
  );
};

export default Department;
