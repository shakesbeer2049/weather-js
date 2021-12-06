const openKey = "fd76d320b3d28632106ac92515f264b4";

const forecast = () => {
  let input = document.querySelector("input");

  document.querySelector("#search-btn").addEventListener("click", handleSearch);

  function handleSearch() {
    let city = input.value;
    console.log("hii");
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(city);
        if (data.cod != 404 && data.name.toLowerCase() == city.toLowerCase()) {
          console.log(data);
          const degree = " &degC";
          const faren = " &degF";

          document.querySelector(".city-name").innerHTML = data.name;
          document.querySelector(
            ".temp"
          ).innerHTML = ` Temperature : ${Math.round(
            data.main.temp - 273
          )} ${degree} `;
          document.querySelector(".temp-max").innerHTML = ` Min : ${Math.round(
            data.main.temp_max - 273
          )} ${degree}`;
          document.querySelector(".temp-min").innerHTML = ` Max : ${Math.round(
            data.main.temp_min - 273
          )} ${degree}`;
          document.querySelector(
            ".humidity"
          ).innerHTML = ` Humidity:  ${data.main.humidity}`;
          document.querySelector(
            ".pressure"
          ).innerHTML = ` Pressure: ${data.main.pressure}`;

          let tmp = Math.round(data.main.temp - 273);
          if (tmp >= 25)
            document.querySelector(".data").style.backgroundImage =
              "url('media/summer.jpg')";
          else if (tmp > 15 && tmp < 25)
            document.querySelector(".data").style.backgroundImage =
              "url('media/autumn.jpg')";
          else if (tmp > 1 && tmp <= 15)
            document.querySelector(".data").style.backgroundImage =
              "url('media/winter.jpg')";
          else if (tmp <= 1)
            document.querySelector(".data").style.backgroundImage =
              "url('media/frost.jpg')";
          input.value = "";
        } else {
          document.querySelector(".weather-data").innerHTML = "";
          document.querySelector(".city-name").innerHTML =
            "<h1>No Matches Found</h1>";
        }
      });
  }
};

forecast();
