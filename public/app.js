if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(async position => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        console.log('geo available', lat, lon);
        document.getElementById('long').textContent = "long" +lon;
        document.getElementById('lat').textContent = "lat" + lat;
        const api_url = `/weather/${lat},${lon}`;
        const response = await fetch(api_url);
        const json = await response.json();
        document.getElementById('city').textContent = json.properties.relativeLocation.properties.city;
        console.log(json.properties.relativeLocation.properties.city, 'json');
    })
} else {
    console.log('not')
}