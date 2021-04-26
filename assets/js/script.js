// http://api.openweathermap.org/data/2.5/forecast?q=Chicago&units=imperial&appid=6658bc2aa5781c0084a75b25ca5febd7


//onclick of search button
$("#search-button").click(function(event) {
    //prevents page from reloading
    event.preventDefault();
      //grab value of input field
      var inputCity = $("#user-input").val(); 
      var searchURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + inputCity + "&units=imperial&appid=6658bc2aa5781c0084a75b25ca5febd7"
      var currentURL = "http://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&units=imperial&appid=6658bc2aa5781c0084a75b25ca5febd7"

      // fetch data
      // API request for current weather
      fetch(currentURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);
            var curTempText =  JSON.stringify(response.main.temp);
            $(".current-temp").text("Temp: " + curTempText + " ℉");
            var curWindText =  JSON.stringify(response.wind.speed);
            $(".current-wind").text("Wind: " + curWindText + " MPH");
            var curHumidText =  JSON.stringify(response.main.humidity);
            $(".current-humidity").text("Humid: " + curHumidText + " %"); 
            var lat = response.coord.lat;
            var lon = response.coord.lon;
            // UV Index API Call
            let uvURL = `https://api.openweathermap.org/data/2.5/uvi?appid=8a9c8778f33ed43d7abdebc8755bbe26&lat=${lat}&lon=${lon}`;
                
            $.ajax({
                url: uvURL,
                method: "GET"
            })
                .then(function(responseUV){
                    console.log(responseUV);
                    $(".current-UV").text("UV Index: " + responseUV.value);

                    //Color changes depending on UV index 
                    if (responseUV.value < 3){
                        $("#day-0").attr("class", "uvIndex btn btn-success col-9 m-3");
                    }
                    if (responseUV.value > 3 & responseUV.value < 6){
                        $("#day-0").attr("class", "uvIndex btn btn-warning col-9 m-3");
                    }
                    if (responseUV.value > 6){
                        $("#day-0").attr("class", "uvIndex btn btn-danger col-9 m-3");
                    }
                });
        
        });

      // API request for 5 day forecast
      fetch(searchURL)
        .then(function(response) {
          return response.json();
        })
        .then(function(response) {
          
            for(var i = 0; i < response.list.length; i++) {
            // console.log(response.list[i].dt_txt);  
            // Day 1
            var dateText1 =  JSON.stringify(response.list[3].dt_txt);
            $(".date1").text(dateText1)
            var tempText1 =  JSON.stringify(response.list[3].main.temp);
            $(".temp1").text("Temp: " + tempText1 + " ℉");
            var windText1 =  JSON.stringify(response.list[3].wind.speed);
            $(".wind1").text("Wind: " + windText1 + " MPH");
            var humidText1 =  JSON.stringify(response.list[3].main.humidity);
            $(".humidity1").text("Humid: " + humidText1 + " %");
            // Day 2
            var dateText2 =  JSON.stringify(response.list[11].dt_txt);
            $(".date2").text(dateText2);
            var tempText2 =  JSON.stringify(response.list[11].main.temp);
            $(".temp2").text("Temp: " + tempText2 + " ℉");
            var windText2 =  JSON.stringify(response.list[11].wind.speed);
            $(".wind2").text("Wind: " + windText2 + " MPH");
            var humidText2 =  JSON.stringify(response.list[11].main.humidity);
            $(".humidity2").text("Humid: " + humidText2 + " %");
            // Day 3
            var dateText3 =  JSON.stringify(response.list[19].dt_txt);
            $(".date3").text(dateText3);
            var tempText3 =  JSON.stringify(response.list[19].main.temp);
            $(".temp3").text("Temp: " + tempText3 + " ℉");
            var windText3 =  JSON.stringify(response.list[19].wind.speed);
            $(".wind3").text("Wind: " + windText3 + " MPH");
            var humidText3 =  JSON.stringify(response.list[19].main.humidity);
            $(".humidity3").text("Humid: " + humidText3 + " %");
            // Day 4
            var dateText4 =  JSON.stringify(response.list[27].dt_txt);
            $(".date4").text(dateText4);
            var tempText4 =  JSON.stringify(response.list[27].main.temp);
            $(".temp4").text("Temp: " + tempText4 + " ℉");
            var windText4 =  JSON.stringify(response.list[27].wind.speed);
            $(".wind4").text("Wind: " + windText4 + + " MPH");
            var humidText4 =  JSON.stringify(response.list[27].main.humidity);
            $(".humidity4").text("Humid: " + humidText4 + " %");
            // Day 5
            var dateText5 =  JSON.stringify(response.list[35].dt_txt);
            $(".date5").text(dateText5);
            var tempText5 =  JSON.stringify(response.list[35].main.temp);
            $(".temp5").text("Temp: " + tempText5 + " ℉");
            var windText5 =  JSON.stringify(response.list[35].wind.speed);
            $(".wind5").text("Wind: " + windText5 + " MPH");
            var humidText5 =  JSON.stringify(response.list[35].main.humidity);
            $(".humidity5").text("Humid: " + humidText5 + " %");
          }
        });
    
})
// save task to localStorage
$("#search-button").on("click", function () {
    var text = $("#user-input").val(); 
    localStorage.setItem(text);
});
$("#user-input").val(localStorage.getItem("#user-input"));

           





