import {
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import { BookmarkIcon } from "@heroicons/react/outline";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import React from "react";

const Posts = ({ id, caption, image }) => {
  return (
    <div style={{ border: "1px solid lightgray" }} className="bg-white  mt-10 ">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://scontent.flhe11-1.fna.fbcdn.net/v/t1.6435-9/121238040_1273816519654747_3044298440643338859_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGXQKusmhqOcKrLRSbFZ6E8OyCj9XuRzgw7IKP1e5HODFXxEOKX19WrFpJgE0a1Y6nWVVhK6jNLSgWwBidHXZ9W&_nc_ohc=fbmMe-BvzGcAX_hj6W6&_nc_ht=scontent.flhe11-1.fna&oh=0885ca9c25d9b75ec4436e2822cf3269&oe=6147EBA3"
          />
          <h2>shayan2601</h2>
        </div>
        <DotsHorizontalIcon className=" h-8 w-8" />
      </div>
      <div>
        <img className="w-full h-xl" src={image} />
      </div>
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <HeartIcon className="h-8 w-8" />
          <ChatIcon className="h-8 w-8" />
          <ShareIcon className="h-8 w-8" />
        </div>

        <div>
          <BookmarkIcon className="h-8 w-8" />
        </div>
      </div>
      <div className="flex items-center space-x-4 px-4">
        <h2 className="font-semibold">shayan.2601</h2>
        <p className="text-gray-500">{caption}</p>
      </div>
      <div className="flex p-2">
        <EmojiHappyIcon className="h-8 w-8" />
        <input
          className="flex-grow outline-none focus-within:shadow-lg rounded-full p-2"
          placeholder="Add a Comment"
        />
        <button>Post</button>
      </div>
    </div>
  );
};

export default Posts;
