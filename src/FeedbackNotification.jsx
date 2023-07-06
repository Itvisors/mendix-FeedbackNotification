import { createElement, useEffect } from "react";

import { ToastContainer, toast } from 'react-toastify';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";
import "./ui/FeedbackNotification.css";


export default function FeedbackNotification(props) {

    useEffect(() => {
        if (props.datasourceNotifications.items) {
            for (let itemIndex in props.datasourceNotifications.items) {
                const notification = props.datasourceNotifications.items[itemIndex];
                toast(getNotificationText(notification), {
                    type: getNotificationType(notification),
                    autoClose: getNotificationAutoClose(notification),
                    className: getNotificationClassName(notification),
                    onClose: executeCloseAction,
                    theme: getNotificationTheme(notification),
                    icon: getNotificationShowIcon(notification)
                });
                executeShowAction();
            }     
        }
    }, [props.datasourceNotifications.items])

    const executeShowAction = () => {
        //Execute the on show action if needed
        if (props.onShowAction && props.onShowAction.canExecute) {
            props.onShowAction.execute();
        }
    }

    const executeCloseAction = () => {
        //Execute the on close action if needed
        if (props.onCloseAction && props.onCloseAction.canExecute) {
            props.onCloseAction.execute();
        }
    }

    const getNotificationText = (notification) => {
        return props.notificationText.get(notification).value;
    }

    const getNotificationShowIcon = (notification) => {
        let showIcon = props.showIcon.get(notification).value;
        return showIcon ? undefined : false;
    }

    const getNotificationClassName = (notification) => {
        if (props.className) {
            return props.className.get(notification).value;
        }
        return '';
    }

    const getNotificationType = (notification) => {
        if (props.notificationType) {
            return props.notificationType.get(notification).value.toLowerCase();
        }
        return '';
    }

    const getNotificationTheme = (notification) => {
        if (props.notificationTheme) {
            let theme = props.notificationTheme.get(notification).value.toLowerCase();
            if (theme === 'light' || theme === 'dark' || theme === 'colored') {
                return theme;
            }
        }
        return 'light';
    }

    const getNotificationAutoClose = (notification) => {
        let autoClose = parseInt(props.autoClose.get(notification).value, undefined);
        // If autoclose is 0, set to false, then user has to close message himself
        return autoClose === 0 ? false : autoClose;
    }

    const getPosition = () => {
        // Convert position
        if (props.position === 'topLeft') {
            return 'top-left';
        } else if (props.position === 'topRight') {
            return 'top-right';
        } else if (props.position === 'topCenter') {
            return 'top-center';
        } else if (props.position === 'bottomRight') {
            return 'bottom-right';
        } else if (props.position === 'bottomLeft') {
            return 'bottom-left';
        } else {
            return 'bottom-center';
        }
    }

    const getTransition = () => {
        // Convert transition prop to actual transition
        if (props.transition === 'Slide') {
            return Slide;
        } else if (props.transition === 'Zoom') {
            return Zoom;
        } else if (props.transition === 'Flip') {
            return Flip;
        } else {
            return Bounce;
        }
    }

    return <ToastContainer 
        position = {getPosition()}
        closeButton = {props.closeButton === false ? false : undefined}
        closeOnClick = {props.closeOnClick}
        draggable = {props.draggable}
        draggablePercent = {props.draggablePercent}
        transition = {getTransition()}
        hideProgressBar = {props.hideProgressBar}
        pauseOnHover = {props.pauseOnHover}
        pauseOnFocusLoss = {props.pauseOnFocusLoss}
        rtl = {props.rtl}
        newestOnTop = {props.newestOnTop}
        limit = {props.limit.value && props.limit.value > 0 ? props.limit.value : undefined}
    />;
}

