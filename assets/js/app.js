//Signature selection
var signatureButton = document.getElementById('signature');
var OutPut = document.getElementById('OutPut');
var ImageOutPut = document.getElementById('ImageOutPut');
//Seasonal selection
var seasonalButton = document.getElementById('seasonal');
//Make You Own selectio
var makeButton = document.getElementById('make')


//Funftion for getting the Signature JSON data.
function getSignatureJSON(){
    fetch('signature.json')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let output = '';
        output += `<h1>${data.title}</h1>`;
        data.drinks.forEach(function(drinks){
            output += 
            `
            <ul>
                <h3>${drinks.name}</h3>
                <p>${drinks.description}</p>
            </ul>
            `
        });
        OutPut.innerHTML = output;
        let Image = '';
        Image +=
        `
        <img src="${data.image[1].path}">
        `
        ImageOutPut.innerHTML = Image; 
    })
    .catch(function(error){
        console.log(error)
    })
}
signatureButton.onload = getSignatureJSON();
signatureButton.addEventListener('click', getSignatureJSON, false); 
//Funftion for getting the Seasonal JSON data.
function getSeasonalJSON(){
    fetch('seasonal.json')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let output = '';
        output += `<h1>${data.title}</h1>`;
        data.drinks.forEach(function(drinks){
            output += 
            `
            <ul>
                <h3>${drinks.name}</h3>
                <p>${drinks.description}</p>
            </ul>
            `
        });
        OutPut.innerHTML = output;
        let Image = '';
        Image +=
        `
        <img src="${data.image[0].path}">
        `
        ImageOutPut.innerHTML = Image; 
    })
    .catch(function(error){
        console.log(error)
    })
}
seasonalButton.addEventListener('click', getSeasonalJSON, false);

//Function for getting the Make You Own JSON data.
function getMakeJSON(){
    fetch('make.json')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        let output = '';
        output += `<h1>${data.title}</h1>`;
        data.Making.forEach((step)=>{
            output +=
            `
            <ul>
                <h3>${step.Step}</h3>
                <p>${step.description}</p>
            </ul>
            `
        });
        OutPut.innerHTML = output;
        let Image = '';
        Image +=
        `
        <img src="${data.image[0].path}">
        `
        ImageOutPut.innerHTML = Image; 
    })
    .catch((error)=>{
        console.log(error )
    })
}
makeButton.addEventListener('click', getMakeJSON, false);