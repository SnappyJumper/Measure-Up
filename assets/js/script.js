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

                <div class="input-measurement">
                    <input type="number">
                </div>
                <div class="submit-area">
                    <button class="options" data-type="submit"><span id="conversion">Please select a unit to convert</span></button>
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
                        <th>Output</th>
                    </tr>
                    <tr>
                        <td>None</td>
                        <td>None</td>
                    </tr>
                </table>
            </div>`;

        let buttons = document.getElementsByClassName("options");
        
        for (let button of buttons) {
            button.addEventListener("click", function() {
                if (this.getAttribute("data-type") === "submit") {
                    alert("Submit button was pressed");
                } else if (this.getAttribute("data-type") === "cups-liquid") {
                    let conversionType = this.getAttribute("data-type");
                }   else if (this.getAttribute("data-type") === "cups-solid") {
                    let conversionType = this.getAttribute("data-type");
                }   else if (this.getAttribute("data-type") === "ounces") {
                    let conversionType = this.getAttribute("data-type");
                }   else if (this.getAttribute("data-type") === "fluid-ounces") {
                    let conversionType = this.getAttribute("data-type");
                }
                
            })
        }

        runConversion("cups-liquid");
    })
})

function runConversion() {

}

function calculateOutput() {

}

function addHistory() {

}

function displayCupsLiquid() {

}

function displayCupsSolid() {

}

function displayOunces() {

}

function displayFluidOunces() {

}