// http://api.openweathermap.org/data/2.5/forecast?q=Chicago&units=imperial&appid=6658bc2aa5781c0084a75b25ca5febd7


//onclick of search button
$("#search-button").click(function(event) {
    //prevents page from reloading
    event.preventDefault();
      //grab value of input field
      var inputCity = $("#user-input").val(); 
      var searchURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + inputCity + "&units=imperial&appid=6658bc2aa5781c0084a75b25ca5febd7"
      // fetch data
      // API request
      fetch(searchURL)
        .then(function(response) {
          return response.json();
        })
        .then(function(response) {
          
            for(var i = 0; i < response.list.length; i++) {
            console.log(response.list[i].dt_txt);  
            // Day 1
            var dateText1 =  JSON.stringify(response.list[3].dt_txt);
            $(".date1").text(dateText1)
            var tempText1 =  JSON.stringify(response.list[3].main.temp);
            $(".temp1").text("Temp: " + tempText1 + " ℉");
            var windText1 =  JSON.stringify(response.list[3].wind);
            $(".wind1").text("Wind: " + windText1);
            var humidText1 =  JSON.stringify(response.list[3].main.humidity);
            $(".humidity1").text("Humid: " + humidText1 + " %");
            // Day 2
            var dateText2 =  JSON.stringify(response.list[11].dt_txt);
            $(".date2").text(dateText2);
            var tempText2 =  JSON.stringify(response.list[11].main.temp);
            $(".temp2").text("Temp: " + tempText2 + " ℉");
            var windText2 =  JSON.stringify(response.list[11].wind);
            $(".wind2").text("Wind: " + windText2);
            var humidText2 =  JSON.stringify(response.list[11].main.humidity);
            $(".humidity2").text("Humid: " + humidText2 + " %");
            // Day 3
            var dateText3 =  JSON.stringify(response.list[19].dt_txt);
            $(".date3").text(dateText3);
            var tempText3 =  JSON.stringify(response.list[19].main.temp);
            $(".temp3").text("Temp: " + tempText3 + " ℉");
            var windText3 =  JSON.stringify(response.list[19].wind);
            $(".wind3").text("Wind: " + windText3);
            var humidText3 =  JSON.stringify(response.list[19].main.humidity);
            $(".humidity3").text("Humid: " + humidText3 + " %");
            // Day 4
            var dateText4 =  JSON.stringify(response.list[27].dt_txt);
            $(".date4").text(dateText4);
            var tempText4 =  JSON.stringify(response.list[27].main.temp);
            $(".temp4").text("Temp: " + tempText4 + " ℉");
            var windText4 =  JSON.stringify(response.list[27].wind);
            $(".wind4").text("Wind: " + windText4);
            var humidText4 =  JSON.stringify(response.list[27].main.humidity);
            $(".humidity4").text("Humid: " + humidText4 + " %");
            // Day 5
            var dateText5 =  JSON.stringify(response.list[35].dt_txt);
            $(".date5").text(dateText5);
            var tempText5 =  JSON.stringify(response.list[35].main.temp);
            $(".temp5").text("Temp: " + tempText5 + " ℉");
            var windText5 =  JSON.stringify(response.list[35].wind);
            $(".wind5").text("Wind: " + windText5);
            var humidText5 =  JSON.stringify(response.list[35].main.humidity);
            $(".humidity5").text("Humid: " + humidText5 + " %");


          }
        });
    
})

 


//fecth data 






