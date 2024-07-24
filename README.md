# Measure Up

![Measure Up Mockup Images](assets/readme-files/responsive-img.png)

Measure Up is a tool to help people transfer Imperial measurements over to Metric.

It is useful for helping bakers, both at home and professional, transfer recipes ingredients over to a system of measurement that they are more used to. 

The website is easy to navigate and logs a history so the user can look back over the conversions they carried out.

Visit the deployed site [here](https://snappyjumper.github.io/Measure-Up/).

## Table of Contents

1. [User Experience (UX)](#user-experience-ux)
    1. [Project Goals](#project-goals)
    2. [User Stories](#user-stories)
    3. [Colour Scheme](#colour-scheme)
    4. [Typography](#typography)
    5. [Wireframes](#wireframes)
2. [Features](#features)
    1. [General](#general)
    2. [Welcome Screen](#welcome-screen)
    3. [Tool Screen](#tool-screen)
3. [Technologies Used](#technologies-used)
    1. [Languages Used](#languages-used)
    2. [Libraries, Frameworks and Programs Used](#libraries-frameworks-and-programs-used)
4. [Testing](#testing)
    1. [Testing User Stories](#testing-user-stories)
    2. [Code Validation](#code-validation)
    3. [Accessibility](#accessibility)
    4. [Tools Testing](#tools-testing)
    5. [Manual Testing](#manual-testing)
5. [Finished Product](#finished-product)
6. [Deployment]()
    1. [GitHub Pages]()
7. [Credits]
    1. [Content]()
    2. [Media]()
    3. [Code]()
8. [Acknowledgements]()

***

## User Experience (UX)

### Project Goals

* The website provides a structure that is both easy to understand and to navigate.

* Has a neat appearance but also colourful enough to give a friendly tone.

* Has a welcome screen to inform the user how to opperate the tool.

* Has a responsive design accessible across a range of devices.

* Prints the result in an easy to read format.

* Writes a history of conversions to a table so the user can look back over their previous calculations.

### User Stories

* As a user, I want the website to be easy to navigate.

* As a user, I want the tool to be easy to use.

* As a user, I want the results to be clear and easy to understand.

* As a user, I want the website to save a history of what I have converted.

* As a user, I want to be able to access this tool on different devices.

### Colour Scheme

![Website Colours](assets/readme-files/colours.png)
The colours used throughout the project are as follows: 

* #FFFFFF for the heading text

* #000000 for the boarders and the main body text

* #4A5123 for the background colour of the header and footer. Also in the box shadow colour of the workspace on larger screens.

* #996515 for the background colour of the welcome message and in the accordion tab. Also found in the buttons and input box, when interacted with, and as part of the box shadow colour of the workspace on larger screens.

* #9A351E for the start, conversion and submit buttons as part of a radial-gradient. Also in the hovers for the social media links.

* #DD2D2D for the start, conversion and submit buttons as part of a radial-gradient.

* #606060 for the box shadow on the header and the accordion tab.

* #D6D6E7 is found in the input box

The shades of green and gold add a feel of elegance to the site, while the shades of red add a nice contrast and make the buttons stand out.

### Typography

The main font used in the site is Poppins from Google Font with a back up of sans-serif, should it fail to load. Maname, also from Google Fonts, is used for all headings and subheadings including the logo. It is backed up by serif should it fail to load.

### Wireframes

[Balsamiq](https://balsamiq.com/) was the software used to generate wireframe mock-ups of the site and to demonstrate the placement of the elements within the page.

Screen | Desktop | Mobile
--- | --- | ---
Welcome Screen | ![Welcome Page Wireframe Desktop](assets/readme-files/balsamiq-desktop-wireframe-1.png) | ![Welcome Page Wireframe Mobile](assets/readme-files/balsamiq-mobile-wireframe-1.png)
Tool Screen (Accordion Tab Undeployed and Deployed)| ![Tool Section Wireframe Desktop Tab Undepoyed](assets/readme-files/balsamiq-desktop-wireframe-2.png) ![Tool Section Wireframe Desktop Tab Deployed](assets/readme-files/balsamiq-desktop-wireframe-3.png) | ![Tool Section Wireframe Mobile Tab Undeployed](assets/readme-files/balsamiq-mobile-wireframe-3.png) ![Tool Section Wireframe Mobile Tab Deployed](assets/readme-files/balsamiq-mobile-wireframe-2.png)

[Back to top ^](#measure-up)

## Features 

### General

* The website was designed from a mobile first perspective.

* Design is responsive across all device sizes

* **Header**
![Header image](assets/readme-files/header-img.png)

    - The header contains the logo which is also an anchor tag to the page. This is useful should the user wish to navigate back to the welcome screen. 
    
    - The header sits on top of the main content of the site in a fixed position. This allows the user easy access from anywhere on the page

* **Accordion Tab**

    - Tab Closed

    ![Accordion Tab Closed](assets/readme-files/accordion-tab-img-closed.png)

    - Tab Open

    ![Accordion Tab Open](assets/readme-files/accordion-tab-img-open.png)
    
    - On the tool screen there is a accordion tab. 

    - When active the panel under the tab displays information on how to use the conversion tool.

    - The panel slides in and out of view when the tab is clicked on and the symbol on the right of the tab changes from + to -.

* **Unit Buttons**

    - Active

    ![Active Button](assets/readme-files/unit-button-pressed.png)

    - Inactive

    ![Inactive Button](assets/readme-files/unit-button-unpressed.png)

    - The buttons for selecting your starting unit have been styled so that they are responsive to being clicked on.

    - When the button is pressed it raises up afterwards and the colour changes around its edge.

    - When pressed again it returns to its previous appearance.

* **Submit Button**

    - Fluid Ounces selected

    ![Fluid Ounces Submit Button](assets/readme-files/submit-button-change-1.png)

    - Ounces selected

    ![Ounces Submit Button](assets/readme-files/submit-button-change-2.png)

    - The Submit Button is styled in the same way as the Unit Buttons.

    - The text inside the submit button changes depending on what unit button you have selected.

* **Input Box**

    - Input Box in focus

    ![Input Box Focus](assets/readme-files/input-box-clicked.png)

    - Input Box no focus

    ![Input Box No Focus](assets/readme-files/input-box-unclicked.png)

    - The input box highlights when it is in focus

    - After a conversion is complete or a new unit selected the previous input is deleted from the input box and the focus is pulled back to the input box. This is useful so the user doesn’t have to keep clicking on the box everytime. 

* **Output Area and History Table**

    - Table before inputs

    ![Empty History Table](assets/readme-files/output-area-no-input.png)

    - Table after inputs

    ![History Table With Content](assets/readme-files/output-area-with-input.png)

    - The Output gets printed directly to the DOM and is overwritten every time there is a new input calculated.

    - Previous calculations get stored on a history table. This is useful when the user needs to look back over the calculations they've already done.

* **Footer**
![Footer image](assets/readme-files/footer-img.png)

    - The footer contains links to social media sites displayed as icons. 

    - The social media Icons highlight with a transition delay of one second when the cursor is hovered over them.

    - Clicking one of the links will open the corresponding site in a separate tab. This is useful for easy navigation back to the Measure Up page.

### Welcome Screen

* Mobile

![Welcome Screen Mobile](assets/readme-files/welcome-screen-img.png)

* Desktop

![Welcome Screen Desktop](assets/readme-files/welcome-screen-desktop.png)

* **Hero Image**

    - The hero image was selected because scales have everything to do with the purpose of the site.

    - The image is elegant and simple which complements the design of the site.

    - The image moves to the left of the screen on larger screens to better use the space.

* **Start Button**

    - The start button's purpose is to alter the page so that it displays the tool screen.

    - The start button is styled to stand out against the rest of the page and is inviting to press.

    - The start button, along with the welcome image move to the right of the screen on larger screens to make better use of the extra space.

### Tool Screen

* Mobile

![Tool Screen Mobile](assets/readme-files/tool-screen.png)

* Desktop

![Tool Screen Desktop](assets/readme-files/tool-screen-desktop.png)

* **Unit And Submit Buttons**

    - The styles of the buttons on the tool page were chosen to stand out and be enticing to press for the user.

    - The layout of the buttons change on larger media devices to better use the extra space.

* **Input Box**

    - The input box is placed to the centre of the screen to better draw the users focus.

    - The width of the box changes to better suit the larger media devices.

[Back to top ^](#measure-up)

## Technologies Used

### Languages Used
* [HTML5](https://en.wikipedia.org/wiki/HTML5)
* [CSS3](https://en.wikipedia.org/wiki/CSS)
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Libraries, Frameworks and Programs Used

* [Google Fonts](https://fonts.google.com/)
    - Google Fonts was used to import the Poppins and Maname fonts to the style.css file. These two fonts were then used throughout the site.

* [Font Awesome](https://fontawesome.com/)
    - Font Awesome was used to add icons to the site. These helped to create a better user experience.

* [Balsamiq](https://balsamiq.com/)
    - Balsamiq was the software used to construct the wireframes for the project in its design stage.

* [GitPod](https://gitpod.io/)
    - GitPod was used to write the code, commit it and push it to GitHub.

* [GitHub](https://github.com/)
    - GitHub was used to store the project in repositories after pushing.

* [Am I Responsive?](http://ami.responsivedesign.is/#)
    - Am I responsive was used to see the responsive design throughout the building of the project and to generate mockup imagery to be used in the readme file.

* [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
    - Chrome DevTools was used throughout the development process to review code and test the responsiveness of the site.

* [W3C Markup Validator](https://validator.w3.org/)
    - W3C Markup Validator was used to validate the HTML code used in the site.

* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
    - W3C CSS Validator was used to validate the CSS code used in the site.

* [JSHint](https://jshint.com/)
    - JSHint's JavaScript Code Quality Tool was used to validate the JavaScript used in the site.

* [Favicon.io](https://favicon.io/)
    - Favicon.io was used to generate the sites favicon.

[Back to top ^](#measure-up)

## Testing

### Testing User Stories

* As a user, I want the website to be easy to navigate.

    - The website is focused to two pages to make it easy to navigate.

    - Buttons on the site stand out so the user knows where to click next.

    - The site has instructions on each page to help the user to take the next step.

* As a user, I want the tool to be easy to use.

    - The tool itself is easy to use, with instructions throughout and a help tab if the user is stuck.

    - User history is automatically presented on the screen so the user only has to convert a measurement once.

* As a user, I want the results to be clear and easy to understand.

    - Results are printed on the screen in an easy to read format with clear indication of which measurement is which.

    - The history table displays all its data in a nice easy to read table.

* As a user, I want the website to save a history of what I have converted.

    - The site saves your previous conversions to a convienient table.

* As a user, I want to be able to access this tool on different devices.

    - The site is responsive across a range of devices.

### Code Validation

* The [W3C Markup Validator](https://validator.w3.org/) and [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) tools were used to validate the HTML and CSS code respectively, ensuring there were no syntax errors.

    - W3C Markup Validator Result 1
    ![Index.html HTML Validation Result 1](assets/readme-files/index-html-validation-result-1.png)
    ![Script.js HTML Validation Result 1](assets/readme-files/js-html-validation-result-1.png)

        - The validator recommended that I add some section headings to the HTML to help identify the individual sections so I added them.

        - The validator also told me that I had unnecessary roles on my buttons so I removed them.

    - W3C Markup Validator Result 2
    ![Index.html HTML Validation Result 2](assets/readme-files/index-html-validation-result-2.png)
    ![Script.js HTML Validation Result 2](assets/readme-files/js-html-validation-result-2.png)

        - After corrections validator resulted in no errors.

    - W3C CSS Validator Result 1
    ![Syles.css CSS Validation Result 1](assets/readme-files/css-validation-result-1.png)

        - The validator pointed out a couple of instances I had used commas in my code where I shouldn't have. I removed them.

        - I removed line 193 in the css as it was not required.

    - W3C CSS Validator Result 2
    ![Syles.css CSS Validation Result 2](assets/readme-files/css-validation-result-2.png)

        - After corrections the validator resulted in no errors.

* The [JSHints JavaScript Code Quality Tool](https://jshint.com/) was used to validate the JavaScript in the site.

    - JSHints Result 1
    ![JShints JavaScript Validation Result 1](assets/readme-files/jsquint-test-results-1.png)

        - The validation warned me about functions calling an outer scoped variable could lead to confusion in semantics. I decided this wasn't a major issue in this project so I took no action.

        - There were a few missing semi-colons in the code. I corrected this issue.

    - JShins Result 2
    ![JShints JavaScript Validation Result 2](assets/readme-files/jsquint-test-results-2.png)

        - After corrections there were no major issues with the code.

### Accessibility

* Lighthouse in Chrome DevTools was used to confirm that the colours and fonts in the site were easy to read and accessible.

* Lighthouse Report

    ![Lighthouse Report](assets/readme-files/lighthouse-test.png)

### Tools Testing

* [Chrome DevTools](https://developer.chrome.com/docs/devtools/) Chrome DevTools was used throughout the duration of the project to test and modify the HTML and CSS code.

* Responsiveness 

    - Chrome Devtools was used during development to check the responsiveness across a range of devices.

    - [Am I Responsive?](http://ami.responsivedesign.is/#) was used to test the responsiveness across a range of devices during development.

### Manual Testing

* Browser Compatibility

Browser | Outcome | Result
--- | --- | ---
Google Chrome | No appearance, responsiveness nor functionality issues. | Pass
Safari | No appearance, responsiveness nor functionality issues. | Pass
Mozilla Firefox | No appearance, responsiveness nor functionality issues. | Pass
Microsoft Edge | No appearance, responsiveness nor functionality issues. | Pass

* Device Compatibility

Device | Outcome | Result
--- | --- | ---
MacBook Pro 13'' | No appearance, responsiveness nor functionality issues. | Pass
Acer Aspire V | No appearance, responsiveness nor functionality issues. | Pass
iPad Pro 10.5'' | No appearance, responsiveness nor functionality issues. | Pass
OnePlus 10 Pro | No appearance, responsiveness nor functionality issues. | Pass
iPhone 15 | No appearance, responsiveness nor functionality issues. | Pass

* Common Elements Testing

    - General

    Feature | Outcome | Result
    --- | --- | ---
    Logo | Anchor tag brings the user to the welcome screen before the JavaScript alters the DOM. | Pass
    Social Links | The icons all display properly and they highlight when hovered on with a transition of one second. When the icons are clicked they open a new tab which displays the relative social media site. | Pass
    
    - Welcome Screen

    Feature | Outcome | Result
    --- | --- | ---
    Start Button | Button's hover and click styles all run properly. When the button is clicked the JavaScript writes new HTML to the page brining the user to the tool screen.

    - Tool Screen

    Feature | Outcome | Result
    --- | --- | ---
    Accordion Button | The accordion button starts off hiding its panel. When it is pressed the panel slides out and the symbol on the right changes from a + to a -. When clicked again the process reverts to its initial state | Pass
    Unit Buttons | The unit buttons clicked, hovered and active styles all run properly. Each individual button alters the submit button in the expected way and when the submit button is pressed the correct conversion, relative to the Unit button pressed, is carried out. | Pass
    Input Box | Input Box pulls focus when each unit button is pressed and the same result with the submit button. The box borders highlight when it is selected. The box will only accept number inputs and only if they are greater than zero and less than one million. It the value violates this then an alert will display. The box deletes whatever input was last placed in it after the submit button is pressed or when a new unit button is pressed. | Pass
    Submit Button | The text within the button changes depending on what unit button is currently pressed. All clicked, hover and active styles are functioning properly. When the submit button is pressed the result gets printed to the page and the result is also added to the history table. If the submit button is pressed when there is no value present in the input box an alert will display asking the user to input a value. | Pass
    Conversion Result | The result gets printed once the submit button is pressed and the heading "Your Conversion:" displays above the result. The result is displayed in an easy to read sentence which includes your original input and unit and the result and its metric unit. | Pass
    History Table | The table accepts additional data every time the submit button is presssed, so long as the value does not violate the conditions of the input box. The data is displayed neatly in clearly labeled collums and the rows print the most recent conversion to the top of the table pushing the rest down. | Pass

    [Back to top ^](#measure-up)

    ## Finished Product

    Screen | Image
    --- | ---
    Welcome Screen (Mobile Version) | ![Final Welcome Screen Mobile](assets/readme-files/final-welcome-screen-mobile.png)
    Welcome Screen (Desktop Version) | ![Final Welcome Screen Desktop](assets/readme-files/final-welcome-screen-desktop.png)
    Tool Screen (Mobile Version) | ![Final Tool Screen Mobile](assets/readme-files/final-tool-screen-mobile.png)
    Tool Screen (Desktop Version) | ![Final Tool Screen Desktop](assets/readme-files/final-tool-screen-desktop.png)

    [Back to top ^](#measure-up)

    ## Deployment

    * This website was developed using [GitPod](https://www.gitpod.io/) and was commited and pushed to GitHub using the GitPod terminal.

    ### GitHub Pages

    * Here are the steps to deploy this website to GitHub Pages from its GitHub repository:

    1. Log into GitHub and find the repository associated with the project [GitHub Repository](https://github.com/).

    2. At the top of the repository locate the settings and click.

    3. Within settings locate the pages section.

    4. In source, change the dropdown menu option from none to Master Branch.

    5. The page should then refresh and generate a link to your site.

    [Back to top ^](#measure-up)

    ## Credits

    ### Content

    * The conversion calculations were taken from my personal notes when I go baking and have to convert from Imperial to Metric.

    ### Media

    * The hero image was from JJ Jordan from the website [https://www.pexels.com/](https://www.pexels.com/photo/yellow-and-red-round-fruit-on-brown-and-white-weighing-scale-9241897/)

    ### Code

    * [Stack Overflow](https://stackoverflow.com/) and [W3Schools](https://www.w3schools.com/) were regularly consulted for inspiration and for help understanding some of the code.

    * The code for the accordion tab was an altered version of W3Schools code found [here](https://www.w3schools.com/howto/howto_js_accordion.asp)

    * The code for styling the buttons was from [getcssscan](https://getcssscan.com/) and the button 29 was modified and used. It can be seen [here](https://getcssscan.com/css-buttons-examples)

    * The styling code for the input box was taken and modified from [copy-paste-css](https://copy-paste-css.com/) and can be seen under the name Algolia [here](https://copy-paste-css.com/form-input-text)

     [Back to top ^](#measure-up)

     ## Acknowledgements

     * My family for their love, support and for paying for this course, I'll pay you back I swear! 

     * My partner, for her love and support throughout this course and the lend of her iPhone 15 for testing!

     * My housemate, for his support and tips. Telling me to go for a walk after coding all day.

     * My mentor, Marcel for his guidance and feedback throughout this project.

     * Code institute, for its great tutor support, learning environment and its helpful Slack community.

     [Back to top ^](#measure-up)