import React, { useState, useEffect } from "react";
import { IconButton, Box } from "@chakra-ui/react";
import { MdNotifications } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";

const NotificationButton = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOnNotificationPage, setIsOnNotificationPage] = useState(false);

    useEffect(() => {
        setIsOnNotificationPage(location.pathname === "/notification");
    }, [location]);

    const handleToggleNotificationPage = () => {
        if (isOnNotificationPage) {
            navigate(-1);
        } else {
            navigate("/notification");
        }
    };

    return (
        <Box position="relative" mr={4}>
            <IconButton
                icon={<MdNotifications />}
                aria-label="Show Notifications"
                onClick={handleToggleNotificationPage}
            />
        </Box>
    );
};

export default NotificationButton;
