'use strict';

// function searchByName(){
//     // Grabbing the values from our nameForm form and inputs.
//     let firstNameInput = document.forms['mainForm']['fname'].value;
//     let lastNameInput = document.forms['mainForm']['lname'].value;

//     // "people" is coming from the data.js file. We have access to it within this JavaScript file.
//     let filteredPeople = people.filter(function (person) {
//         if(person.firstName === firstNameInput && person.lastName === lastNameInput){
//             return true;
//         }
//         return false;
//     });

//     // Rather than console logging, you need to append the filteredPeople to a table.
//     if(filteredPeople.length > 0){
//         document.getElementById(
//             "fNameOutput"
//         ).innerHTML = `${firstNameInput}`;
//         document.getElementById(
//             "lNameOutput"
//         ).innerHTML = `${lastNameInput}`;
//         console.log(filteredPeople);
//     }else{
//         console.log('Sorry, looks like there is no one with that name.');
//     }
// }

// not connected to right form yet
function searchByGender(){
    let genderInput = document.forms['genderForm']['gender'].value;

    let filteredGenders = people.filter(function (person) {
        if(person.gender === genderInput){
            return true;
        }
        return false;
    });

    if(filteredGenders.length > 0){
        console.log(filteredGenders);
        // document.getElementById("genderOutput").innerHTML = `${genderInput}`;
    }else{
        console.log("No one with that gender.");
    }
}

function searchByBirth() {
    let birthdayInput = document.forms['mainForm']['dob'].value;

    let filteredBirthdays = people.filter(function (person) {
        if(person.dob === birthdayInput){
            return true;
        }
        return false;
    });
    if(filteredBirthdays.length > 0){
        document.getElementById("table").innerHTML = `<tr><td>${birthdayInput}</td><tr>`
    }else{
        console.log("No one with that date of birth.");
    }
}

function searchByName() {
    let table = document.querySelector('table');
    let fNameInput = document.forms['mainForm']['fname'].value;
    let lNameInput = document.forms['mainForm']['lname'].value;

    for(let i = 0; i < people.length; i++){
        if(fNameInput === people[i].firstName && lNameInput === people[i].lastName){
            table.innerHTML += `<tr><td>${people[i].id}</td><td>${people[i].firstName}</td><td>${people[i].lastName}</td><td>${people[i].gender}</td><td>${people[i].dob}</td><td>${people[i].height}</td><td>${people[i].weight}</td><td>${people[i].eyeColor}</td><td>${people[i].occupation}</td><td>${people[i].parents}</td><td>${people[i].currentSpouse}</td></tr>`
        }
        else if(fNameInput === people[i].firstName && !lNameInput){
            table.innerHTML += `<tr><td>${people[i].id}</td><td>${people[i].firstName}</td><td>${people[i].lastName}</td><td>${people[i].gender}</td><td>${people[i].dob}</td><td>${people[i].height}</td><td>${people[i].weight}</td><td>${people[i].eyeColor}</td><td>${people[i].occupation}</td><td>${people[i].parents}</td><td>${people[i].currentSpouse}</td></tr>`
        }
        else if(!fNameInput && lNameInput === people[i].lastName){
            table.innerHTML += `<tr><td>${people[i].id}</td><td>${people[i].firstName}</td><td>${people[i].lastName}</td><td>${people[i].gender}</td><td>${people[i].dob}</td><td>${people[i].height}</td><td>${people[i].weight}</td><td>${people[i].eyeColor}</td><td>${people[i].occupation}</td><td>${people[i].parents}</td><td>${people[i].currentSpouse}</td></tr>`
        }
    }
}

function searchByHeight() {
    let table = document.querySelector('table');
    let heightInput = document.forms['mainForm']['height'].value;
    for(let i = 0; i < people.length; i++) {
        if(heightInput == people[i].height) {
            //console.log(people[i]);
        table.innerHTML += `<tr><td>${people[i].id}</td><td>${people[i].firstName}</td><td>${people[i].lastName}</td><td>${people[i].gender}</td><td>${people[i].dob}</td><td>${people[i].height}</td><td>${people[i].weight}</td><td>${people[i].eyeColor}</td><td>${people[i].occupation}</td><td>${people[i].parents}</td><td>${people[i].currentSpouse}</td></tr>`
        }
    }
}

function searchByWeight() {
    let table = document.querySelector('table');
    let weightInput = document.forms['mainForm']['weight'].value;
    for(let i = 0; i < people.length; i++) {
        if(weightInput == people[i].weight) {
            table.innerHTML += `<tr><td>${people[i].id}</td><td>${people[i].firstName}</td><td>${people[i].lastName}</td><td>${people[i].gender}</td><td>${people[i].dob}</td><td>${people[i].height}</td><td>${people[i].weight}</td><td>${people[i].eyeColor}</td><td>${people[i].occupation}</td><td>${people[i].parents}</td><td>${people[i].currentSpouse}</td></tr>`
        }
    }
}

// alerts if all inputs fields are blank
function inputValidation(){
    let id = document.getElementById("mainForm").id.value;
    let fname = document.getElementById("mainForm").fname.value; 
    let lname = document.getElementById("mainForm").lname.value;
    let gender = document.getElementById("mainForm").gender.value;
    let dob = document.getElementById("mainForm").dob.value;
    let height = document.getElementById("mainForm").height.value;
    let weight = document.getElementById("mainForm").weight.value;
    let eyeColor = document.getElementById("mainForm").eyeColor.value;
    let occupation = document.getElementById("mainForm").occupation.value;
    let parents = document.getElementById("mainForm").parents.value;
    let currentSpouse = document.getElementById("mainForm").currentSpouse.value;
    
    if(!id && !fname && !lname && !gender && !dob && !height && !weight && !eyeColor && !occupation && !parents && !currentSpouse){
        alert("Enter at least one search parameter!")
        return false;
    }
}

