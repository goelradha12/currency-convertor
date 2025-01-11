const URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const queryVal = document.querySelector("#val");


const queryFrom = document.querySelector("#from-optn");
const queryTo = document.querySelector("#to-optn");
const button = document.querySelector("button");
const result = document.querySelector(".result");

// updating list of countries
const getData = async ()=>{
    let response = await fetch(`${URL}.json`);
    let countryList = await response.json();
    let newList = "";
    for(country in countryList)
    {
        if(countryList[country])
        newList += `<option value="${country}">${countryList[country]}</option>`;
    }

    queryFrom.innerHTML = queryTo.innerHTML = newList;
}
getData()

// getting values on button click
button.addEventListener("click", async ()=>{
    let val = queryVal.value;
    let from = queryFrom.value;
    let to = queryTo.value;

    let response = await fetch(`${URL}/${from}.json`);
    let rates = await response.json();
    rates = rates[`${from}`][to];

    result.innerHTML = `${val*rates}`;
    
    console.log(val,from,to,rates)
})  