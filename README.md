## FeedbackNotification
React widget used to add notifications to your application. Based on https://github.com/fkhadra/react-toastify.

## Features
- Show notifications
- Different default styling options
- Show loading bar based on the time that notification is shown
- Base time that notification is shown on an attribute
- Pause timer when hovered or site is not focussed
- Close notification by clicking it or dragging it
- Execute action on show and/or close of a notification
- Limit the number of notifications shown at the same time

## Configuration
You can put this widget anywhere on your page, the place where the notifications are shown is controlled within the widget and can be changed with the position attribute. The widget cannot be placed in a list, since it should only be rendered once on the page.
The widget needs a data source and a context object that can be refreshed when there are new notifications(perhaps in combination with a timer). The widget shows all notifications that are returned in the datasource. 
**IMPORTANT**: Do not forget to set the notification as shown in the on show action to not show it again.

### General
- Data Source: Retrieve notifications to show
- Notification Text: Attribute used for the notification text.
- Type: Can be used to set a type for the toast message, which will change the styling and add a icon. Type can be "info", "success", "warning", "error" or "default". Make sure you write it correctly.
- Theme: Can be used to set a theme for the toast message, which will change the styling. Theme can be "light", "dark" or "colored". Make sure you write it correctly.
- Class: Class to give to a specific notification.

### Actions
- On Show Action: Action to trigger the notification is shown, e.g. to change and commit the object such that the notification is not shown again.
- On Close Action: Action to trigger the notification is closed.
  
### Behavior
- Position: Where the notification will be shown on the screen.
- Transition: How the notification will pop up on the screen.
- Show Icon: Whether or not to show the default icons. Can be set per notification if needed.
- Hide progress bar: Whether or not to show the progress bar.
- Pause on hover: Whether or not to pause the timer when hovering over the notification.
- Pause on focus loss: Whether or not to pause the timer when the window loses focus.
- Right to left: Show content right to left.
- Newest on top: Show newest notification on top.
- Limit: Limit amount of notifications to be shown at the same time. 0 means no limit.
- Stacked Notifications: Whether or not to stack notifications. Note that if you use this together with auto closing after X ms, the timer starts when the notification is added to the stack.

### Close notification
- Close after: Notification will be closed after this time (in ms). Set to 0 to let the user close it himself. 
- Close button: Whether or not to show a close button.
- Close on click: Close notification when clicked.
- Draggable: Whether or not the notification can be dragged to close it.
- Draggable percent: The percentage of the notifications width that the notification can be dragged after which it will be closed.


