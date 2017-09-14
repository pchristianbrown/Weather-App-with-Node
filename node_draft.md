A simple Weather App with Node.js that makes API calls to the Command Line.

This app makes a call to the OpenWeatherMap.org API and displays the result to the console.
To make our API call, I’ll be using a popular npm module called request. We just need to pass in our target url, and request returns a callback function.
The request target url http://api.openweathermap.org/data/2.5/weather has two required query parameters. In this instance we need to include the city we’re searching for, and an API Key.

We can now run our code in the console by typing:
node index.js

The readout will be for the default city.
It's 79.81 degrees in Washington, D. C.!

You can check out the temperature for other cities by typing:
node index.js -c houston

The new readout gives the temperature for Houston
It's 88.25 degrees in Houston!
