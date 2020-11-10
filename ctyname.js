fetch('http://api.openweathermap.org/data/2.5/weather?q=chennai&appid=b8ec07a6968abafc284ed815dcbbf086')
.then(res => res.json())
.then(data => console.log(data));

//I tried this task with a different approach above


/*var request = new XMLHttpRequest();
request.open('Get','http://api.openweathermap.org/data/2.5/weather?q=chennai&appid=b8ec07a6968abafc284ed815dcbbf086', true);
request.send();
request.onload=function()
{
    var data = JSON.parse(this.response);
    console.log(data);
}*/