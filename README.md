# ACS Chemical Landmarks Timeline

This project is a redesign of the older Chemical Landmark timeline, and is intended to improve the user experience of the older site, which can be found [here](https://www.acs.org/content/acs/en/education/whatischemistry/landmarks/landmarks-timeline.html).

The [updated site](https://acs-chemistrytimeline.firebaseapp.com/) was built using [ReactJS](https://reactjs.org/), and is (temporarily) being hosted using [Google Firebase](https://firebase.google.com/docs/web/setup).

# Install

After pulling the repo, run `npm install`.
Afterwards, run `gulp` to compile Sass. With gulp running, open another terminal tab and run `npm start`. This will launch the project on your local machine.

# Changing the Data

To change the data, edit the `landmarks.json` file under `src > data`. If you'd like to add a new json file, you must have the following keys: year, url, image, heading, and description. The century key is optional. After making sure you have the correct keys, you must update `LandmarkGenerator.js` on line 8. After the from, change the string from "../data/landmarks.json" to `"../data/{NAME_OF_YOUR_FILE}.json"`.
