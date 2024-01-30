const baseUrl = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"
const dropdowns = document.querySelectorAll('.dropdown select')
const btn = document.getElementById('btn')
const fromCurr =document.querySelector(".from select")
const toCurr = document.querySelector(".to select")
const finalMsg = document.querySelector(".msg")


// for (currCode in countryList){
//     // console.log(currCode,countryList[currCode]);
// }
for (select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement('option');
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "NPR") {
            newOption.selected = "selected";
        }
        else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);


    }
    select.addEventListener("change", (event) => {
        flagUpdate(event.target);
    })
}
const flagUpdate = (element) => {
    // console.log(element);
    let currCode = element.value;
    // console.log(currCode);
    let countrycode = countryList[currCode];
    let img = element.parentElement.querySelector('img')
    img.src = `https://flagsapi.com/${countrycode}/flat/64.png`
}

btn.addEventListener("click", async(event) => {
    event.preventDefault();
    const amount = document.querySelector('form input');
    let amountSum = amount.value;
    // console.log(amountSum);
    if (amountSum === "" || amountSum < 1) {
        amountSum = 1;
        amount.value = "1"
    }
    // console.log(fromCurr.value,toCurr.value);

    const URL = `${baseUrl}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
    let response = await fetch(URL)
    let data = await response.json()
    let rate = data[toCurr.value.toLowerCase()]
    // console.log(rate)
    let finalAmount = amountSum * rate;
    // console.log(finalAmount,amountSum,rate)
    finalMsg.innerText =`${amountSum} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
})



