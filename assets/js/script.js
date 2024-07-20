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
        workspace.innerHTML = `
        <button class="accordion">Ehh... how do I use this?</button>
        <div class="panel">
            <p>To get started simply choose what unit you're starting with below, input the measurement in the space provided and press the convert button to see your result!</p>
        </div>

        <div id="calculator">
                <div class="buttons">
                    <button class="options button-29" role="button" data-type="cups-liquid" id="cups-liquid">
                    Cups Liquid
                    </button>
                    <button class="options button-29" role="button" data-type="cups-solid" id="cups-solid">
                    Cups Solid
                    </button>
                    <button class="options button-29" role="button" data-type="ounces" id="ounces">
                    Ounces
                    </button>
                    <button class="options button-29" role="button" data-type="fluid-ounces" id="fluid-ounces">
                    Fluid Ounces
                    </button>
                </div>

                <div class="input-area">
                    <input id="user-input" type="number">
                </div>
                <div class="submit-area">
                    <button class="options button-29" id="submit" data-type="submit"><span id="conversion">Please select a unit to convert</span></button>
                </div>
               
        </div>
        <div>
            <div id="output-div">
                    <h2 class="hidden-heading">Output</h2>

                    <p><span id="output"></span></p>
            </div>
            <div id="history">
                <div id="table-header">    
                    <h2>Your Recent History</h2>
                </div>
                <div id="table-div">
                    <table id="history-table">  
                        <tr>
                            <th>Input</th>
                            <th>Imperial Unit</th>
                            <th>Output</th>
                            <th>Metric Unit</th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>`;
        //the info accordion    
        // fetches the element by its class name accordion and assigns it to acc
        let acc = document.getElementsByClassName("accordion");
        // this returns an array so we're looking to use the first iteration and assign an event listener to it with a click responce
        acc[0].addEventListener("click", function () {
            //Toggles between adding and removing the "active class to highlight the button"
            this.classList.toggle("active");

            //Toggles between hiding and showing the active panel
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
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

                    //checks to see if userInput is a number and prints alert if the input is empty
                    if (isNaN(userInput)) {
                        alert("Please input a value");
                    } else {
                        // if selection variable equals ""
                        if (selection === "") {
                            //prints alert
                            alert("Please Select A Unit To Convert");
                            //throws an error message should this happen because its not supposed to if the programme runs the default func cupsLiquid()
                            throw "No unit was selected, Aborting";
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

            });
        }
        //runs the default conversion cups-liquid
        runConversion("cups-liquid");
    });
});

/**
 * determines which type of conversion you wish to perform and calls its relevant function
 */
function runConversion(conversionType) {

    //if the user wants to convert Cups Liquid
    if (conversionType === "cups-liquid") {
        //calls a function
        displayCupsLiquid();
    }
    //if the user wants to convert Cups Solid
    else if (conversionType === "cups-solid") {
        //calls a function
        displayCupsSolid();
    }
    //if the user wants to convert Ounces
    else if (conversionType === "ounces") {
        //calls a function
        displayOunces();
    }
    //if the user wants to convert Fluid Ounces
    else if (conversionType === "fluid-ounces") {
        //calls a function
        displayFluidOunces();
    }

}
/**
 * prints the output of the conversion to a span with ID output on the index page
 */
function printOutput(initial, result, imperial, metric) {
    // assigns the span to the variable outputSpan
    let outputSpan = document.getElementById("output");


    if (outputSpan.textContent === "") {
        //gets the output div and assigns it to new variable outputDiv
        let outputDiv = document.getElementById("output-div");
        //creates a new element and assigns it to a new variable outputSubTitle
        let outputSubTitle = document.createElement("h3");
        // fills the text within outputSubTitle
        outputSubTitle.textContent = "Your Conversion:";
        //inserts the outputSubTitle into the document before the first child of outputDiv
        outputDiv.insertBefore(outputSubTitle, outputDiv.firstChild);
        // changes the inner html of the span to the template litteral
        outputSpan.innerHTML = `${initial} ${imperial} is equal to ${result} ${metric}`;
        // calls the addHistory function passing it four parameters
        addHistory(initial, result, imperial, metric);
    } else {
        // changes the inner html of the span to the template litteral
        outputSpan.innerHTML = `${initial} ${imperial} is equal to ${result} ${metric}`;
        // calls the addHistory function passing it four parameters
        addHistory(initial, result, imperial, metric);
    }


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

    //gets the text within the submit button and assigns it to a variable
    let submitText = document.getElementById("conversion");
    //assigns new text to the submit button
    submitText.innerHTML = "Convert Cups Liquid to Millilitres (ml)";
    //changes the selection variable 
    selection = 'cupsLiquid';

}

/**
 * displays interface for cups solid conversion
 */
function displayCupsSolid() {

    //gets the text within the submit button and assigns it to a variable
    let submitText = document.getElementById("conversion");
    //assigns new text to the submit button
    submitText.innerHTML = "Convert Cups Solid to Grams (g)";
    //changes the selection variable
    selection = 'cupsSolid';
}

/**
 * displays interface for ounces conversion
 */
function displayOunces() {

    //gets the text within the submit button and assigns it to a variable
    let submitText = document.getElementById("conversion");
    //assigns new text to the submit button
    submitText.innerHTML = "Convert Ounces to Grams (g)";
    //changes the selection variable
    selection = 'ounces';
}

/**
 * displays interface for fluid ounces conversion
 */
function displayFluidOunces() {
    //gets the text within the submit button and assigns it to a variable
    let submitText = document.getElementById("conversion");
    //assigns new text to the submit button
    submitText.innerHTML = "Convert Fluid Ounces to Mililitres (ml)";
    //changes the selection variable
    selection = 'fluidOunces';
}

/**
 * converts cups liquid to ml
 */
function calculateCupsLiquid(input) {

    //number to convert input with
    let cupFluid = 236.588;
    //sets output to the result of the conversion
    let output = (input * cupFluid).toFixed(2);
    //for displaying the imperial unit
    let imperial = "Cups (Liquid)";
    //for displaying the metric unit
    let metric = "Millilitres";
    //calls the func printOutput and passes it some parameters
    printOutput(input, output, imperial, metric);

}

/**
 * converts cups solid to g
 */
function calculateCupsSolid(input) {

    //number to convert input with
    let cupSolid = 120;
    //sets output to the result of the conversion
    let output = (input * cupSolid).toFixed(2);
    //for displaying the imperial unit
    let imperial = "Cups (Solid)";
    //for displaying the metric unit
    let metric = "Grams";
    //calls the func printOutput and passes it some parameters
    printOutput(input, output, imperial, metric);




}

/**
 * converts ounces to g
 */
function calculateOunces(input) {

    //number to convert input with
    let ounce = 28.35;
    //sets output to the result of the conversion
    let output = (input * ounce).toFixed(2);
    //for displaying the imperial unit
    let imperial = "Ounces";
    //for displaying the metric unit
    let metric = "Grams";
    //calls the func printOutput and passes it some parameters
    printOutput(input, output, imperial, metric);

}

/**
 * converts fluid ounces to ml
 */
function calculateFluidOunces(input) {

    //number to convert input with
    let fluidOunce = 29.574;
    //sets output to the result of the conversion
    let output = (input * fluidOunce).toFixed(2);
    //for displaying the imperial unit
    let imperial = "Fluid Ounces";
    //for displaying the metric unit
    let metric = "Millilitres";
    //calls the func printOutput and passes it some parameters
    printOutput(input, output, imperial, metric);

}