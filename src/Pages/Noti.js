import React, { useState } from 'react';
import Back from '../Components/Back';
import Navbar from '../Components/Navbar';

const Noti = () => {
  // Initialize notifications as an array of objects
  const [notifications, setNotifications] = useState([
    { id: 1, title: "Taza Khabar 1", message: "Amazing Offer", read: false },
    { id: 2, title: "Taza Khabar 2", message: "Amazing Offer", read: false },
    { id: 3, title: "Taza Khabar 3", message: "Amazing Offer", read: false },
    { id: 4, title: "Taza Khabar 4", message: "Amazing Offer", read: false }
  ]);

  // Function to mark a notification as read
  const markAsRead = (id) => {
    const updatedNotifications = notifications.map(notification => {
      if (notification.id === id) {
        return { ...notification, read: true };
      }
      return notification;
    });

    // Sort the notifications array to move read notifications to the bottom
    const sortedNotifications = [...updatedNotifications].sort((a, b) => {
      if (a.read && !b.read) return 1;
      if (!a.read && b.read) return -1;
      return 0;
    });

    setNotifications(sortedNotifications);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 bg-dark">
      <Navbar />
      <h1 className="text-3xl mt-16 font-bold ml-4 text-white">Notifications</h1> 

      <div className="space-y-6 items-center">
        {notifications.map((notification, index) => (
          <div key={notification.id} className={`bg-${notification.read ? 'green' : 'white'} max-w-4xl rounded-lg shadow-md p-6 flex justify-between items-center transition-all duration-300`}>
            <div>
              <h3 className="text-xl font-semibold mb-2">{notification.title}</h3>
              <p className="text-gray-700">{notification.message}</p>
            </div>
            <div>
              <button onClick={() => markAsRead(notification.id)} className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2">Mark as Read</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Noti;
