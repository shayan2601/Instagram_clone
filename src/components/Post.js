import React from "react";

const Post = ({ file }) => {
  const closeModal = () => {
    alert("Discard Chnages?");
  };

  const discard = () => {
    if (closeModal === true) {
    }
  };
  discard();

  return (
    <div className="px-40 py-44">
      <img className="object-contain h-20 w-20" src={file} />
      <button
        onClick={closeModal}
        className="bg-gray-500 p-2 rounded-md text-white font-semibold mt-3 cursor-pointer hover:bg-gray-600"
      >
        Cancel
      </button>
    </div>
  );
};

export default Post;
