import React from "react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 z-[9999] w-full h-full flex items-center justify-center bg-bg bg-opacity-70">
      <div className="spinner" />
      {/* Replace with your spinner or use a library like react-loader-spinner */}
    </div>
  );
};

export default Loading;
