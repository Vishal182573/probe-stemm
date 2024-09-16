import React, { useState, useEffect } from "react";
import { BookOpen, Video } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type Notification = {
  id: number;
  type: "course" | "webinar";
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
        {
          id: 1,
          type: "course",
          title: "New AI Course Available",
          date: "2024-09-20",
        },
        {
          id: 2,
          type: "webinar",
          title: "Blockchain Technology Webinar",
          date: "2024-09-25",
        },
        {
          id: 3,
          type: "course",
          title: "Advanced Machine Learning Course",
          date: "2024-10-01",
        },
        {
          id: 4,
          type: "webinar",
          title: "Quantum Computing: The Future",
          date: "2024-10-05",
        },
      ];
      setNotifications(mockNotifications);
    };
    fetchNotifications();
  }, []);

  return (
    <Card className="w-full max-w-3xl mx-auto bg-gray-900 border-blue-800">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-2xl font-bold text-blue-400">
          Notifications
        </CardTitle>
        {notifications.length > 0 && (
          <Badge variant="secondary" className="bg-blue-600 text-white">
            {notifications.length} New
          </Badge>
        )}
      </CardHeader>
      <CardContent>
        <AnimatePresence>
          {notifications.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-gray-400"
            >
              No new notifications
            </motion.p>
          ) : (
            <ul className="space-y-4">
              {notifications.map((notif) => (
                <motion.li
                  key={notif.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-black border-blue-800">
                    <CardContent className="flex items-center p-4">
                      {notif.type === "course" ? (
                        <BookOpen className="h-6 w-6 text-blue-400 mr-4" />
                      ) : (
                        <Video className="h-6 w-6 text-blue-400 mr-4" />
                      )}
                      <div>
                        <h3 className="text-lg font-semibold text-blue-300">
                          {notif.title}
                        </h3>
                        <p className="text-sm text-gray-400">{notif.date}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.li>
              ))}
            </ul>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export default NotificationsComponent;
