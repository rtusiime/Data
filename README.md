# Web Development Project 5 - WeatherDashboard

Submitted by: **Kevin Tusiime**

This web app, WeatherDash, is a dynamic and interactive dashboard application designed to display weather information based on user search queries. It leverages the OpenWeatherMap API to fetch real-time weather data for different locations and renders this information on weather cards. The app includes a search functionality that allows users to filter locations based on the prefix entered in the search bar.

Time spent: **14** hours spent in total

## Required Features for Part 1

The following **required** functionality is completed:

- [x] **The title of the app and a short description are displayed on a fixed header**
- [x] **A single weather card at a time is displayed, showing key weather information for a location**
- [x] **A list of weather cards is dynamically created based on user search or initial app load**
- [x] **Clicking on the weather card toggles display of detailed weather information**
- [x] **Searching in the navigation bar filters the displayed weather card list based on location name**

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='dashboard-walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with [Kap](https://getkap.co/) for macOS

## Notes

Building this application presented several challenges, particularly in handling asynchronous API calls and ensuring the UI updates promptly and correctly based on the fetched data. Implementing the search functionality to filter through the weather data dynamically also required careful state management. Another significant challenge was designing a responsive UI that provides an excellent user experience across different devices and screen sizes.

---

# Project 6: Data Dashboard Part 2

## Enhancements in Part 2

Building upon the foundational features developed in Project 5, Part 2 of the WeatherDashboard introduces additional functionalities aimed at enriching the user's interaction with the weather data and providing more in-depth analyses.

## New Required Features

- [x] **The site displays a list of data fetched using an API call**
- [x] **The useEffect() React hook and async/await syntax are used in the code**
- [x] **The app dashboard includes at least three summary statistics about the data**
- [x] **A search bar allows the user to search for an item in the fetched data**
- [x] **An additional filter allows the user to restrict displayed items by specified categories**
- [x] **Clicking on an item in the list view displays more details about it**
- [x] **Each detail view of an item has a direct, unique link to that item’s page**
- [x] **The app includes at least two unique charts developed using the fetched data**

## Stretch Features

- [x] **The site’s customized dashboard contains more content that explains what is interesting about the data**

## Additional Notes

The extension into Part 2 brought new challenges, especially in integrating more complex filters and implementing charts that effectively visualize the weather data. Enhancing the dashboard with summary statistics and unique charts required a deep dive into data processing and visualization libraries. The focus was also on maintaining a seamless user experience while adding these new layers of functionality.

## License

```license
Copyright [2024] [Kevin Tusiime]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
