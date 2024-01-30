// const baseUrl = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json"

// const dropdowns = document.querySelectorAll(".dropdown select");



// for (let select of dropdowns) {
//     for (currCode in countryList) {
//         // console.log(code, countryList[code]);
//         let newOption = document.createElement('option');
//         newOption.innerText = currCode;
//         newOption.value = currCode;
//         // console.log(newOption.value);
//         if(select.name === "from" && currCode === "NPR"){
//             newOption.selected = "selected";
//         }
//         else if(select.name === "to" && currCode === "INR"){
//             newOption.selected = "selected";
//         }
//         select.append(newOption);

//     }
//     select.addEventListener("change",(event)=>{
//         updateFlag(event.target);

//     })
// }

// const updateFlag=(element)=>{
//     console.log(element);
//     let currCode = element.value;
//     console.log(currCode);
//     let countryCode = countryList[currCode];
//     console.log(countryCode)
//     let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`
//     let img = element.parentElement.querySelector('img')
//     img.src =newsrc;


// }
