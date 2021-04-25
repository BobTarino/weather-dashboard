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
            console.log(response.list[4]);  
            // Day 1
            var tempText1 =  JSON.stringify(response.list[4].main.temp);
            $(".temp1").text("Temp: " + tempText1 + " ℉");
            var windText1 =  JSON.stringify(response.list[4].wind);
            $(".wind1").text("Wind: " + windText1);
            var humidText1 =  JSON.stringify(response.list[4].main.humidity);
            $(".humidity1").text("Humid: " + humidText1 + " %");


          }
        });
    
})

 


//fecth data 






