//fetching the data from the API server by using my unique API key and the city name assigned(sanjose)

fetch("https://api.openweathermap.org/data/2.5/weather?q=San%20Jose&units=metric&appid=8b99f71711f9f2a8e5fe03f4ce4ce3b7")
    .then(response => response.json())

    // checking wheather the data is fetched by displaying the data in the console just to make sure the API call is successfull.

    .then(data => {
        console.log(data.main.temp)
        console.log(data.main.pressure)
        console.log(data.main.humidity)
        console.log(data.name)
        console.log(data.weather[0].description)
        console.log(data.wind.speed)
        console.log(data.wind.deg)


        // making a variable result to assign the value in it to display the data in the main page.

        var result = `
        <h1> ${data.name},${data.sys.country} </h1>
        <h2>Main Weather Condition = ${data.weather[0].description}</h2>
        <h3>Temperature = ${data.main.temp} °C</h3>
        <h3>Pressure = ${data.main.pressure} hpa</h3>
        <h3>Humidity = ${data.main.humidity}%</h3>
        <h3>Wind Speed  = ${data.wind.speed} m/s ,
        Direction = ${data.wind.deg}°  </h3>
        `


        //selecting the ID "card" created in the html page and assigning the data which is in result to the id "card".

        document.getElementById("card").innerHTML = result;
    })
