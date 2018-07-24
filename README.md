# ACS Chemical Landmarks Timeline

This project is a redesign of the older Chemical Landmark timeline, and is intended to improve the user experience of the older site, which can be found [here](https://www.acs.org/content/acs/en/education/whatischemistry/landmarks/landmarks-timeline.html).

The [updated site](https://acs-chemistrytimeline.firebaseapp.com/) was designed by a former intern, and developed by me, Lexus Drumgold, using [ReactJS](https://reactjs.org/). It's (temporarily) being hosted using [Google Firebase](https://firebase.google.com/docs/web/setup).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project to Firebase and get it up on AEM.

### Prerequisites

To work on this project, you'll need to have Node and Git installed. If you don't already, you can download Node [here](https://nodejs.org/en/download/) and Git [here](https://git-scm.com/downloads).

### Installing

Follow the steps below to get your development enviroment set up.

1.  Pull the repo. Open the terminal and and run the following:

    ```
    git clone https://I00105@developer.acs.org/stash/scm/~i00105/chemistrytimeline.git
    ```

2.  After cloning the repo, open the project. Run the following command:

    ```
    cd chemistrytimeline
    ```

3.  In the chemistrytimeline folder, type
    ```
    npm install
    ```
    in the terminal. This will install the necessary dependencies for the project. A list of those dependencies can be found in `package.json`.

## Development

### Styles

This project uses Sass. When you open the project, run `gulp` to compile Sass. The compile settings can be found in `gulpfile.js`.

### ReactJS

With gulp running, open a new terminal tab and run `npm start`. This will launch the project on your local machine.

## Changing the Data

To change the data, edit the `landmarks.json` file under `src/data`. If you'd like to add a new json file, **you must have the following keys: year, url, image, heading, and description.** The century key is optional.

After making sure you have the correct keys, you must update `LandmarkGenerator.js` on line 8. Change the line from

```
import landmarks from "../data/landmarks.json";
```

to

```
import landmarks from "../data/{NAME_OF_YOUR_FILE}.json";
```

To update the images, add the images to `public/assets/img/`. When referencing the images in the json file, the path should be `assets/img/{IMAGE_FILE_NAME}.{EXTENTSION}`.

## Deployment

### Firebase (Optional)

#### Setup

1.  If you'd like to deploy to Firebase, you'll need to first set up a Firebase project in the [Firebase console](https://console.firebase.google.com/).

2.  From the project overview page in the console, click **Add Firebasde to your web app**. You'll be presented with the following code snippet:

    ```
    <script>
      var config = {
        apiKey: "<API_KEY>",
        authDomain: "<PROJECT_ID>.firebaseapp.com",
        databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
        projectId: "<PROJECT_ID>",
        storageBucket: "<BUCKET>.appspot.com",
        messagingSenderId: "<SENDER_ID>",
      };
      firebase.initializeApp(config);
    </script>
    ```

3.  In your editor, open `firebase.js`. It can be found under `src/config`. Replace the variables with your api key, auth domain, and project id from the code snippet.

4.  Install Firebase tools with the following command:

    ```
    npm install -g firebase-tools@latest
    ```

5.  Login into your Google account by running `firebase login`.

#### Deploy to Firebase Hosting

To deploy the site, you have two options:

1.  Run the following in your project directory:

    ```
    firebase deploy --project projectId
    ```

    where projectId is the same project id from your code snippet.

2.  Set up the deploy command in your `package.json`.

    ```
    "scripts": {
      "firebase": "firebase deploy --project projectId",
    },
    ```

    When you're ready to deploy, type `npm run firebase` in the terminal.

### AEM

1.  When you're satisfied with your changes, type `npm run build` into the terminal. This will create a production-ready version of the project.

2.  Navigate to the [DAM](https://aemauttst.acs.org/damadmin#/content/dam/acsorg/education/whatischemistry/landmarks/timeline), and in another tab pull up the timeline in the [test environment](https://aemauttst.acs.org/content/acs/en/education/whatischemistry/landmarks/landmarks-timeline-jcl.html).

3.  After creating a production build, you'll have a build folder in the project root. Go back to the DAM, and upload the appropriate files to corresponding folders. Make note of the css and js file names.

4.  On the timeline page, open the embed code component and update the css and js file paths.
