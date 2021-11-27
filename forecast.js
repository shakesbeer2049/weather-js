const accukey = 'key here'
const openKey = 'key here'

// const getCity = async(city) => {
//     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
//     //const base = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openKey}`
//     const query = `?apikey=${accukey}&q=${city}`;
//     const response = await fetch(base + query);
    
//     const data = await response.json();
//     return data[0];
//     };
// getCity('london').then(async(data) => {
//     const forecast = await fetch(`https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/currentconditions/v1/${data.Key}`)
//     const fore = await forecast.json()
//     console.log(data.Key)
//     console.log(data.EnglishName);
//     console.log(fore);
//     document.querySelector('.city-name').innerHTML = data.EnglishName
// })
//     .catch(err=> console.log(err))





const fakeAPI = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) =>{
      console.log(data)
    //   data.forEach(ele => console.log(ele.title))
      const cityHandler = (e) =>{
        console.log(e.target.value);
      if(e.target.value !=""){
            data.forEach(ele => {
                console.log(ele.title.length);
                if(ele.title.toLowerCase().includes(e.target.value.toLowerCase())) console.log(ele.title)
            })
        }
        else console.log("no input");
        const city = e.target.value;
    }
    document.querySelector('input').addEventListener('input', cityHandler)
    });
}
fakeAPI()


    const forecast = async() => {
        const locationURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openKey}&units=metric`
        const response = await fetch(locationURL)
        const data = await response.json()
        console.log(data);
        console.log(data.name);
        console.log(data.main);

        //DOM
        const degree = " &degC"
        const faren = " &degF"
        document.querySelector(".city-name").innerHTML =  data.name;
        document.querySelector(".temp").innerHTML =      ` Temperature : ${data.main.temp} ${degree} `
        document.querySelector(".feels-temp").innerHTML= ` Feels like : ${data.main.feels_like} ${degree}`
        document.querySelector(".temp-max").innerHTML =  ` Min : ${data.main.temp_max} ${degree}`
        document.querySelector(".temp-min").innerHTML =  ` Max : ${data.main.temp_min} ${degree}`
        document.querySelector(".humidity").innerHTML =  ` Humidity:  ${data.main.humidity}`
        document.querySelector(".pressure").innerHTML =  ` Pressure: ${data.main.pressure}`
        

    }
