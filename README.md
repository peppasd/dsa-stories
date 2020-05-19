# DSA-Stories

A project I've made for my old school.
It allows you send a story from your school years that is going to be shared anonymously in a facebook group with all the graduates.

## Description
Post a story in the root page. View all the stories in `/admin`. (Authentication required) 

## Tools
Created using the Vue.js CLI and Firebase. Supports i18n.

## Firebase Setup
You need to create the file `src/firebaseConf.js` with your firebase configuration as seen [here](https://firebase.google.com/docs/web/setup#add-sdks-initialize). Export the Firestore target collection, a Firebase Authentication instance, the Firestore Timestamp class and an email used for authentication. I'll post a demo at some point. 
