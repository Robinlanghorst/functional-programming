// FIRST NEW: oogKleur to UpperCase with arrow function
let surveyAnswers = data // requires data from data.js
console.log("Survey answers:", surveyAnswers)

var columnName = "watWilJeWorden"
var frontendDev = "Frontend Developer"
/* var hexBlue = "0099ff"
var hexGreen = "009900"
var rgbCode = "(139,69,19)" */

// Source: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
/* function componentToHex (c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return componentToHex(r) + componentToHex(g) + componentToHex(b);
} */

/* const replaceAll = surveyAnswers.map(answer => answer[colomnName]
    .replace("#", "")
    .replace(" ", "")
    .toUpperCase()
    .replace("BRUIN", hexBrown)
    // Replace blue and lightblue for 1 hex
    .replace("BLAUW", hexBlue)
    .replace("LICHT", "")
    .replace("GROEN", hexGreen)
    // Replace RGB for hex
    .replace("RGB", "")
    .replace(".", ",")
    .replace(rgbCode, (rgbToHex(139,69,19)))
    .replace("", "#")
); */

// Arrow function 
var replaceAll = surveyAnswers.map(answer => answer[columnName]
        .toUpperCase()

    
    /*     .replace("FRONTENDDEVELOPER", frontendDev)
        .replace("FRONT-ENDDEVELOPER*", frontendDev)
       .replace("FRONTEND/WEBDEVELOPER", frontendDev) */
  
);
function spelling(input) {
    let frontGrammar = ["FRONTEND", "FRONTENDER", "FRONT-END"]

    if (input === "FRONTENDDEVELOPER")
    return input


else if (input !== "FRONTENDDEVELOPER"){
    return input.replace(input, "FRONTENDDEVELOPER")
}
}
spelling(input);
console.log(replaceAll)

