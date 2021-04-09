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
            "fNameOutput"
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
        document.getElementById("genderOutput").innerHTML = `${genderInput}`;
    }else{
        console.log("No one with that gender.");
    }
}

function searchByBirth() {
    let birthdayInput = document.forms['birthdayForm']['birthday'].value;

    let filteredBirthdays = people.filter(function (person) {
        if(person.dob === birthdayInput){
            return true;
        }
        return false;
    });
    if(filteredBirthdays.length > 0){
        document.getElementById("birthdayOutput").innerHTML = `${birthdayInput}`
    }else{
        console.log("No one with that date of birth.");
    }
}

function searchByHeight() {
    let heightInput = document.forms['heightForm']['height'].value;
    for(let i = 0; i < people.length; i++) {
        console.log(people[i]);
        if(heightInput == people[i].height) {
            console.log(people[i].firstName, people[i].lastName, people[i].height);
            document.getElementById("idOutput").innerHTML = people[i].id;
            document.getElementById("fNameOutput").innerHTML = people[i].firstName;
            document.getElementById("lNameOutput").innerHTML = people[i].lastName;
            document.getElementById("genderOutput").innerHTML = people[i].gender;
            document.getElementById("birthdayOutput").innerHTML = people[i].dob;
            document.getElementById("heightOutput").innerHTML = people[i].height;
            document.getElementById("weightOutput").innerHTML = people[i].weight;
            document.getElementById("eyeColorOutput").innerHTML = people[i].eyeColor;
            document.getElementById("occupationOutput").innerHTML = people[i].occupation;
            document.getElementById("parentOutput").innerHTML = people[i].parents;
            document.getElementById("currentSpouseOutput").innerHTML = people[i].currentSpouse;
        } else {
            console.log("No match for this height found");
        }
    }
}

