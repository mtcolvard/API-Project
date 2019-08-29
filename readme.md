# Weather Friends

## Overview

This is a pair project I created as part of my Software Engineer Immersive course in General Assembly. It has been done in a time frame of 48 hours.
Weather Friends is a webpage that allowed you to find the weather according to the name of the city.
At the home page you can find a few cities, but you can locate big cities around the world and find out what is the weather where ever your friends are.
Feel free to try the [app](https://mathsteacher7.github.io/API-Project/#/)

![The home page](https://user-images.githubusercontent.com/51882532/63957056-9c183400-ca7f-11e9-98d2-1ce62e2d5577.png)

## Brief
* Build a website using a public API.
* Use React frame work to build a frontend
* Use separate files for different components
* Deploy your website online, using Github Pages, where the rest of the world can access it.

##Technologies Used

* JavaScript (ES6)
* React and React-Dom
* HTML5
* SCSS
* CSS3
* Git and Github
* axios
* Webpacks (cli, dev-serverbabel, animate.css)


## Approach taken
### Finding an API
The first assignment was to find a free public API that we could work with. We looked at the NASA API for the Mars rover and started to understand the limits of APIs. From that point we tried to find an API that will have enough clear data that we could work with. At that point we review some potential APIs, and because of our international background (American and Israeli) we decided to build an app that we and our friends around the world could use so we chose the Dark Sky API, that gave us the option to see the weather all around the world.

### How to locate cities
We understood quite in the beginning that we need to solve an issue of locating a city. The Dark Sky API asked the information about the cities with longitude and latitude, which is not the most user friendly way to locate a city. For that reason we decided to use another API that will locate the city and will be able to produce the coordinates. More about it with the challenges section.
