const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!
const color1 = getInput(1)
const color2 = getInput(2)

if (color1 === undefined && color2 === undefined) {
    console.log('Please enter at least one color');

} else if (color2 === undefined) {

    let oneColor = colorDeconstructor(color1)
    if (isValidSecondary(color1)) {
        console.log(`Your color is a combo of ${oneColor}`)
    } else {
        console.log('please choose orange, purple or green')
    }

} else { 

    if (!isValidPrimary(color1) || !isValidPrimary(color2)) {   
        console.log('Please enter two primary colors.  Primary colors consist of; red, blue or yellow')
    } else {
        const twoColors = colorCombinator(color1, color2)
        console.log(`your colors combined will give you ${twoColors}`)
    }
    
}

