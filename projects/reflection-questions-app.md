---
title: Reflection Questions Web App
description: "A repository of reflection questions and journaling prompts"
previewImage: "https://samantha-andrews.s3.us-east-2.amazonaws.com/projects/reflection-questions-app/reflection-questions-preview.jpg"
date: "2020"
layout: layouts/project.njk
---

Check it out at [ReflectionQuestions.app](https://reflectionquestions.app/)!

![reflection questions app](https://samantha-andrews.s3.us-east-2.amazonaws.com/projects/reflection-questions-app/reflection-questions-preview.jpg)

I experienced the power of thoughtful reflection during my freshman year of college when a professor required every student keep a journal. Each week I wrote my thoughts in response to an assigned set of reading questions. These prompts gave me the space to question existing beliefs and strengthen my critical thinking skills.

I decided to publish my growing list of reflection questions and prompts as a web app and share the power of journaling with the world. Included in this repository are over 400 prompts from Dr. V.B. Price at the University of New Mexico.

I built ReflectionQuestions.app over the course of March and April 2020, finally launching it on [Product Hunt](https://www.producthunt.com/posts/reflectionquestions-app) on May 4.

## My process

As a designer who codes, I started by making several wireframes for the user interface. I used Lauren Hom's [WTF Should I Letter](https://wtfshouldiletter.com/) site as inspiration and landed on a simple, single-page web app layout that was guaranteed to look good on any device.

Then, I started exploring technologies and libraries that would allow me to build the web app as quickly and efficiently as possible. Since I had already designed the UI as a single-page application, I knew I wanted to use [Create React App](https://create-react-app.dev/docs/getting-started/) on the front end. Create React App is the perfect framework for single-page web applications. Create React App also sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production.

I also needed somewhere to store my repository reflection questions. I chose [Firestore](https://firebase.google.com/docs/firestore) because I wanted to learn how to use a serverless, NoSQL document database.

Due to the simplicity of the feature set, which was essentially randomly displaying a reflection question or prompt when a user reloads the page or clicks the "Next prompt" button, I didn't want to spend time creating a full-featured API with associated routes. Instead, I read the [documentation](https://firebase.google.com/docs/web/setup) about how to connect a Firestore database to a JavaScript application, and determined that was the best way to get my data to display to users.

With wireframes in hand and technology-related decisions made, I was ready to start development.

I compiled all of the reflection questions and prompts in a spreadsheet. Then, I [converted](https://csvjson.com/) the spreadsheet into a JSON document and wrote a script to add all of the entries to my Firestore database.

Then, I fired up a new Create React App project and connected it to my Firestore project. Getting the data was straighforward and easy. At first, I was fetching all of my database records at once, and then shuffling through them on the front end. This proved to be expensive, and I quickly hit my Firestore usage limitations. So I switched to make a new fetch request every time a user clicked the "Next prompt" button.

Although the functionality is simple and straightforward, I wanted to make sure I caught any errors that users might run into. So I installed [Sentry](https://sentry.io/welcome/) for error monitoring.

The last step was to style the application. I used mostly FlexBox to style the layout before moving on to fonts and colors. I choose two fonts from Google Fonts, [Montserrat](https://fonts.google.com/specimen/Montserrat) and [IBM Plex Serif](https://fonts.google.com/specimen/IBM+Plex+Serif) and kept the color scheme simple, save for some nice pops of lime green. As a final touch, I added a [fade-in animation](https://www.npmjs.com/package/react-anime) to the prompts so that they would appear soft and smooth when a user shuffles through.

The end result is a free and simple repository of reflection questions and journaling prompts for anyone who wants to start a regular journaling practice!
