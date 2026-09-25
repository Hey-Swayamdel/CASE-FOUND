let submitButton = document.getElementById("submit-case");

let caseType = document.getElementById("case-type");
let itemName = document.getElementById("item-name");
let itemlocation = document.getElementById("location");
let date = document.getElementById("date");
let description = document.getElementById("description");

let newCases = document.getElementById("new-cases");
let caseForm = document.getElementById("case-form");
let searchCase = document.getElementById("search-case");

let CaseNumber=3;

submitButton.addEventListener("click", function() 
{

    if (
    itemName.value === "" ||
    itemlocation.value === "" ||
    date.value === "" ||
    description.value === ""
    ) {
    alert("Please fill all the fields!");
    return;
    }

    let currentCaseNumber = CaseNumber;


    console.log("CASE SUBMITTED");
    console.log("Case Type:", caseType.value);
    console.log("Item Name:", itemName.value);
    console.log("Location:", itemlocation.value);
    console.log("Date Reported:", date.value);
    console.log("Description:", description.value);

    let newCase = document.createElement("div");
    newCase.className = "case-card";

    newCase.innerHTML = `
        <h3>CASE ${currentCaseNumber} - ${itemName.value}</h3>

        <p>Case Type: ${caseType.value}</p>
        <p>Last Known Location: ${itemlocation.value}</p>
        <p>Date Reported: ${date.value}</p>
        <p>Description: ${description.value}</p>
        <p>Status: <span class="status-open">OPEN</span></p>
        <button class="resolve-button">RESOLVE CASE</button>
    `;
    let resolveButton = newCase.querySelector(".resolve-button");
    let status = newCase.querySelector(".status-open");
    
    resolveButton.addEventListener("click",function() {
        status.textContent = "RESOLVED";
        resolveButton.textContent = "CASE  RESOLVED";
        resolveButton.disabled = true;
        alert(`Case ${currentCaseNumber} has been resolved!`);
    });

    newCases.appendChild(newCase);
    
    CaseNumber= CaseNumber + 1;
    caseForm.reset();
});
searchCase.addEventListener("input", function() {

    let searchText = searchCase.value.toLowerCase();

    let caseCards = document.querySelectorAll(".case-card");

    caseCards.forEach(function(card) {

        let caseText = card.textContent.toLowerCase();

        if (caseText.includes(searchText)) {
            card.style.display = "block";
        } 
        else {
            card.style.display = "none";
        }

    });

});