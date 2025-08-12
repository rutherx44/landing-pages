import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Rating = ({ rating }) => {
  return (
    <div className="bg-bg rounded-full size-8 md:size-10 lg:size-11">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        minValue={0}
        text={rating}
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
          textSize: "35px",
          textColor: "#ffffff",
        })}
      />
    </div>
  );
};
