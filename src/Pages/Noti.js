import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Scroll from '../Components/Scroll';

const Noti = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, title: "Notification 1", message: "1Cr+ CTC", read: false },
    { id: 2, title: "Notification 2", message: "1Cr+ CTC", read: false },
    { id: 3, title: "Notification 3", message: "1Cr+ CTC", read: false },
    { id: 4, title: "Notification 4", message: "1Cr+ CTC", read: false }
  ]);

  const markAsRead = (id) => {
    const updatedNotifications = notifications.map(notification => {
      if (notification.id === id) {
        return { id:notification.id, title:notification.title, message:notification.message, read: !notification.read }; 
      }
      return notification;
    });
  
    const sortedNotifications = [...updatedNotifications].sort((a, b) => {
      if (a.read && !b.read) return 1;
      if (!a.read && b.read) return -1;
      return 0;
    });
  
    setNotifications(sortedNotifications);
  };
  
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 bg-dark">
      <Scroll/>
      <Navbar />
      <h1 className="text-3xl mt-16 font-bold ml-4 mb-4 text-white">Notifications</h1> 

      <div className="flex flex-col items-center justify-center">
        {notifications.map((notification, index) => (
          <div key={notification.id} className={`bg-${notification.read ? 'green-500' : 'white'} w-full sm:w-3/4 md:w-1/2 lg:w-3/4 xl:w-3/4 rounded-lg shadow-md p-6 flex justify-between items-center transition-all duration-300 mb-4`} style={{ transitionDelay: `${index * 100}ms` }}>
            <div>
              <h3 className="text-xl font-semibold mb-2">{notification.title}</h3>
              <p className="text-gray-700">{notification.message}</p>
            </div>
            <div>
              <button onClick={() => markAsRead(notification.id)} className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2">
                {notification.read ? "Mark as Unread" : "Mark as Read"}
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Noti;
