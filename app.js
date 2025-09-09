
let apiContent=document.querySelector("#api_content");
let p=document.querySelector("p");
let wether=document.querySelector("#weather-data");
let input=document.querySelector("#location");
let h2=document.querySelector("h2");
let i=0;
let mLength;
let apiUrl=`https://api.weatherapi.com/v1/current.json?key=1668aa11b768494cacb13756250109&q=champawat`; 
    let m= apiUrl.split("=");
     m[2]=""
    function weatherdata(){
       apiUrl=`https://api.weatherapi.com/v1/current.json?key=1668aa11b768494cacb13756250109&q=${m[2]}`; 
        fetch(apiUrl)
         .then((response)=>{
          if(!response.ok){
            throw new Error (`Http error is accomplised ${response.error}`);
          }
         return response.json();
         })
        .then(data=>{
        console.log(data);
        console.log(data.current);
         let m= Object.entries(data.location);
         mLength=m.length;
          m.forEach(([key,value])=>{
          let p=document.createElement("p");
          p.innerText=(`${key}  :  ${value}`);
          p.classList.add("green");
          p.style.color="green";
          apiContent.appendChild(p);
         })
         return data;
        })
        .then(data=>{
         console.log(data.current);
         let p1=document.getElementById("update_time");
         let p2=document.getElementById("condition");
         let p3=document.getElementById("temp");
         let p4=document.getElementById("air");
         let p5=document.getElementById("icon");
         p1.innerText=`lastUpdate : ${data.current.last_updated}`
         p2.innerText=`weathercondition :${data.current.condition.text}`
         p3.innerText=`temp :${data.current.temp_c} c`
         p4.innerText=`wind condition : ${data.current.wind_kph}kph`
         p5.src=data.current.condition.icon
         return data;
        })
         .catch((err)=>{
            console.log("the error accour:",err);
         })
        
    }
    let btn=document.querySelector("button");
    btn.addEventListener('click',()=>{
       i++;
       console.log(i);
       if(i>1){
       removeChild();
       }
       m[2]=input.value;
       input.value="";
       h2.innerText="weather data";
       weatherdata();   
    })
    function removeChild(){
      let n=document.querySelectorAll(".green")
        n.forEach((para)=>{
         // console.log(para);
        apiContent.removeChild(para);
        })
        let j=document.querySelectorAll(".condition");
        j.forEach((condition)=>{
         console.log(condition);
         condition.innerText=""
        })

    }
   