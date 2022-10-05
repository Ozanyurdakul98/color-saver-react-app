# Color Saver App

## Problem

As a developer we often have favorite color schemes we want to use in our small projects. This color saver app helps us to reuse these colors easily and organize them in custom color palettes.

## Userstory #0

### Description

**As a** user  
**I want to** easily access saved colorCodes from colorCards  
**in order to** use them in my other projects.

Different Colorcodes are saved in an array. They are visualised as cards.
When you click on one of the cards the hexcode is saved in the clipboard.

![userstory 0](./assets/color-saver-app-userstory-0.png)

### Hints

- create a `ColorCard` component
- create an array of color objects, e.g.
  ```
  {
    id: '234',
    colorCode: '#ccc'
  }
  ```
- map over this array to create a `ColorCard` for each
- use props to hand over the colorCode
- copying a string to the clipboard (hint: `navigator.clipboard.writeText(text)`)

### Example Solution

[codsandbox](https://codesandbox.io/s/color-saver-assignment-userstory-0-xlwdq8?file=/src/components/ColorBox.js)

## Userstory #1

### Description

**As a** user  
**I want to** add, edit and delete colorCodes from my color list  
**in order to** interact with the saved content.

The user can add hexcodes to the array by using an interactive form. The
form has a color and a text input, both for selecting a colorcode.
On submit, a new card is created.

The hexcode of a color card can be edited by clicking on the code display.
A Card can be deleted by pressing the x button on the card.
The copy functionality from userstory #0 must work as well, except the code is not copied if one of the two events above are activated.

![userstory 1](./assets/color-saver-app-userstory-1.png)

### Hints

- Create a `Form` component
- Handle a complex state on App component level for creating, updating and deleting elements in the color Array
- Use a local state in the `Form` for handling the value of the new color code.
- Pass event handlers from the `App` down to the cards
- Use `event.stopPropagation()` when a button on the card is clicked, such that the copy event is not triggered

### Example Solution

[codsandbox](https://codesandbox.io/s/color-saver-assignment-userstory-1-tf40tu)

## Userstory #2

### Description

**As a** user  
**I want to** access the colors across browser sessions  
**in order to** reuse the colors for a longer period of time.

The Color codes are saved in localstorage, so colors can
be saved across
sessions.

Each color displays a name for the color fetched from the color api:
`https://www.thecolorapi.com/id?hex=<hexcode here>`

![userstory 1](./assets/color-saver-app-userstory-2.png)

### Hints

- controlled inputs
- Create a localstorage with useEffect for the color information
- fetching the name of a color from the - [color API](https://www.thecolorapi.com/) using useEffect as well.

### Example Solution

[codesandbox](https://codesandbox.io/s/color-saver-assignment-userstory-2-4ysp71)

## Super Advanced: Optional Userstory #3

### Description

**As a** user  
**I want to** group my colors into color palettes  
**in order to** organise my color schemes.

Colors are grouped in Color Palettes. Each palette has a name and this can be
edited when clicked on the title.

![userstory 1](./assets/color-saver-app-userstory-3.png)
