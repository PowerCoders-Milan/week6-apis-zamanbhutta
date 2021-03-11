fetch('https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=9cffa7119ee548d2be33d0747940ed14&units=metric')
    .then(response => response.json())
    .then( data => {
       console.log(data)
       var p = document.createElement('p');
       p.innerHTML = 'Name: ' + data.name +' , tempurature: ' + data.main.temp + ', description: ' + data.weather[0].description
       document.querySelector('body').appendChild(p)
    });


fetch('https://api.openweathermap.org/data/2.5/weather?q=sialkot&appid=9cffa7119ee548d2be33d0747940ed14&units=metric')
   .then(response => response.json())
   .then( data => {
    console.log(data)
    var p = document.createElement('p');
    p.innerHTML = 'Name: ' + data.name +' , tempurature: ' + data.main.temp + ', description: ' + data.weather[0].description
    document.querySelector('body').appendChild(p)
 });