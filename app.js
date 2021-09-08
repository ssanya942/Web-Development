const express=require("express");
const https=require("https");
const bodyParser=require("body-parser");

const app=express();
app.get("/", function(req,res){
  res.sendFile(__dirname+"/index.html");

});
  app.use(bodyParser.urlencoded({extended:true}));
app.post("/",function(req,res){

  console.log(req.body.cityName)
  const query=req.body.cityName
    const url="https://api.openweathermap.org/data/2.5/weather?q="+ query+"&appid=9136d37d14c88a059676e5876188db96&units=metric";
    https.get(url,function(response){
      console.log(response.statusCode);
      response.on("data", function(data){
        const weatherData=JSON.parse(data)
        const temp=weatherData.main.temp
        console.log(temp);
        const weatherDescription=weatherData.weather[0].description
  console.log(weatherDescription);
        const icon=weatherData.weather[0].icon
        const imageURL= "http://openweathermap.org/img/wn/" + icon+ "@2x.png"



        res.set("Content-type", "text/html");
        res.write("<h1>The temperature in "+ query+  " is " + temp+ " degree C </h1>" )
        res.write(" The weather is "+weatherDescription);

        res.write("<img src="+imageURL+">")
        res.send();


   });

  });
;
});




app.listen(3000,function(){
  console.log("Server is running on port 3000");
});
