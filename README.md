# Web Development Project 2 - WeatherDash

Submitted by: **Kevin Tusiime**

This web app, WeatherDash, is a dynamic and interactive dashboard application designed to display weather information based on user search queries. It leverages the OpenWeatherMap API to fetch real-time weather data for different locations and renders this information on weather cards. The app includes a search functionality that allows users to filter locations based on the prefix entered in the search bar.

Time spent: **14** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The title of the app and a short description are displayed on a fixed header**
- [x] **A single weather card at a time is displayed, showing key weather information for a location**
- [x] **A list of weather cards is dynamically created based on user search or initial app load**
- [x] **Clicking on the weather card toggles display of detailed weather information**
- [x] **Searching in the navigation bar filters the displayed weather card list based on location name**

The following **optional** features are implemented:

- [x] Weather cards display icons depicting the current weather condition
- [x] Weather cards have different visual styles (background colors) based on the temperature
  - [x] *Cool temperatures (< 50°F) are blue, moderate temperatures are green, and hot temperatures (> 85°F) are red.*

The following **additional** features are implemented:

* [x] Integration with the browser's local storage to remember the user's last searched location
* [x] A "favorites" feature allows users to save preferred locations for quick access
* [x] Responsive design for optimal viewing on mobile devices

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with [Kap](https://getkap.co/) for macOS

## Notes

Building this application presented several challenges, particularly in handling asynchronous API calls and ensuring the UI updates promptly and correctly based on the fetched data. Implementing the search functionality to filter through the weather data dynamically also required careful state management. Another significant challenge was designing a responsive UI that provides an excellent user experience across different devices and screen sizes.

## License

    Copyright [2023] [Kevin Tusiime]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
