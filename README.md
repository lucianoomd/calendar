## Instructions to run the project in android
* run yarn install / npx npm install
* yarn android / npm android

## Instructions to run the project in iOS
* run yarn install / npx npm install
* run cd ios && pod install
* yarn ios / npm ios

## PS: I was not able to run it on iOS, it should require some configuration.

## If i had more time would implement:
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


### Features & Requirements:

* You need to use one of the following state management libraries: Relay, Apollo, MobX or Redux - OK
* Ability to add a new “reminder” (max 30 chars) for a user entered day and time. - OK
* Display reminders on the calendar view in the correct time order. - OK
* Allow the user to select a color when creating a reminder and display it appropriately. - OK
* Properly handle overflow when multiple reminders appear on the same date. - OK
* Ability to edit reminders – including changing text, day and time & color. - Park OK
* Ability to delete reminders. - OK
* Expand the calendar to support more than the current month. - OK

### Notes:

* The data should be retained across different page views.
* Here at Codelitt we make products for humans, this means that we will evaluate the UX of the exercise. We provide an image in this repo to be used as a reference, but you can feel free to be creative.

## Evaluation

| Functionality     |                                                              | Possible Points |
|-------------------|--------------------------------------------------------------|-----------------|
|                   | Matches the proposed requirements                            | 25              |
|                   | Console do not display any error/warning                     | 10              |
|                   | User Experience                                              | 15              |
| **Code Quality**  |                                                              | --              |
|                   | Code format, readability, maintainability, etc.              | 10              |
|                   | Folders and packages structure                               | 10              |
|                   | Separation of components and logic by clear responsibilities | 20              |
| **Testing**       |                                                              | --              |
|                   | Has tests                                                    | 5               |
| **Documentation** |                                                              | --              |
|                   | Has a README.md with instructions                            | 5               |
| **Total**         |                                                              | 100             |

### Bonus Points:
1. If provide thoughts on what you could improve on your code given more time and incentives

## F.A.Q.

### Is it necessary to connect to a backend?
No, this is a simply frontend exercise.

### How do you evaluate the exercise?
For every exercise we have two senior frontend engineers from our team reviewing the code and the functionality and giving a score for each line item as shown in the previous table.

### How can I deliver the exercise?
To deliver the exercise, you should clone this repository and work on a new branch. When you'll consider it completed, just push the branch and open a Merge Request.

### Will I have access to the evaluation?
By default we only send the result, however you can feel free to request the full evaluation and we will share it with you as well as the final score.
