'use strict';

function populateTable(people){
    let table = document.querySelector('tbody');
    for(let i = 0; i < people.length; i++){
        table.innerHTML += `<tr><td>${people[i].id}</td><td>${people[i].firstName}</td><td>${people[i].lastName}</td><td>${people[i].gender}</td><td>${people[i].dob}</td><td>${people[i].height}</td><td>${people[i].weight}</td><td>${people[i].eyeColor}</td><td>${people[i].occupation}</td><td>${displayParentName(people[i].parents[0])}</td><td>${displaySpouseName(people[i].currentSpouse)}</td></tr>`
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
// let peopleOfHeight = searchByHeight(people);
// let smaller = searchByWeight(peopleOfHeight);


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

function searchBySpouse(people) {
    let spouse = document.forms['mainForm']['currentSpouse'].value;
    let spouseResults = people.filter(function(person) {
        if(person.currentSpouse == spouse) {
            return true;
        }
        return false;
    })
    return spouseResults;
}

// alerts if all inputs fields are blank. if not, searches based on non-null user inputs
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
    let results = people;
    
    if(!id && !fname && !lname && !gender && !dob && !height && !weight && !eyeColor && !occupation && !parents && !currentSpouse){
        alert("Enter at least one search parameter!")
        return false;
    }
    else{
        if(id != ""){
            results = searchById(results);
        }
        if(fname != "") {
            results = searchByFirst(results);           
        }
        if(lname != "") {
            results = searchByLast(results);
        }
        if(gender != "") {
            results = searchByGender(results);
        }
        if(dob != "") {
            results = searchByDob(results);
        }
        if(height != ""){
            results = searchByHeight(results);
        }
        if(weight != "") {
            results = searchByWeight(results);
        }
        if(eyeColor != "") {
            results = searchByEyeColor(results);
        }
        if(occupation != "") {
            results = searchByOccupation(results);
        }
        if(parents != "") {
            results = searchByParents(results);
        }
        if(currentSpouse != "") {
            results = searchBySpouse(results);
        }
        clearTable();
        populateTable(results);
        findDescendants(results);
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

function clearTable() {
    let table = document.querySelector('tbody');
    let tableTwo = document.getElementById('descendantTable');
    table.innerHTML = "";
    tableTwo.innerHTML = "";
}

function findDescendants(results) {
    // look for person's id and search people array to find matches in parent array
    let personId;
    for(let i = 0; i < results.length; i++){
        personId = results[i].id;
    }
    console.log(personId);

    let descendantMatches = people.filter(function(person) {
        if(personId == person.parents[0] || personId == person.parents[1]){
            return true
        }
        else{
            return false;
        }
        // console.log(descendantMatches);
    });
    //console.log(descendantMatches);
    populateDescendants(descendantMatches);
}

function populateDescendants(people){
    let tableTwo = document.getElementById("descendantTable");

    for(let i = 0; i < people.length; i++){
        tableTwo.innerHTML += `<tr><td>${people[i].id}</td><td>${people[i].firstName}</td><td>${people[i].lastName}</td><td>${people[i].gender}</td><td>${people[i].dob}</td><td>${people[i].height}</td><td>${people[i].weight}</td><td>${people[i].eyeColor}</td><td>${people[i].occupation}</td><td>${people[i].parents}</td><td>${people[i].currentSpouse}</td></tr>`
    }
}

// function displayParentName(id){
//     for(let i = 0; i < people.length; i++){

//         // if no parents listed, return empty
//         if(!id){
//             return "";
//         }
//         if(id == people[i].id){
//             // store the name of the parent given the id
//             let parentName = people[i].firstName + " " + people[i].lastName;

//             // find people that have parents with that same id
//             for(let j = 0; j < people.length; j++){
//                 if(id == people[j].parents[0]){
//                     return parentName;
//                 }
//             }
//         }       
//     }
// }

function displaySpouseName(id) {
    // search for person with id from argument
    for(let i = 0; i < people.length; i++){

        // this might be able to go outside loop but returns an empty string with someone with no spouse
        if(!id){
            return "";
        }

        // finds the person with id from function argument and stores their name
        if(id == people[i].id){
            let spouseName = people[i].firstName + " " + people[i].lastName;

            // searches people array to find people with those parents
            for(let j = 0; j < people.length; j++){
                if(id == people[j].currentSpouse){
                    console.log(spouseName);
                    return spouseName;
                }
            }
        }
    }
}
