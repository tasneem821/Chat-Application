// src/components/NotificationBell/NotificationBell.jsx
import { useState } from 'react';
import { useNotifications } from '../context/NotificationContext';
import './NotificationBell.css';

const NotificationBell = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotifications();

  return (
    <div className="notification-container">
      <button 
        className="notification-bell" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Notifications"
      >
        🔔
        {unreadCount > 0 && (
          <span className="notification-badge">
            {unreadCount}
          </span>
        )}
      </button>
      
      {isOpen && (
        <div className="notification-dropdown">
          <div className="notification-header">
            <h3>Notifications</h3>
            <button 
              className="mark-all-btn"
              onClick={markAllAsRead}
            >
              Mark all as read
            </button>
          </div>
          
          {notifications.length === 0 ? (
            <div className="notification-empty">No notifications</div>
          ) : (
            <ul className="notification-list">
              {notifications.map(notification => (
                <li 
                  key={notification.id}
                  className={`notification-item ${notification.read ? '' : 'unread'}`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="notification-text">{notification.text}</div>
                  <small className="notification-time">
                    {new Date(notification.timestamp).toLocaleTimeString()}
                  </small>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
