import { IoIosNotifications } from "react-icons/io";

const notifications = [
  {
    id: 1,
    message: "Unlock beauty at your doorstep today!",
    time: "Fri, 12:30pm",
  },
  {
    id: 2,
    message: "Pamper yourself, book a session now!",
    time: "Fri, 12:30pm",
  },
  {
    id: 3,
    message: "Your beauty fix, just a tap away!",
    time: "Fri, 12:30pm",
  },
  {
    id: 4,
    message: "Pamper yourself, book a session now!",
    time: "Fri, 12:30pm",
  },
  {
    id: 5,
    message: "Your beauty fix, just a tap away!",
    time: "Fri, 12:30pm",
  },
];

export default function Notifications() {
  return (
    <div className=" mt-10 px-4">
      <ul className="space-y-4">
        {notifications.map((notification) => (
          <li
            key={notification.id}
            className="flex items-center space-x-4 p-4 "
          >
            <div className="text-yellow-500">
              <IoIosNotifications size={24} />
            </div>
            <div className="flex-1">
              <p className="text-[#B8B8B8] font-semibold text-[18px]">
                {notification.message}
              </p>
              <p className="text-[#B8B8B8] text-sm">{notification.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
