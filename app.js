'use strict';

function populateTable(people){
    let table = document.querySelector('table');
    for(let i = 0; i < people.length; i++){
        table.innerHTML += `<tr><td>${people[i].id}</td><td>${people[i].firstName}</td><td>${people[i].lastName}</td><td>${people[i].gender}</td><td>${people[i].dob}</td><td>${people[i].height}</td><td>${people[i].weight}</td><td>${people[i].eyeColor}</td><td>${people[i].occupation}</td><td>${people[i].parents}</td><td>${people[i].currentSpouse}</td></tr>`
    }
}
populateTable(people);

function searchById(people) {
    let idInput = document.forms['mainForm']['id'].value;
    let idResults = people.filter(function(person) {
        if(person.id == idInput) {
            return true;
        }
        return false;
    })
    return idResults;
}

function searchByFirst(people) {
    let fNameInput = document.forms['mainForm']['fname'].value;
    let fNameResults = people.filter(function(person) {
        if(person.firstName == fNameInput) {
            return true;
        }
        return false;
    })
    return fNameResults;
}

function searchByLast(people) {
    let lNameInput = document.forms['mainForm']['lname'].value;
    let lNameResults = people.filter(function(person) {
        if(person.lastName == lNameInput) {
            return true;
        }
        return false;
    })
    return lNameResults;
}

function searchByGender(people) {
    let genderInput = document.forms['mainForm']['gender'].value;
    let genderResults = people.filter(function(person) {
        if(person.gender == genderInput) {
            return true;
        }
        return false;
    })
    return genderResults;
}

function searchByDob(people) {
    let dobInput = document.forms['mainForm']['dob'].value;
    let dobResults = people.filter(function(person) {
        if(person.dob == dobInput) {
            return true;
        }
        return false;
    })
    return dobResults;
}

function searchByHeight(people) {
    let heightInput = document.forms['mainForm']['height'].value;
    let heightResults = people.filter(function(person) {
        if(person.height == heightInput) {
            return true;
        }
        return false;
    })
    return heightResults;
}
let peopleOfHeight = searchByHeight(people);
let smaller = searchByWeight(peopleOfHeight) //multiple search
//populateTable(peopleOfHeight)

function searchByWeight(people) {
    let weightInput = document.forms['mainForm']['weight'].value;
    let weightResults = people.filter(function(person) {
        if(person.weight == weightInput) {
            return true;
        }
        return false;
    })
    return weightResults;
}

function searchByEyeColor(people) {
    let eyeColor = document.forms['mainForm']['eyeColor'].value;
    let eColorResults = people.filter(function(person) {
        if(person.eyeColor == eyeColor) {
            return true;
        }
        return false;
    })
    return eColorResults;
}

function searchByOccupation(people) {
    let occupation = document.forms['mainForm']['occupation'].value;
    let occResults = people.filter(function(person) {
        if(person.occupation == occupation) {
            return true;
        }
        return false;
    })
    return occResults;
}

function searchByParents(people) {
    let parents = document.forms['mainForm']['parents'].value;
    let parentsResults = people.filter(function(person) {
        if(person.parents == parents) {
            return true;
        }
        return false;
    })
    return parentsResults;
}

function currentSpouse(people) {
    let spouse = document.forms['mainForm']['currentSpouse'].value;
    let spouseResults = people.filter(function(person) {
        if(person.currentSpouse == spouse) {
            return true;
        }
        return false;
    })
    return spouseResults;
}

function searchByHeight(people) {
    let heightInput = document.forms['mainForm']['height'].value;
    let results = people.filter(function(person){
        if(person.height == heightInput){
            return true;
        }
    })
    return results;  
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
