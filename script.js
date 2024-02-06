var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload=function(){
    var res=JSON.parse(request.response);
    console.log(res);
//1.Get all the countries from Asia continent /region using Filter function


    var res_asia=res.filter((ele)=>ele.region=="Asia");
    var countries=res_asia.map((ele)=>ele.name.common);
    console.log(countries);

//2.Get all the countries with a population of less than 2 lakhs using Filter function


    var result_population=res.filter((ele)=>ele.population<200000);
    console.log(result_population);
    var capital_name=result_population.map((ele)=>`${ele.name.common} : ${ele.population}`)
    console.log(capital_name);

//3.Print the following details name, capital, flag, using forEach function

    
    res.forEach((ele)=>console.log(`${ele.name.common} : ${ele.capital} : ${ele.flag}`));

//4.Print the total population of countries using reduce function


    var total_pop=res.reduce((acc,cv)=>acc+cv.population,0)
    console.log(total_pop);
//5.Print the country that uses US dollars as currency.
    var country = res.filter((element)=>{
   
    for(var i in element.currencies){

       if(element.currencies[i].symbol==="$"){

          console.log(element.name.common);

       }

    }

  })
  
  console.log(country)
}
  
    


