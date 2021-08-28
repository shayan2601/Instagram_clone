import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";

const Widgets = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div>
      <div className="flex space-x-6 items-center justify-between">
        <img
          className="h-14 w-14 rounded-full object-cover"
          src="https://scontent.flhe11-1.fna.fbcdn.net/v/t1.6435-9/121238040_1273816519654747_3044298440643338859_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGXQKusmhqOcKrLRSbFZ6E8OyCj9XuRzgw7IKP1e5HODFXxEOKX19WrFpJgE0a1Y6nWVVhK6jNLSgWwBidHXZ9W&_nc_ohc=fbmMe-BvzGcAX_hj6W6&_nc_ht=scontent.flhe11-1.fna&oh=0885ca9c25d9b75ec4436e2822cf3269&oe=6147EBA3"
        />
        <div className="flex flex-col">
          <h2 className="font-semibold">shayan.2601</h2>
          <p
            onClick={signOut}
            className="text-gray-500 font-bold truncate cursor-pointer"
          >
            {user?.email}
          </p>
        </div>
        <div>
          <button className="text-blue-700 italic">Switch</button>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <h2 className="text-gray-500 font-bold">Suggestions for you</h2>
        <button className="font-bold">See All</button>
      </div>

      <div className="flex flex-col space-x-4 space-y-3 ">
        <div className="flex items-center justify-between ml-4 mt-6 ">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://scontent.flhe11-1.fna.fbcdn.net/v/t1.6435-9/121238040_1273816519654747_3044298440643338859_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGXQKusmhqOcKrLRSbFZ6E8OyCj9XuRzgw7IKP1e5HODFXxEOKX19WrFpJgE0a1Y6nWVVhK6jNLSgWwBidHXZ9W&_nc_ohc=fbmMe-BvzGcAX_hj6W6&_nc_ht=scontent.flhe11-1.fna&oh=0885ca9c25d9b75ec4436e2822cf3269&oe=6147EBA3"
          />
          <div className="flex flex-col flex-grow ml-3">
            <h2 className="font-semibold">Faizan</h2>
            <p className="text-gray-500">New to Instagram</p>
          </div>
          <div>
            <button className="text-blue-500 font-semibold">Follow</button>
          </div>
        </div>
        <div className="flex items-center justify-between ">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://scontent.flhe11-1.fna.fbcdn.net/v/t1.6435-9/121238040_1273816519654747_3044298440643338859_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGXQKusmhqOcKrLRSbFZ6E8OyCj9XuRzgw7IKP1e5HODFXxEOKX19WrFpJgE0a1Y6nWVVhK6jNLSgWwBidHXZ9W&_nc_ohc=fbmMe-BvzGcAX_hj6W6&_nc_ht=scontent.flhe11-1.fna&oh=0885ca9c25d9b75ec4436e2822cf3269&oe=6147EBA3"
          />
          <div className="flex flex-col flex-grow ml-3">
            <h2 className="font-semibold">Faizan</h2>
            <p className="text-gray-500">New to Instagram</p>
          </div>
          <div>
            <button className="text-blue-500 font-semibold">Follow</button>
          </div>
        </div>
        <div className="flex items-center justify-between ">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://scontent.flhe11-1.fna.fbcdn.net/v/t1.6435-9/121238040_1273816519654747_3044298440643338859_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGXQKusmhqOcKrLRSbFZ6E8OyCj9XuRzgw7IKP1e5HODFXxEOKX19WrFpJgE0a1Y6nWVVhK6jNLSgWwBidHXZ9W&_nc_ohc=fbmMe-BvzGcAX_hj6W6&_nc_ht=scontent.flhe11-1.fna&oh=0885ca9c25d9b75ec4436e2822cf3269&oe=6147EBA3"
          />
          <div className="flex flex-col flex-grow ml-3">
            <h2 className="font-semibold">Faizan</h2>
            <p className="text-gray-500">New to Instagram</p>
          </div>
          <div>
            <button className="text-blue-500 font-semibold">Follow</button>
          </div>
        </div>
        <div className="flex items-center justify-between ">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://scontent.flhe11-1.fna.fbcdn.net/v/t1.6435-9/121238040_1273816519654747_3044298440643338859_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGXQKusmhqOcKrLRSbFZ6E8OyCj9XuRzgw7IKP1e5HODFXxEOKX19WrFpJgE0a1Y6nWVVhK6jNLSgWwBidHXZ9W&_nc_ohc=fbmMe-BvzGcAX_hj6W6&_nc_ht=scontent.flhe11-1.fna&oh=0885ca9c25d9b75ec4436e2822cf3269&oe=6147EBA3"
          />
          <div className="flex flex-col flex-grow ml-3">
            <h2 className="font-semibold">Faizan</h2>
            <p className="text-gray-500">New to Instagram</p>
          </div>
          <div>
            <button className="text-blue-500 font-semibold">Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
