// src/components/Classes/Classes.jsx
import React, { useState } from "react";
import ClassTabs from "./ClassTabs";
import ClassContent from "./ClassContent";
import "./Classes.css";

const classData = {
  yoga: {
    title: "Why are your Yoga?",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus sequi...",
    schedule: [
      "Saturday-Sunday: 8:00am - 10:00am",
      "Monday-Tuesday: 10:00am - 12:00pm",
      "Wednesday-Friday: 3:00pm - 6:00pm",
    ],
    image: "yoga.jpg",
  },
  group: {
    title: "Group Yoga",
    description:
      "Connect with others and boost motivation in a group setting. Lorem ipsum...",
    schedule: [
      "Sat-Sun: 9:00am - 11:00am",
      "Mon-Wed: 5:00pm - 7:00pm",
      "Thu-Fri: 6:00pm - 8:00pm",
    ],
    image: "group.webp",
  },
  solo: {
    title: "Solo Yoga",
    description:
      "Enjoy a personalized yoga experience at your own pace. Lorem ipsum...",
    schedule: ["Mon-Fri: 7:00am - 9:00am", "Sat-Sun: 4:00pm - 6:00pm"],
    image: "solo.jpg",
  },
  stretching: {
    title: "Stretching",
    description:
      "Improve mobility, prevent injuries, and enhance flexibility. Lorem ipsum...",
    schedule: ["Daily: 6:30am - 7:30am", "Mon-Fri: 8:00pm - 9:00pm"],
    image: "stretching.webp",
  },
};

const Classes = () => {
  const [selectedClass, setSelectedClass] = useState("yoga");

  return (
    <section id="classes" className="bg-shape pt-5">
      <div className="container w-75">
        <h2 className="navy-color text-center">Our Classes</h2>
        <div className="one-line"></div>
        <p className="faded-gray mt-3 fw-bold text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <ClassTabs selected={selectedClass} onSelect={setSelectedClass} />
        <ClassContent data={classData[selectedClass]} />
      </div>
    </section>
  );
};

export default Classes;
