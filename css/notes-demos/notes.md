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
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
