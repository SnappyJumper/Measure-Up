//this variable tells the submit button what function to run based on its value
let selection = "";
//wait for DOM to fully load before running any JS
document.addEventListener("DOMContentLoaded", function () {

    // asigns start variable to start-button in the html
    let start = document.getElementById("start-button");
    //listens for the start-button to click then runs a function
    start.addEventListener("click", function () {
        //assigns the workspace div to the variable workspace
        let workspace = document.getElementById("workspace");

        //over writes the workspace with new html code
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
                <div id="output-div">
                    <p><span id="output"></span></p>
                </div>
            </div>
            <div id="history">
            <div id="table-heading">    
                <h2>Your Recent History</h2>
            </div>
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
                    // ensures the variable is a float
                    userInput = parseFloat(userInput);
                    // if selection variable equals ""
                    if (selection === "") {
                        //prints alert
                        alert("Please Select A Unit To Convert");
                    } else if (selection === "cupsLiquid") {
                        // calls a function and passes it userInput
                        calculateCupsLiquid(userInput);
                    } else if (selection === "cupsSolid") {
                        // calls another function and passes it userInput
                        calculateCupsSolid(userInput);
                    } else if (selection === "ounces") {
                        // calls another function and passes it userInput
                        calculateOunces(userInput);
                    } else if (selection === "fluidOunces") {
                        // calls another function and passes it userInput
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
 * determines which type of conversion you wish to perform and calls its relevant function
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
/**
 * prints the output of the conversion to a span with ID output on the index page
 */
function printOutput(initial, result, imperial, metric) {

    // assigns the span to the variable outputSpan
    let outputSpan = document.getElementById("output");
    // changes the inner html of the span to the template litteral
    outputSpan.innerHTML = `${initial} ${imperial} is equal to ${result} ${metric}`;
    // calls the addHistory function passing it four parameters
    addHistory(initial, result, imperial, metric);

}

/**
 * Prints the history of conversons to a table on the index page
 */
function addHistory(initial, result, imperial, metric) {

    //assigns history table to the variable table
    let table = document.getElementById("history-table");
    //creates a row and adds it to the table below the first row
    let row = table.insertRow(1);
    //creates cells and assigns their position on the row
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    //fills in the content of the cells
    cell1.textContent = `${initial}`;
    cell2.innerHTML = `${imperial}`;
    cell3.innerHTML = `${result}`;
    cell4.innerHTML = `${metric}`;

}

/**
 * displays interface for cups liquid conversion
 */
function displayCupsLiquid() {

    let submitText = document.getElementById("conversion");
    submitText.innerHTML = "Convert Cups Liquid to Millilitres (ml)";
    selection = 'cupsLiquid';

}

/**
 * displays interface for cups solid conversion
 */
function displayCupsSolid() {

    let submitText = document.getElementById("conversion");
    submitText.innerHTML = "Convert Cups Solid to Grams (g)";
    selection = 'cupsSolid';
}

/**
 * displays interface for ounces conversion
 */
function displayOunces() {

    let submitText = document.getElementById("conversion");
    submitText.innerHTML = "Convert Ounces to Grams (g)";
    selection = 'ounces';
}

/**
 * displays interface for fluid ounces conversion
 */
function displayFluidOunces() {

    let submitText = document.getElementById("conversion");
    submitText.innerHTML = "Convert Fluid Ounces to Mililitres (ml)";
    selection = 'fluidOunces';
}

/**
 * converts cups liquid to ml
 */
function calculateCupsLiquid(input) {

    let cupFluid = 236.588;
    let output = (input * cupFluid).toFixed(2);
    let imperial = "Cups (Liquid)";
    let metric = "Millilitres";
    printOutput(input, output, imperial, metric);

}

/**
 * converts cups solid to g
 */
function calculateCupsSolid(input) {

    let cupSolid = 120;
    let output = (input * cupSolid).toFixed(2);
    let imperial = "Cups (Solid)";
    let metric = "Grams";
    printOutput(input, output, imperial, metric);

}

/**
 * converts ounces to g
 */
function calculateOunces(input) {

    let ounce = 28.35;
    let output = (input * ounce).toFixed(2);
    let imperial = "Ounces";
    let metric = "Grams";
    printOutput(input, output, imperial, metric);

}

/**
 * converts fluid ounces to ml
 */
function calculateFluidOunces(input) {

    let fluidOunce = 29.574;
    let output = (input * fluidOunce).toFixed(2);
    let imperial = "Fluid Ounces";
    let metric = "Millilitres";
    printOutput(input, output, imperial, metric);

}