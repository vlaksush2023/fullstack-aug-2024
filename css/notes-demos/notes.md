# Introuction

## What is CSS ?
CSS stands for Cascading Style Sheets. It’s a language used to style the visual appearance of web pages. CSS allows us to control the layout, colors, fonts, spacing, and much more, making our web pages look polished and visually appealing.


## Why CSS ?
Think of HTML as the structure or skeleton of a web page, like the walls and floors of a house. CSS is the paint, decorations, and furniture that make the house look beautiful. Without CSS, all web pages would look plain and unstyled—just a bunch of text and boxes.


## CSS Versions
CSS has evolved over time. We started with the basic version, CSS1, which was very limited. Then came CSS2, which added more layout options. Most teams today use CSS3, which introduced exciting features like animations, transitions, and flexible layouts.

CSS3 allows us to build modern, responsive websites that work across all devices—phones, tablets, and desktops.


# CSS Styling Approaches

## Introduction to CSS Property and Value
Before diving into CSS approaches, it’s important to understand how CSS works. In CSS, we style elements by using properties and values.

The property is what you want to change (e.g., color, font-size, background-color).
The value is how you want to change it (e.g., red, 16px, blue).

Example : 
```js
h1{
    color:blue; /* property:value */
}
```

## Inline CSS
Inline CSS styles are written directly inside an HTML element using the style attribute. This is useful for applying quick, small changes.

Note: Inline styling is applied directly to elements within HTML tags, which has the highest specificity but is harder to maintain.

### Demo
#### index.html
```js
<h1 style="color: blue;">Hello CSS!</h1>
```


## Internal CSS
Internal CSS is written inside the `<style>` tag within the `<head>` of the HTML file. This is good for styling a single page.

Note: Internal styles are defined within the `<style>` tag in the HTML file, and they apply only to that page.

### Demo
#### index.html
```js
<html>
<head>
  <style>
    h1 {
      color: red;
    }
  </style>
</head>
<body>
  <h1>Hello CSS!</h1>
</body>
</html>
```


## External CSS
External CSS is written in a separate `.css` file and linked to the HTML document using the `<link>` tag. This is ideal for styling multiple pages.

Note: External styles are stored in a separate file, making it easier to maintain and apply styles across multiple pages.

### Demo
#### index.html
```js
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Hello World!</h1>
</body>
</html>
```
#### styles.css
```css
h1 {
  color: green;
}

```


# Selectors and Styling
Selectors in CSS are like "pointers" that tell the browser which HTML elements to apply styles to. We use different types of selectors to target elements in various ways.

## Basic Selectors


### Element Selector
The element selector targets all elements of a specific type, like all `<p>`, `<h1>`, or `<div>` tags.

Note: This applies styles to all instances of the specified HTML tag.

#### Demo
```css
p{
    color:blue;
}
```


### Class Selector
The class selector targets elements that have a specific class attribute. Classes can be reused across multiple elements.

Note: To target a class, we use a period (.) followed by the class name.

#### Demo
```css
.highlight {
  background-color: yellow;
}
/* This will give all elements with the class "highlight" a yellow background. */
```


### ID Selector
The ID selector targets a specific element with a unique id attribute. IDs should be unique within a page.

