# Primary Tags 
```js
<!DOCTYPE html>
<html>

<head>
    <title>HTML Demos</title>
</head>

<body>
    Welcome to Html
</body>

</html>
```
# Basic Tags
```js
<body>
    <h1>
        <marquee direction="right" behavior="slide" scrollamount="5">
            ABC Technologies
        </marquee>
    </h1>
    <hr color="red" />
    <font color="blue" face="Monotype corsiva" size="4">
        <div align="right">
            21/1, <b>Anna Street</b>,<br />
            <u>Chennai -600017</u>,<br />
            <i>Tamilnadu</i>.
        </div>
    </font>
    <hr />
</body>

```
<details>
<summary>More Info</summary>

Heading Tags (h1, h2, h3, h4, h5, h6): Used to define headings.

Attributes: <br />
align: Specifies the alignment of the heading text.
Possible Values: left, center, right (Note: The align attribute is deprecated; use CSS instead.)
<hr />

marquee: Scrolls text horizontally or vertically (deprecated in modern HTML).

Attributes: <br />
1. direction: Specifies the direction of the scroll. <br />
    Possible Values: left, right, up, down  <br />
2. behavior: Specifies the scrolling behavior.  <br />
    Possible Values: scroll, slide, alternate  <br />
3. scrollamount: Specifies the amount of scrolling.  <br />
    Possible Values: Numeric values (e.g., 5)  <br />
4. scrolldelay: Specifies the delay between each scroll movement.  <br />
    Possible Values: Numeric values (e.g., 85)  <br />
<hr />

hr: Horizontal rule used to create a separator.

Attributes:
1. align: Specifies the alignment of the horizontal rule.  <br />
    Possible Values: left, center, right  <br />
2. color: Specifies the color of the horizontal rule.  <br />
    Possible Values: Any valid color value (e.g., red, #ff0000)  <br />
3. size: Specifies the thickness of the horizontal rule.  <br />
    Possible Values: Numeric values (e.g., 2)  <br />
4. width: Specifies the width of the horizontal rule.  <br />
    Possible Values: Numeric values or percentages (e.g., 100%)  <br />
<hr />


font: Defines font color, size, and face (deprecated, better to use CSS).

Attributes:
1. color: Specifies the color of the text.  
    Possible Values: Any valid color value (e.g., blue, #0000ff)  
2. face: Specifies the font family.  
    Possible Values: Font family names (e.g., Arial, Times New Roman)  
3. size: Specifies the font size.  
    Possible Values: Numeric values (1 to 7), or keywords (small, medium, large)  
<hr />
div: Used to group elements for styling or layout purposes.

Attributes:
1. align: Specifies the alignment of the div element.  
    Possible Values: left, center, right (Note: The align attribute is deprecated; use CSS instead.)
   
<hr />
Text Formatting Tags: 

1. b: Bold text.  
    Attributes: None 

2. i: Italic text.  
    Attributes: None  

3. u: Underlined text.  
    Attributes: None  
<hr />




</details>

# List Tags
```js
<body>
    <h2>Course Offered</h2>
    <ol type="1">
        <li>Frontend</li>
        <ul type="circle">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
        </ul>
        <li>Backend</li>
        <dl>
            <dt>Spring Boot</dt>
            <dd>This is Java-based</dd>

            <dt>Node.js</dt>
            <dd>This is JavaScript-based</dd>
        </dl>
        <li>Database</li>
        <ol>
            <li>Oracle</li>
            <li>MySQL</li>
        </ol>
    </ol>
</body>

```
<details>
<summary>More Info</summary>

### Ordered List (ol): Displays numbered items.

#### Attributes:
1. type: Defines the numbering type.  
    Possible Values: 1 (default, numbers), A (uppercase letters), a (lowercase letters), I (uppercase Roman numerals), i (lowercase Roman numerals)  
2. start: Defines the starting number.  
    Possible Values: Numeric values (e.g., 1)

<hr />

### Unordered List (ul): Displays bulleted items.

#### Attributes:
type: Defines the bullet style.  
Possible Values: disc (default), circle, square  

<hr />

### Definition List (dl): Used for terms and descriptions.

### Attributes: None specific to dl, but the following are used with its child elements:
1. dt (Definition Term):
    Attributes: None  
2. dd (Definition Description):
    Attributes: None  

<hr />
</details>

# Table Tags
```js
<body>
    <h2>Frontend Courses</h2>
    <table border="1" width="60%" bgcolor="cyan" cellpadding="5" cellspacing="15">
        <thead>
            <tr>
                <th colspan="4" align="center">Aug 2024 Batch</th>
            </tr>
            <tr>
                <th>Module</th>
                <th>Topics</th>
                <th>Trainer</th>
                <th>Duration</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>HTML</td>
                <td>
                    List Elements <br />
                    Table Elements <br />
                    Form Elements
                </td>
                <td align="center" rowspan="2">Ram</td>
                <td>4 days</td>
            </tr>
            <tr>
                <td>CSS</td>
                <td>
                    Types of Styles <br />
                    Types of Selectors
                </td>
                <td>3 days</td>
            </tr>
            <tr>
                <td>JavaScript</td>
                <td>
                    Functions <br />
                    Control Statements <br />
                    Validation
                </td>
                <td align="center">Krishna</td>
                <td>5 days</td>
            </tr>
        </tbody>
    </table>
</body>

```
<details>
<summary>More Info</summary>

## Table (table): 
Defines a table.  
### Attributes:
1. border: Specifies the border width.  
    Possible Values: Numeric values (e.g., 1, 2) or 0 (no border)  
2. width: Specifies the width of the table.  
    Possible Values: Numeric values or percentages (e.g., 100%, 600px)  
3. cellpadding: Specifies the space between cell content and cell border.  
    Possible Values: Numeric values (e.g., 5 for 5 pixels)  
4. cellspacing: Specifies the space between cells.  
    Possible Values: Numeric values (e.g., 5 for 5 pixels)  
5. bgcolor: Specifies the background color of the table.  
    Possible Values: Any valid color value (e.g., cyan, #00FFFF)  

<hr />

## Table Row (tr): 
Defines a row in the table.
### Attributes:
1. align: Specifies the alignment of content in the row.  
    Possible Values: left, center, right (Note: The align attribute is deprecated; use CSS instead.) 

<hr />

## Table Header (th) or Table Data (td) : 
Defines a header cell in a table.
### Attributes:
1. rowspan: Specifies the number of rows a header cell should span.  
    Possible Values: Numeric values (e.g., 2)  
2. colspan: Specifies the number of columns a header cell should span.  
    Possible Values: Numeric values (e.g., 2)  
3. align: Specifies the alignment of the content in the header cell.  
    Possible Values: left, center, right (Note: The align attribute is deprecated; use CSS instead.)  
4. bgcolor: Specifies the background color of the header cell.  
    Possible Values: Any valid color value (e.g., yellow, #FFFF00)  

<hr />

</details>



