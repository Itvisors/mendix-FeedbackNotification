import { createElement, useEffect } from "react";

import { ToastContainer, toast, Slide, Zoom, Flip, Bounce } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./ui/FeedbackNotification.css";

export default function FeedbackNotification(props) {
    const executeShowAction = notification => {
        //Execute the on show action if needed
        if (props.onShowAction && props.onShowAction.get(notification).canExecute) {
            props.onShowAction.get(notification).execute();
        }
    };

    const executeCloseAction = notification => {
        //Execute the on close action if needed
        if (props.onCloseAction && props.onCloseAction.get(notification).canExecute) {
            props.onCloseAction.get(notification).execute();
        }
    };

    const getNotificationText = notification => props.displayType === "SIMPLE" ? 
        props.notificationText.get(notification).value :
        props.customContent.get(notification);

    const getNotificationShowIcon = notification => {
        const showIcon = props.showIcon.get(notification).value;
        return showIcon ? undefined : false;
    };

    const getNotificationClassName = notification => {
        if (props.className) {
            return props.className.get(notification).value;
        }
        return "";
    };

    const getNotificationType = notification => {
        if (props.notificationType) {
            const notificationType = props.notificationType.get(notification).value.toLowerCase();
            if (
                notificationType !== "info" &&
                notificationType !== "default" &&
                notificationType !== "success" &&
                notificationType !== "warning" &&
                notificationType !== "error"
            ) {
                return "info";
            } else {
                return notificationType;
            }
        }
        return "info";
    };

    const getNotificationTheme = notification => {
        if (props.notificationTheme) {
            const theme = props.notificationTheme.get(notification).value.toLowerCase();
            if (theme === "light" || theme === "dark" || theme === "colored") {
                return theme;
            }
        }
        return "light";
    };

    const getNotificationAutoClose = notification => {
        const autoClose = Number(props.autoClose.get(notification).value, undefined);
        // If autoclose is 0, set to false, then user has to close message himself
        return autoClose === 0 ? false : autoClose;
    };

    const getPosition = () => {
        // Convert position
        if (props.position === "topLeft") {
            return "top-left";
        } else if (props.position === "topRight") {
            return "top-right";
        } else if (props.position === "topCenter") {
            return "top-center";
        } else if (props.position === "bottomRight") {
            return "bottom-right";
        } else if (props.position === "bottomLeft") {
            return "bottom-left";
        } else {
            return "bottom-center";
        }
    };

    const getTransition = () => {
        // Convert transition prop to actual transition
        if (props.transition === "Slide") {
            return Slide;
        } else if (props.transition === "Zoom") {
            return Zoom;
        } else if (props.transition === "Flip") {
            return Flip;
        } else {
            return Bounce;
        }
    };

    useEffect(() => {
        // If new items retrieved, create toast messages
        if (props.datasourceNotifications.items) {
            for (const notification of props.datasourceNotifications.items) {
                toast(getNotificationText(notification), {
                    type: getNotificationType(notification),
                    autoClose: getNotificationAutoClose(notification),
                    className: getNotificationClassName(notification),
                    onClose: () => executeCloseAction(notification),
                    theme: getNotificationTheme(notification),
                    icon: getNotificationShowIcon(notification),
                    role: props.role.value
                });
                executeShowAction(notification);
            }
        }
    }, [props.datasourceNotifications.items]);

    return (
        <ToastContainer
            position={getPosition()}
            stacked={props.stacked}
            closeButton={props.closeButton}
            closeOnClick={props.closeOnClick}
            draggable={props.draggable}
            draggablePercent={props.draggablePercent}
            transition={getTransition()}
            hideProgressBar={props.hideProgressBar}
            pauseOnHover={props.pauseOnHover}
            pauseOnFocusLoss={props.pauseOnFocusLoss}
            rtl={props.rtl}
            newestOnTop={props.newestOnTop}
            limit={props.limit.value && props.limit.value > 0 ? props.limit.value : undefined}
            role={props.role.value}
        />
    );
}
