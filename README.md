## Instructions to run the project in android
* run yarn install / npx npm install
* yarn android / npm android

## Instructions to run the project in iOS
* run yarn install / npx npm install
* run cd ios && pod install
* yarn ios / npm ios

## Future things to do:
* Make the app run in iOS;
* Add more unnecessary files/folders to .gitignore;
* Time and Hour selection to create/edit event;
* Notifications(local reminders);
* Save events locally;
* Change some visuals to have a better design;
* Study and implement integration with Firebase.

==================================================================================================================
## Instructions

The goal of this exercise is to create a demo calendar application using React Native. Please don't use a `calendar` library, we would like to see your own calendar logic.


### The Task

You should start by rendering a single month view of a calendar for the current month – along with the lines of the `calendar` image in this project.

### Features:

* You need to use one of the following state management libraries: Relay, Apollo, MobX or Redux
* Ability to add a new “reminder” (max 30 chars) for a user entered day and time.
* Display reminders on the calendar view in the correct time order.
* Allow the user to select a color when creating a reminder and display it appropriately.
* Properly handle overflow when multiple reminders appear on the same date.
* Ability to edit reminders – including changing text, day and time & color.
* Ability to delete reminders.
* Expand the calendar to support more than the current month.
