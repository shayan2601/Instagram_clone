import React from "react";

const Story = ({ id, url }) => {
  return (
    <div className="relative overflow-hidden h-16 w-16 border-red-600 rounded-full border-2 cursor-pointer">
      <img
        className="rounded-full object-cover p-1 overflow-hidden"
        src={url}
      />
    </div>
  );
};

export default Story;
