// http://api.openweathermap.org/data/2.5/forecast?q=Chicago&units=imperial&appid=6658bc2aa5781c0084a75b25ca5febd7


//onclick of search button
$("#search-button").click(function(event) {
    //prevents page from reloading
    event.preventDefault();
      //grab value of input field
      var input = $("#user-input").val(); 
      var searchURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + input + "&units=imperial&appid=6658bc2aa5781c0084a75b25ca5febd7"
      // fetch data
      // API request
      fetch(
        searchURL
          // Add the rating parameter
          // YOUR CODE HERE
          //
          // Remember to add your API key
      )
        .then(function(response) {
          return response.json();
        })
        .then(function(response) {
          
          for(var i = 0; i < response.list.length; i++) {
           console.log(response.list[i].dt_txt);   
          }
        });
    
})
 


//fecth data 