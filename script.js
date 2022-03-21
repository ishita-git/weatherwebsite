let weather = {
    "apiKey": "1292ecdf7e9058ac5b76f091421770e8",
    fetchWeather : function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
        ).then((response)=>
            response.json())
            .then((data)=> this.displayWeather(data));
    },
    displayWeather : function(data){
      const {name} = data;
      const {icon , description} = data.weather[0];
      const {temp , humidity} = data.main;
      const {speed} = data.wind;
      console.log(name,icon,description,temp,humidity,speed);

      //display info on page
      document.querySelector(".city").innerText = "Weather in "+name ;
      document.querySelector(".icon").src ="https://openweathermap.org/img/wn/"+icon+".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity") = "Humidity : "+humidity +"%";
      document.querySelector(".wind") = "Wind Speed : "+speed +"km/hr";
 
      document.querySelector(".weather").classList.remove("loading");
    },
    // to get entered name in search bar
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
      },
};

document
.querySelector(".search button")
.addEventListener("click",function(){
       weather.search();
});

// functionality of enter key
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key == "Enter")
    {
        weather.search();
    }

});

weather.fetchWeather("Denver");



