# Weather App

## Description
The Weather App is a simple web application that allows users to fetch and display real-time weather data for any location. It uses the WeatherAPI to retrieve weather information such as temperature, weather conditions, wind speed, and more. The app dynamically updates the DOM to display the weather data in a user-friendly format.

## Features
- Fetch real-time weather data for any location.
- Display weather details such as temperature, condition, wind speed, and more.
- Dynamically update the DOM with weather information.
- Error handling for invalid locations or API issues.
- Responsive design for better user experience.

## Technologies Used
- **HTML**: For structuring the web page.
- **CSS**: For styling the application.
- **JavaScript**: For fetching data from the API and dynamically updating the DOM.
- **WeatherAPI**: For retrieving real-time weather data.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/PiyushBhatt123/weather-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```
3. Open the `index.html` file in your browser to run the app.

## Usage
1. Enter the name of a location in the input field.
2. Click the "Get Weather" button to fetch the weather data.
3. View the weather details displayed on the page.

## Project Structure
```
weather-app/
├── index.html       # Main HTML file
├── style.css        # CSS file for styling
├── app.js           # JavaScript file for functionality
└── README.md        # Project documentation
```

## Future Enhancements
- Add search history to save previously searched locations.
- Implement current location weather using the Geolocation API.
- Display hourly and weekly weather forecasts.
- Add unit conversion between Celsius and Fahrenheit.
- Integrate a weather map for real-time weather visualization.

## API Key
This project uses the WeatherAPI. To use the app, you need to generate your own API key from [WeatherAPI](https://www.weatherapi.com/) and replace the placeholder key in the `app.js` file:
```javascript
const apiKey = "YOUR_API_KEY";
```

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author
- **Piyush Bhatt**
- GitHub: [PiyushBhatt123](https://github.com/PiyushBhatt123)
