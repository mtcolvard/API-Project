# Weather Friends

## Overview

This is a pair code project I created as part of my Software Engineer Immersive course in General Assembly. It has been done in a time frame of 48 hours.
Weather Friends is an app that allowed you to find the weather according to the name of a city.
At the home page, you can find a few cities, but you can locate big cities around the world and find out what is the weather where ever your friends are.
Feel free to try the [app](https://mathsteacher7.github.io/API-Project/#/)

![The home page](https://user-images.githubusercontent.com/51882532/63957056-9c183400-ca7f-11e9-98d2-1ce62e2d5577.png)

## Brief
* Build a website using a public API.
* Use React to build a frontend
* Use separate files for different components
* Deploy your website online, using Github Pages, where the rest of the world can access it.

## Technologies Used

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
The first assignment was to find a free public API that we could work with. We looked at the NASA API for the Mars rover and started to understand the limits of APIs. From that point, we tried to find an API that has enough clear data that we could use.  We reviewed some potential APIs, and because of our international background (American and Israeli) we decided to build an app that our friends around the world and we could use, so we chose the Dark Sky API, that gave us the option to see the weather all around the world.

### How to locate cities
We understood quite in the beginning that we need to solve an issue of locating a city. The Dark Sky API asked the information about the cities with longitude and latitude, which is not the most user-friendly way to locate a city. For that reason, we decided to use another API that locates the city and be able to produce the coordinates.

## Challenges

### Finding the right API
As we mentioned before, this part of the process was a challenge. We did not have too much experience working with APIs, and we did not know how to build one. We looked at more than a few APIs before we chose the Dark Sky one. We understood how hard it is to find a free API that could give us a date that we could use for our needs.

### Combining two APIs
The biggest challenge was using API and learning how to pull some data from one of them and use it in the other one. For that, we needed to check exactly how the data was sent to us from one API, how the data is expected to be received in the other API and what manipulation we need to do between them. 

![Merging API](https://user-images.githubusercontent.com/51882532/65705761-f6a5af80-e080-11e9-9e5e-6ed4ec4e170a.png)


### Pair coding
That was our first-time pair coding. We used only one computer to write the code, but the research has been done separately. It was a great experience to learn how to cooporate with another person that comes with his coding style and to combined knowledge.

## Wins and blocks
The biggest win was emargin two APIs together for the first time, pulling the data from one API and with it pull more data from the other API.
Another great win was manipulating the data we got from the API to be readble by a user - for example, when you ask the API for the specific city, you will get it with the continent for example:

![Raw data from the API](https://user-images.githubusercontent.com/51882532/65886706-b56d1280-e394-11e9-8eff-bf9d86a8123f.png)

In the app the name is clean, the icon is not a word but an icon, the tempature written in Celsius and the rest of the data is showed to the user in a readable way.

![Data showed to the user](https://user-images.githubusercontent.com/51882532/65885757-1562b980-e393-11e9-957e-e9e00b478e86.png)

The blockes were mainly in the ability to find some cities. For example, if you will look for Washington, you will get the weather in Washington, DC, but not any other city named Washington. That is something we could address in the future, building a better way to found a city.





