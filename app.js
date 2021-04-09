'use strict';

function searchByName(){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;

    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = people.filter(function (person) {
        if(person.firstName === firstNameInput && person.lastName === lastNameInput){
            return true;
        }
        return false;
    });

    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredPeople.length > 0){
        document.getElementById(
            "output"
        ).innerHTML = `${firstNameInput}`;
        console.log(filteredPeople);
    }else{
        console.log('Sorry, looks like there is no one with that name.');
    }
}


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
    }else{
        console.log("No one with that gender.");
    }
}

function searchByBirth() {
    let birthdayInput = document.forms['birthdayForm']['birthday'].value;

    let filteredBirthdays = people.filter(function(person){
        if(person.dob === birthdayInput){
            return true;
        }
        return false;
    });
    if(filteredBirthdays.length > 0){
        console.log(filteredBirthdays);
    }else{
        console.log("No one with that date of birth.");
    }
}

function searchByHeight() {
    let tableData = document.createElement('td');
    let tableRow = document.getElementById("tableRow");
    let heightInput = document.forms['heightForm']['height'].value;
    for(let i = 0; i < people.length; i++) {
        if(heightInput == people[i].height) {
            console.log(people[i].firstName, people[i].lastName, people[i].height);
            tableData.innerHTML += `${people[i].id} ${people[i].firstName} ${people[i].lastName} ${people[i].gender} ${people[i].dob} ${people[i].height} ${people[i].weight} ${people[i].eyeColor} ${people[i].occupation} ${people[i].parents} ${people[i].currentSpouse}`;
            tableRow.appendChild(tableData);
        } else {
            console.log("No match for this height found");
        }
    }
}

let thData = document.createElement("th");
let tableHeaders = ['Id', 'First Name', 'Last Name', 'Gender', 'DOB', 'Height', 'Weight', 'Eye Color', 'Occupation', 'Parents', 'Current Spouse'];
for(let i = 0; i < tableHeaders.length; i++) {
    //use the += in a for loop to show value + the next value of the array
    thData.innerHTML += " " + tableHeaders[i];
    document.getElementById("thead").appendChild(thData);
}


