# React_photos_NASA_API

App to show photos gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars.

Each rover has its own set of photos stored in the database, which can be queried separately. There are several possible queries that can be made against the API. 

Photos are organized by the sol (Martian rotation or day) on which they were taken, counting up from the rover's landing date. 

A photo taken on Curiosity's 1000th Martian sol exploring Mars, for example, will have a sol attribute of 1000. If instead you prefer to search by the Earth date on which a photo was taken, you can do that too.

Along with querying by date, results can also be filtered by the camera with which it was taken and responses will be limited to 25 photos per call. Queries that should return more than 25 photos will be split onto several pages, which can be accessed by adding a 'page' param to the query.

Each camera has a unique function and perspective.

https://igorkob.github.io/React_photos_NASA_API

## Table of contents
* [Instructions](#Instructions)
* [Description](#Description)
* [Technologies](#Technologies)


## Instructions

First clone this repository.
```bash
$ git clone https://github.com/IgorKob/React_photos_NASA_API.git
```

Install dependencies. Make sure you already have [`nodejs`](https://nodejs.org/en/) & [`npm`](https://www.npmjs.com/) installed in your system.
```bash
$ npm install # or yarn
```

Run it
```bash
$ npm start # or yarn start
```

## Description
This is a simple react app using public [`NASA Open APIs`](https://api.nasa.gov).

## Technologies
Project uses:
* React
* React-redux
* Redux-saga
* Material-ui
* Styled-components
* Axios