Note: To target an ID, we use a hash (#) followed by the ID name.

#### Demo
```css
#main-heading {
  color: green;
}
/* This will make the element with the ID "main-heading" green. */
```

### CSS Priority (Specificity)
When multiple styles are applied to the same element, CSS uses specificity to determine which rule takes priority. Specificity is like the "weight" of a rule—the higher the specificity, the more likely it will be applied.

```bash
    Inline styles (inside the style attribute of an element) have the `highest` priority.  

    ID selectors have a higher specificity than class or element selectors`.

    Class selectors have lower specificity than IDs but higher than element selectors.

    Element selectors have the lowest specificity and are overridden by classes, IDs, and inline styles.

```
**Note:**

Important!
You can use `!important` to force a style to override others. However, this should be used sparingly as it bypasses the natural flow of CSS specificity.
```css
p {
  color: black !important;
}

```


### Combining Classes: Multiple Classes in One Element
In CSS, you can apply multiple classes to a single element by separating class names with a space. This allows you to mix and match different styles for an element.

Note: When combining classes, the styles from all applied classes will be combined. If there are conflicting styles, the class that appears last in the stylesheet will take precedence (unless overridden by specificity).

#### Demo 
##### index.html
```html
<p class="text-bold text-italic">This is bold and italic text.</p>
```
##### styles.css
```css
.text-bold {
  font-weight: bold;
}

.text-italic {
  font-style: italic;
}
```
This will result in a paragraph that is both bold and italic.


## Advanced Selectors
Now, let’s move on to Advanced Selectors. These selectors give us more control over targeting specific elements based on their relationships, attributes, or positions in the document.

### Descendant Selector ( )
Targets elements that are descendants (inside) of another element.

Note: Use a space between the selectors to indicate the relationship.

#### Demo
```css
div p {
  color: red;
}
/* This will apply red color to all paragraphs that are inside a <div>. */
```

### Child Selector (>)
Targets direct child elements of a specific parent.

Note: Use `>` between the selectors to indicate direct parent-child relationship.

#### Demo
```css
div > p {
  color: purple;
}
/* This will apply purple color to paragraphs that are direct children of a <div>. */
```

#### Demo
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Child Selector Example</title>
  <style>
    /* Child Selector */
    div > p {
      background-color: lightblue;
    }
  </style>
</head>
<body>
  <div>
    <p>This is a direct child of the div (styled with lightblue background).</p>
    <div>
      <p>This is a child of another div inside the main div (not styled).</p>
    </div>
  </div>
</body>
</html>
<!-- 
The first <p> is a direct child of the <div> element, so it gets the lightblue background.

The second <p> is not a direct child (it's a grandchild) of the main <div>, so it doesn't get the style applied.
-->
```

### Adjacent Sibling Selector ( + )
Targets an element that is immediately after another element.

Note: Use + to target the immediate next sibling.

#### Demo
```css
h1 + p {
  background-color: lightgray;
}
/* This will apply a light gray background to the paragraph immediately following an <h1>. */
```

#### Demo
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Adjacent Sibling Selector Example</title>
  <style>
    /* Adjacent Sibling Selector */
    h2 + p {
      background-color: lightgreen;
    }
  </style>
</head>
<body>
  <h2>This is a heading (no style applied).</h2>
  <p>This paragraph is the adjacent sibling of the h2 (styled with lightgreen background).</p>
  <p>This paragraph is not immediately after the h2 (not styled).</p>
</body>
</html>
<!-- 
The first <p> immediately follows the <h2> and is its adjacent sibling, so it gets the lightgreen background.

The second <p> is not an adjacent sibling of <h2>, so it doesn't get the style. 
-->
```


### General Sibling Selector ( ~ )
Targets all sibling elements after a specified element.

Note: Use ~ to target all siblings.

#### Demo
```css
h1 ~ p {
  background-color: lightpink;
}
/* This will apply a light pink background to all paragraphs that are siblings of an <h1>.  */
```

#### Demo
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>General Sibling Selector Example</title>
  <style>
    /* General Sibling Selector */
    h2 ~ p {
      background-color: lightcoral;
    }
  </style>
</head>
<body>
  <h2>This is a heading (no style applied).</h2>
  <p>This paragraph is a general sibling of the h2 (styled with lightcoral background).</p>
  <p>This paragraph is also a general sibling of the h2 (styled with lightcoral background).</p>
</body>
</html>

<!-- 
Both paragraphs are general siblings of the <h2>, so they both get the lightcoral background, even though they are not adjacent.
-->
```


# Typography, Colors, and Background Properties

## Font Properties
Font properties control how text appears, such as font type, size, weight (boldness), and style (italic).

Common font properties include font-family, font-size, font-weight, and font-style.


### Demo
```html
<!DOCTYPE html>
<html lang="en">
<head>
   <title>Font Properties Demo</title>
  <style>
    h1 {
      font-family: Arial, sans-serif;
      font-size: 36px;
      font-weight: bold;
      font-style: italic;
    }
    p {
      font-family: 'Times New Roman', serif;
      font-size: 16px;
      font-weight: normal;
      font-style: normal;
    }
  </style>
</head>
<body>
  <h1>Heading with Font Properties</h1>
  <p>This paragraph uses different font properties.</p>
</body>
</html>

```
### Shorthand Usage:
Instead of specifying each property separately, we can use the font shorthand property to combine these properties.

```css

font: font-style font-weight font-size/line-height font-family;


h1 {
  font: italic bold 24px/30px Arial, sans-serif;
}


```

## Text Properties

Text properties adjust the alignment, spacing, and transformation of text.

Common text properties include text-align, text-transform, letter-spacing, line-height, and text-indent.

### Demo
```html
<!DOCTYPE html>
<html lang="en">
<head>
   <title>Text Properties Demo</title>
  <style>
    h1 {
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    p {
      text-align: justify;
      line-height: 1.5;
      text-indent: 20px;
    }
  </style>
</head>
<body>
  <h1>Heading with Text Properties</h1>
  <p>This paragraph demonstrates various text properties, including alignment, line height, and indentation.</p>
</body>
</html>

```

### Shorthand Usage
While there's no direct shorthand for all text properties, individual properties like line-height can be included in the shorthand font property, as seen above.

Additionally, you can combine spacing and alignment within a single declaration block.

```css
p {
  text-align: justify;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 1.5;
  text-indent: 20px;
}

```

## Color Properties
Color properties allow you to change the color of text and links.

Use the color property for text color. You can also apply hover effects using :hover.

### Demo
```html
<!DOCTYPE html>
<html lang="en">
<head>
   <title>Color Properties Demo</title>
  <style>
    h1 {
      color: darkblue;
    }
    p {
      color: darkred;
    }
    a {
      color: green;
      text-decoration: none;
    }
    a:hover {
      color: orange;
    }
  </style>
</head>
<body>
  <h1>Heading with Color Properties</h1>
  <p>This paragraph shows color properties.</p>
  <a href="#">This is a link with color properties.</a>
</body>
</html>

```
### Colors Type
Colors in CSS can be specified in multiple ways: using named colors, hexadecimal values, RGB values, and RGBA values (which include transparency).


#### Named Colors: 
Predefined color names such as red, green, blue, etc.

```css
color: red;
```

#### Hexadecimal: 
Represented by # followed by 3 or 6 hexadecimal digits, such as #FF5733 or #F60.

```css
color: #FF5733;
```

#### RGB (Red, Green, Blue): 
Specifies colors using rgb(red, green, blue) values, where each value ranges from 0 to 255.

```css
color: rgb(255, 87, 51);
```

#### RGBA (Red, Green, Blue, Alpha): 
Similar to RGB but with an added alpha (opacity) value ranging from 0 (fully transparent) to 1 (fully opaque).

```css
color: rgba(255, 87, 51, 0.5); /* Semi-transparent orange */
```

#### Demo
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    .named-color {
      color: red; /* Named Color */
    }
    .hex-color {
      color: #FF5733; /* Hexadecimal Color */
    }
    .rgb-color {
      color: rgb(255, 87, 51); /* RGB Color */
    }
    .rgba-color {
      color: rgba(255, 87, 51, 0.5); /* RGBA Color with 50% opacity */
    }
  </style>
</head>
<body>
  <p class="named-color">This text is red (Named Color).</p>
  <p class="hex-color">This text is orange (Hexadecimal Color #FF5733).</p>
  <p class="rgb-color">This text is orange (RGB Color rgb(255, 87, 51)).</p>
  <p class="rgba-color">This text is semi-transparent orange (RGBA Color rgba(255, 87, 51, 0.5)).</p>
</body>
</html>

```

## Background Properties
Background properties control the background of elements, including colors and images.

Common background properties include background-color, background-image, background-position, background-repeat, and background-size.

Shorthand Usage:
You can use the background shorthand property to combine all background-related properties into a single declaration.

### Syntax
```css
{
background: background-color background-image background-repeat background-position/background-size;
}
```

### Example
```css
div {
  background: lightgrey url('image.jpg') no-repeat center/cover;
}
```

### Demo1 - background-color
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    body {
      background-color: lightblue; /* Background Color for the body */
    }
    .container {
      background-color: lightgreen; /* Background Color for a div */
      padding: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <p>This div has a light green background.</p>
  </div>
</body>
</html>

```

### Demo2 - background image
```box
  1. The `background-image` property sets an image as the background.  
  2. The `background-repeat` property controls whether the image repeats.  
  3. The `background-position` property sets the starting position of the background image.  
  4. The `background-size` property determines the size of the background image.  
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <style>
        body {
            background-image: url("../images/html.jpeg");
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 200 500;
            background-attachment: fixed;
        }
        .box{
            background-image:url("../images/image2.jpeg");
            background-position: top right;
        }
  </style>
</head>
<body>
  <h1>Welcome to My Page</h1>
  <div class="box">
    <p>Box paragraph</p>
  </div>
  <p>This page has a background image covering the entire body.</p>
</body>
</html>

```

# Box Model and Positioning
The Box Model is the fundamental layout model in CSS. Every element on a webpage is a box composed of several layers

Content: 
  The actual content inside the element (e.g., text, image, etc.).  

Padding: 
  Space between the content and the element’s border.  

Border: 
  The border surrounding the padding and content.  

Margin: 
  Space outside the border, separating the element from other elements.

## Box Model with Content, Padding, Border, and Margin
Each box layer adds space around the content.

The box-sizing property controls how the width and height 
are calculated (content-box vs. border-box).

### Demo (Box)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    .box {
      width: 200px;
      height: 100px;
      padding: 20px;
      border: 5px solid blue;
      margin: 30px;
      background-color: lightyellow;
    }
  </style>
</head>
<body>
  <div class="box">
    <p>This is the content inside the box.</p>
  </div>
</body>
</html>
```


## Positioning

CSS offers different ways to position elements on a page

Static Positioning: This is the default; elements are placed in the normal document flow.

Relative Positioning: Elements are positioned relative to their normal position in the flow.

Absolute Positioning: Elements are positioned relative to their nearest positioned ancestor (or the viewport if none exists).

Fixed Positioning: Elements are positioned relative to the viewport and do not move when the page scrolls.

z-index Property: Controls the stacking order of positioned elements (higher z-index appears in front of lower ones).

### Static and Relative Positioning

Static: Elements appear in the normal flow of the document.
Relative: Elements can be offset using top, left, right, and bottom but still occupy their original space.

### Demo
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    .box-static {
      width: 150px;
      height: 100px;
      background-color: lightblue;
    }
    .box-relative {
      width: 150px;
      height: 100px;
      background-color: lightgreen;
      position: relative;
      top: 20px; /* Move 20px down */
      left: 20px; /* Move 20px right */
    }
  </style>
</head>
<body>
  <div class="box-static">
    <p>Static Position</p>
  </div>
  <div class="box-relative">
    <p>Relative Position</p>
  </div>
</body>
</html>

```

### Absolute Positioning
Absolute: Elements are removed from the normal flow and placed relative to their nearest positioned ancestor or the viewport.

### Demo
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    .container {
      position: relative;
      width: 300px;
      height: 200px;
      background-color: lightgray;
    }
    .box-absolute {
      width: 100px;
      height: 100px;
      background-color: lightcoral;
      position: absolute;
      top: 10px; /* Position within the container */
      right: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <p>This is a container.</p>
    <div class="box-absolute">
      <p>Absolute Box</p>
    </div>
  </div>
</body>
</html>

```

## z-index Property
The z-index property controls the stack order of overlapping elements.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    .box1 {
      width: 150px;
      height: 150px;
      background-color: lightblue;
      position: relative;
      z-index: 1; /* Lower z-index */
    }
    .box2 {
      width: 150px;
      height: 150px;
      background-color: lightgreen;
      position: relative;
      top: -50px;
      left: 50px;
      z-index: 2; /* Higher z-index, will appear on top */
    }
  </style>
</head>
<body>
  <div class="box1"></div>
  <div class="box2"></div>
</body>
</html>

```

## Display: inline vs inline-block vs block

display: inline;
Inline elements do not start on a new line and only take as much width as needed. Padding, margin, height, and width properties do not apply.

display: inline-block;
Like inline elements, but padding, margins, height, and width can be applied.

display: block;
Block elements start on a new line and take up the full width available.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inline vs Inline-Block vs Block</title>
    <style>
        .inline {
            display: inline;
            background-color: lightblue;
            padding: 10px 20px;
            border: 2px solid navy;
            margin: 5px;
        }

        .inline-block {
            display: inline-block;
            background-color: lightcoral;
            padding: 10px 20px;
            border: 2px solid darkred;
            width: 150px;
            height: 50px;
            margin: 5px;
        }

        .block {
            display: block;
            background-color: lightgreen;
            padding: 10px 20px;
            border: 2px solid green;
            margin: 5px;
            width: 150px;
            height: 50px;
        }
    </style>
</head>
<body>
    <div class="inline">Inline Element</div>
    <div class="inline">Another Inline</div>
    <br>
    <div class="inline-block">Inline-block Element</div>
    <div class="inline-block">Another Inline-block</div>
    <br>
    <div class="block">Block Element</div>
    <div class="block">Another Block</div>
</body>
</html>


## Box Shadow and Text Shadow
box-shadow
Adds shadows around an element’s frame, which can create depth and visual interest.

text-shadow
Adds shadows to text, which can make text stand out.


```css
<style>
  .box { width: 200px; height: 100px; background-color: lightblue; 
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3); margin: 10px; 
  }
  .text { 
    font-size: 24px; 
    color: navy; 
    text-shadow: 2px 2px 5px gray; }
</style>

<div class="box">This is a box with shadow</div>
<p class="text">Text with shadow effect</p>

```

## CSS Grid Layout
CSS Grid is a two-dimensional layout system that allows you to arrange content into rows and columns.

```css
<style>
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
    background-color: lightgray;
  }
  
  .grid-item {
    background-color: coral;
    padding: 20px;
    text-align: center;
  }
</style>

<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>

```

## CSS Flexbox Layout
Flexbox is a one-dimensional layout model that helps align and distribute space among items in a container, even when the size of the items is unknown.

<style>
  .flex-container {
    display: flex;
    justify-content: space-around;
    background-color: lightblue;
    padding: 10px;
  }
  
  .flex-item {
    background-color: coral;
    padding: 20px;
  }
</style>

<div class="flex-container">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>


##  Responsive Design with Media Queries
Responsive design makes your web page adapt to different screen sizes and devices, ensuring it looks good on mobile, tablet, and desktop. Media queries are used to apply different styles depending on the screen width or device.

```css
<style>
  .responsive-box {
    background-color: coral;
    width: 100%;
    padding: 20px;
    text-align: center;
  }

  /* For screens wider than 600px */
  @media (min-width: 600px) {
    .responsive-box {
      background-color: lightblue;
      width: 50%;
    }
  }

  /* For screens wider than 900px */
  @media (min-width: 900px) {
    .responsive-box {
      background-color: lightgreen;
      width: 30%;
    }
  }
</style>

<div class="responsive-box">Resize the window to see changes</div>

```

## Viewport Units
Viewport units like vw (viewport width) and vh (viewport height) allow elements to scale based on the size of the viewport.

```css
<style>
  .viewport-box {
    width: 50vw;
    height: 50vh;
    background-color: lightcoral;
    text-align: center;
    line-height: 50vh;
  }
</style>

<div class="viewport-box">50% of Viewport</div>

```
## CSS Variables
CSS variables (also known as custom properties) allow you to store values that can be reused throughout your CSS.

```css
<style>
  :root {
    --main-bg-color: coral;
    --main-text-color: white;
  }

  .variable-box {
    background-color: var(--main-bg-color);
    color: var(--main-text-color);
    padding: 20px;
  }
</style>

<div class="variable-box">Using CSS Variables</div>

```