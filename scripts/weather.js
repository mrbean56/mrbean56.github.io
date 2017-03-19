reallySimpleWeather.weather({
    wunderkey: '', // leave blank for Yahoo
    location: 'Laval, CA', //your location 
    woeid: '', // "Where on Earth ID"
    unit: 'c', // 'c' also works
    success: function(weather) {
      html = '<h2>'+weather.temp+weather.units.temp+' ';
      html += weather.currently+'</h2>';
    document.getElementById('weather').innerHTML = html;
    },
    error: function(error) {
    document.getElementById('weather').innerHTML = '<p>'+error+'</p>';
    }
});