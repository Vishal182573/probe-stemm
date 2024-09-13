import React, { useState, useEffect } from 'react';
import { Bell, BookOpen, Video } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

type Notification = {
  id: number;
  type: 'course' | 'webinar';
  title: string;
  date: string;
};

const NotificationsComponent: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    // Simulating fetching notifications from an API
    const fetchNotifications = async () => {
      // In a real application, this would be an API call
      const mockNotifications: Notification[] = [
        { id: 1, type: 'course', title: 'New AI Course Available', date: '2024-09-20' },
        { id: 2, type: 'webinar', title: 'Blockchain Technology Webinar', date: '2024-09-25' },
        { id: 3, type: 'course', title: 'Advanced Machine Learning Course', date: '2024-10-01' },
        { id: 4, type: 'webinar', title: 'Quantum Computing: The Future', date: '2024-10-05' },
      ];
      setNotifications(mockNotifications);
    };

    fetchNotifications();
  }, []);

  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center">
            <Bell className="h-5 w-5 mr-2 text-purple-500" />
            Notifications
          </span>
          {notifications.length > 0 && (
            <Badge variant="secondary">
              {notifications.length} New
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {notifications.length === 0 ? (
          <p className="text-gray-500 text-center">No new notifications</p>
        ) : (
          <ul className="space-y-2">
            <AnimatePresence>
              {notifications.map((notif) => (
                <motion.li
                  key={notif.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-between bg-gray-100 p-3 rounded-md"
                >
                  <div className="flex items-center space-x-3">
                    {notif.type === 'course' ? (
                      <BookOpen className="h-5 w-5 text-blue-500" />
                    ) : (
                      <Video className="h-5 w-5 text-green-500" />
                    )}
                    <div>
                      <p className="font-medium text-sm">{notif.title}</p>
                      <p className="text-xs text-gray-500">{notif.date}</p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default NotificationsComponent;