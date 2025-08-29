## 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer: These are very common javascript methods. They are used to select and manipulate elements within the DOM of an HTML document. The differences between them is:
->getElementById: getElementById returns a single element object based on "id" attribute which matches the specified string. If the object is not found, it will return null.
-> getElementsByClassName:  getElementsByClassName returns an HTML collection of all elements based on "class" attribute which have the same class name. By iterating over it, the individual elements can be accessed easily as it is an array like object.
-> querySelector and querySelectorAll: querySelector returns a single element and querySelectorAll returns a list of elements based on the specified CSS selector. But querySelector only returns the first element that matched with the css selector. 

## 2. How do you **create and insert a new element into the DOM**?

Answer: I have to folllow the following steps to create and insert a new element into the DOM:
  -> I have to create a new element by using "document.createElement()"
  -> I have to specified the tag name inside it
  -> I have to add some content for the tag. It can be done by innerText,innerHTML or textContent
  -> I have to insert the element into the document by using appendChild() or append(). It will add the new element at the end of a parent element which i want to add.

## 3. What is **Event Bubbling** and how does it work?

Answer: Event bubbling is the default event flow in JavaScript.Event bubbling is when an event, like a click, starts from the element I clicked and then moves up through its parent elements. For example, if I click a button inside a div, the click first happens on the button, then on the div, then on the body, and so on. If I only want the event to affect the element I clicked, I can stop it from going up by using event.stopPropagation().

## 4. What is **Event Delegation** in JavaScript? Why is it useful?

Answer: I learned about Event Delegation in JavaScript. Basically, instead of putting a click listener on every single child element, I just put one listener on the parent and check which child was clicked. It’s really useful because it saves memory, works for new elements I might add later, and keeps my code simpler. For example, if I have a list of items, I don’t need to add a listener to each item—I can just add one to the list and see which item was clicked.

## 5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer: preventDefault() is used to stop the default behavior of an element and stopPropagation() is used to stop an event from bubbling up or capturing down through parent elements. 
If I click a link, it normally opens a new page, but using preventDefault() I can stop that from happening. And if I click a button inside a div, the click normally also triggers the div’s click event, but stopPropagation() prevents it from reaching the parent.