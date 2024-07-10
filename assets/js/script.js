//this variable tells the submit button what function to run based on its value
let selection = "";
//wait for DOM to fully load before running any JS
document.addEventListener("DOMContentLoaded", function () {

    // asigns start variable to start-button in the html
    let start = document.getElementById("start-button");
    //listens for the start-button to click then runs a function
    start.addEventListener("click", function () {
        let workspace = document.getElementById("workspace");

        //over writes the start-button with new html code in the workspace
        workspace.innerHTML = `<div id="calculator">
                <div class="buttons">
                    <button class="options" data-type="cups-liquid" id="cups-liquid">
                    Cups Liquid
                    </button>
                    <button class="options" data-type="cups-solid" id="cups-solid">
                    Cups Solid
                    </button>
                    <button class="options" data-type="ounces" id="ounces">
                    Ounces
                    </button>
                    <button class="options" data-type="fluid-ounces" id="fluid-ounces">
                    Fluid Ounces
                    </button>
                </div>

                <div class="input-area">
                    <input id="user-input" type="number">
                </div>
                <div class="submit-area">
                    <button class="options" id="submit" data-type="submit"><span id="conversion">Please select a unit to convert</span></button>
                </div>
                <div>
                    <p><span id="output"></span></p>
                </div>
            </div>
            <div id="history">
                <h2>Your Recent History</h2>
                <table id="history-table">
                    <tr>
                        <th>Input</th>
                        <th>Imperial Unit</th>
                        <th>Output</th>
                        <th>Metric Unit</th>
                    </tr>
                </table>
            </div>`;

        let buttons = document.getElementsByClassName("options");

        //iterates through the buttons adding a click eventListener to each which runs a function in response
        for (let button of buttons) {
            button.addEventListener("click", function () {
                //if submit button is pressed
                if (this.getAttribute("data-type") === "submit") {
                    
                    //gets the input from the user from the DOM and assigns its value to a new variable
                    let userInput = document.getElementById("user-input").value;
                    userInput = parseFloat(userInput);

                    if (selection === "") {
                        alert("Please Select A Unit To Convert");
                    } else if (selection === "cupsLiquid") {
                        calculateCupsLiquid(userInput);
                    } else if (selection === "cupsSolid") {
                        calculateCupsSolid(userInput);
                    } else if (selection === "ounces") {
                        calculateOunces(userInput);
                    } else if (selection === "fluidOunces") {
                        calculateFluidOunces(userInput);
                    }
                }
                //if Cups Liquid button is pressed
                else if (this.getAttribute("data-type") === "cups-liquid") {
                    let conversionType = this.getAttribute("data-type");
                    runConversion(conversionType);
                }
                //if Cups Solid button is pressed
                else if (this.getAttribute("data-type") === "cups-solid") {
                    let conversionType = this.getAttribute("data-type");
                    runConversion(conversionType);
                }
                //if Ounces button is pressed
                else if (this.getAttribute("data-type") === "ounces") {
                    let conversionType = this.getAttribute("data-type");
                    runConversion(conversionType);
                }
                //if Fluid Ounces Button is pressed
                else if (this.getAttribute("data-type") === "fluid-ounces") {
                    let conversionType = this.getAttribute("data-type");
                    runConversion(conversionType);
                }

            })
        }
        //runs the default conversion cups-liquid
        runConversion("cups-liquid");
    })
})

/**
 * 
 * 
 */
function runConversion(conversionType) {

    //if the user wants to convert Cups Liquid
    if (conversionType === "cups-liquid") {
        displayCupsLiquid();
    }
    //if the user wants to convert Cups Solid
    else if (conversionType === "cups-solid") {
        displayCupsSolid();
    }
    //if the user wants to convert Ounces
    else if (conversionType === "ounces") {
        displayOunces();
    }
    //if the user wants to convert Fluid Ounces
    else if (conversionType === "fluid-ounces") {
        displayFluidOunces();
    }

}

function printOutput(initial, result, imperial, metric) {

    let outputSpan = document.getElementById("output");
    outputSpan.innerHTML = `${initial} ${imperial} is equal to ${result} ${metric}`;
    addHistory(initial, result, imperial, metric);
    
}

function addHistory(initial, result, imperial, metric) {

    //adds a new row to the HTML table by creating elements, appending them to eachother and assigning them a value
    let table = document.getElementById("history-table");
    let newRow = document.createElement("tr");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");
    let cell4 = document.createElement("td");

    
    cell1.innerHTML = `${initial}`;
    cell2.innerHTML = `${imperial}`;
    cell3.innerHTML = `${result}`;
    cell4.innerHTML = `${metric}`;
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    newRow.appendChild(cell3);
    newRow.appendChild(cell4);
    table.appendChild(newRow);
   
}
/**
 * 
 */
function displayCupsLiquid() {

    let submitText = document.getElementById("conversion");
    submitText.innerHTML = "Convert Cups Liquid to Millilitres (ml)";
    selection = 'cupsLiquid';

}

function displayCupsSolid() {

    let submitText = document.getElementById("conversion");
    submitText.innerHTML = "Convert Cups Solid to Grams (g)";
    selection = 'cupsSolid';
}

function displayOunces() {

    let submitText = document.getElementById("conversion");
    submitText.innerHTML = "Convert Ounces to Grams (g)";
    selection = 'ounces';
}

function displayFluidOunces() {

    let submitText = document.getElementById("conversion");
    submitText.innerHTML = "Convert Fluid Ounces to Mililitres (ml)";
    selection = 'fluidOunces';
}

function calculateCupsLiquid(input) {

    let cupFluid = 236.588;
    let output = input * cupFluid;
    let imperial = "Cups (Liquid)";
    let metric = "Millilitres";
    printOutput(input, output, imperial, metric);

}

function calculateCupsSolid(input) {

    let cupSolid = 120;
    let output = input * cupSolid;
    let imperial = "Cups (Solid)";
    let metric = "Grams";
    printOutput(input, output, imperial, metric);

}

function calculateOunces(input) {

    let ounce = 28.35;
    let output = input * ounce;
    let imperial = "Ounces";
    let metric = "Grams";
    printOutput(input, output, imperial, metric);

}

function calculateFluidOunces(input) {

    let fluidOunce = 29.574;
    let output = input * fluidOunce;
    let imperial = "Fluid Ounces";
    let metric = "Millilitres";
    printOutput(input, output, imperial, metric);

}