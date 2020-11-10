fetch('http://api.openweathermap.org/data/2.5/weather?lat=13.06&lon=80.23&appid=b8ec07a6968abafc284ed815dcbbf086')
.then(res => res.json())
.then(data => console.log(data));

