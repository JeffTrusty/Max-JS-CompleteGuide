# Max-JS-CompleteGuide

## Use back-tick for strings you want to use  ${variable} -- AKA string interpolation

## Place JavaScript links in the head section, but include the defer attribute. This allows the browser to start loading the JS files sooner. This will reduce the latency of the site. If the JS files don't rely on anything in the HTML document, then use the async attribute. Then the browser will parse them immediately. The defer attribute guarantees the loading order where async does not.

''' JavaScript
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Basics</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"/>
    <link rel="stylesheet" href="assets/styles/app.css" />
    <script src="assets/scripts/vendor.js" defer></script>
    <script src="assets/scripts/app.js" defer></script>
  </head>
'''

## Reference links

''' text
MDN => JavaScript Basics     : https://developer.mozilla.org/en-US/docs/Web/JavaScript
MDN =>            Variables  : https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables
MDN =>            Operators  : https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math
MDN =>            Functions  : https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions
MDN =>            Arrays     : https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
MDN =>            Objects    : https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
MDN =>            Precedence : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
'''

## Coding convention. When creating global constant variables make the variable name all upper case and seperate words with _ IE: ATTACK_VALUE = 10;
