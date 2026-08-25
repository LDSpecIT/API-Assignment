//INITIAL SET UP

let dogToggleButton = document.querySelector("#btn-dog")
let weatherCheckButton = document.querySelector("#btn-weather")
let inputWeather = document.querySelector("#input-weather")
let tempDiv 
let windDiv
let descriptionDiv

dogToggleButton.addEventListener("click", dogButtonCheck)
weatherCheckButton.addEventListener("click", weatherButtonCheck)

function dogButtonCheck(){
    console.log("Dog Buton Clicked")
}

function weatherButtonCheck(){
    console.log("Weather Button Clicked")
}


//CREATE A FETCH TOGGLE FOR RANDOM DOG IMAGES

const dogImg = document.querySelector("#dog-img")


const dogToggle = () =>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((data) => data.json())
    .then((response) => {

        // Handle the API response here.
        dogImg.src = response.message
        dogImg.height = 300
        // You can access the response object via the `response` parameter

    })
    .catch((error) => console.log(error));
}
dogToggleButton.addEventListener("click", dogToggle)




const weatherCheck = () => {
    
    let city = inputWeather.value
    let url = encodeURI(`https://goweather.xyz/v2/weather/${city}`)

    fetch(url)
    .then((data) => data.json())
    .then((response) => {
        
        tempDiv.textContent = `Temperature: ${response.temperature}`
        windDiv.textContent = `Wind: ${response.wind}`
        descriptionDiv.textContent = `Description: ${response.description}`

    })
    .catch((error)=> console.log(error))
}

weatherCheckButton.addEventListener("submit", weatherCheck)
inputWeather = document.querySelector("#input-weather")
tempDiv = document.querySelector("#temp-div")
windDiv = document.querySelector("#wind-div")
descriptionDiv = document.querySelector("#description-div")



