fetch('http://api.openweathermap.org/data/2.5/weather?id=1264527&appid=b8ec07a6968abafc284ed815dcbbf086')
.then(res => res.json())
.then(data => console.log(data));