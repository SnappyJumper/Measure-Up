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
3. [Technologies Used]()
    1. [Languages Used]()
    2. [Frameworks, Libraries and Programs Used]()
4. [Testing]()
    1. [Testing User Stories]()
    2. [Code Validation]()
    3. [Accessibility]()
    4. [Tools Testing]()
    5. [Manual Testing]()
5. [Finished Product]()
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

The colours used throughout the project are as follows: 

* #FFFFFF for the heading text

* #000000 for the boarders and the main body text

* #4A5123 for the background colour of the header and footer. Also in the box shadow colour of the workspace on larger screens.

* #996515 for the background colour of the welcome message and in the accordion tab. Also found in the buttons and input box, when interacted with, and as part of the box shadow colour of the workspace on larger screens.

* #9A351E for the start, conversion and submit buttons as part of a radial-gradient. Also in the hovers for the social media links.

* #DD2D2D for the start, conversion and submit buttons as part of a radial-gradient.

* #606060 for the box shadow on the header and the accordion tab.

* #fff and #D6D6E7 are found in the input box

The shades of green and gold add a feel of elegance to the site, while the shades of red add a nice contrast and make the buttons stand out.

### Typography

The main font used in the site is Poppins from Google Font with a back up of sans-serif, should it fail to load. Maname, also from Google Fonts, is used for all headings and subheadings including the logo. It is backed up by serif should it fail to load.

### Wireframes

[Balsamiq] (https://balsamiq.com/) was the software used to generate wireframe mock-ups of the site and to demonstrate the placement of the elements within the page.

Page | Desktop | Mobile
--- | --- | ---
Welcome Page | ![Welcome Page Wireframe Desktop](assets/readme-files/balsamiq-desktop-wireframe-1.png) | ![Welcome Page Wireframe Mobile](assets/readme-files/balsamiq-mobile-wireframe-1.png)
Tool Section (Accordion Tab Undeployed and Deployed)| ![Tool Section Wireframe Desktop Tab Undepoyed](assets/readme-files/balsamiq-desktop-wireframe-2.png) ![Tool Section Wireframe Desktop Tab Deployed](assets/readme-files/balsamiq-desktop-wireframe-3.png) | ![Tool Section Wireframe Mobile Tab Undeployed](assets/readme-files/balsamiq-mobile-wireframe-3.png) ![Tool Section Wireframe Mobile Tab Deployed](assets/readme-files/balsamiq-mobile-wireframe-2.png)

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

    - The social media Icons highlight when the cursor is hovered over them.

    - Clicking one of the links will open the corresponding site in a separate tab. This is useful for easy navigation back to the Measure Up page.

### Welcome Screen

* Mobile

![Welcome Screen Mobile](assets/readme-files/welcome-screen-img.png)

* Desktop

![Welcome Screen Desktop](assets/readme-files/welcome-screen-desktop.png)

* **Hero Image**

    - The hero image was selected because scales have everything to do with the purpose of the site.

    - The image is elegant and simple which complements the design of the site.

* **Start Button**

    - The start button's purpose is to alter the page so that it displays the tool screen.

    - The start button is styled to stand out against the rest of the page and is inviting to press.

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