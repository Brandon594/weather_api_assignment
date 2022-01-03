$(function() {
    $.get( "https://api.openweathermap.org/data/2.5/onecall?lat=35.1983&lon=111.6513&exclude=minutely&appid=faa9bca470b2c2ce893c0c50b421afe4", function( data ) {
        var tempK = (data["current"]["temp"]);
        var tempF = Math.round(((tempK - 273.15) * 1.8 + 32)*10)/10;
        $( "#tempF" ).text(tempF);
        var tempK = (data["current"]["temp"]);
        var tempC = Math.round((tempK - 273.15)*10)/10;
        $( "#tempC" ).text(tempC);
        //
        $( "#humidity" ).text( data["current"]["humidity"]);
        //
        $( "#windSpeed" ).text( data["current"]["wind_speed"]);
        //
        var windDegree = (data["current"]["wind_deg"]);
        var compass = "";
        if( windDegree > 315 || windDegree < 46) {compass = "North"};
        if( windDegree > 45 && windDegree < 136) {compass = "East"};
        if( windDegree > 135 && windDegree < 226) {compass = "South"}; 
        if( windDegree > 225 && windDegree < 315) {compass = "West"};
        $( "#windDir" ).text(compass);
      });
});


//35.1983° N, 111.6513° W

//0K − 273.15
//( − 273.15) × 9/5 + 32 

// "wind_speed": 6,
//"wind_deg": 300,