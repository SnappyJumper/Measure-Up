//wait for DOM to fully load before running any JS
document.addEventListener("DOMContentLoaded", function () {
    // asigns start variable to start-button in the html
    let start = document.getElementById("start-button");
    //listens for the start-button to click then runs a function
    start.addEventListener("click", function () {
        let workspace = document.getElementById("workspace");

        workspace.innerHTML = `<div id="calculator">
                <div class="buttons">
                    <button class="options" id="cups-liquid">

                    </button>
                    <button class="options" id="cups-solid">

                    </button>
                    <button class="options" id="ounces">

                    </button>
                    <button class="options" id="fluid-ounces">

                    </button>
                </div>

                <div class="input-measurement">
                    <input type="number">
                </div>
                <div class="submit-area">
                    <button class="submit"><span id="conversion">Please select a unit to convert</span></button>
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
            </div>`
    })
})

function runProgramme() {

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