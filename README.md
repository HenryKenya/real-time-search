This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Why the App?

I built the app to practice on using arrays to filter out in reactjs, learn how to pass props from parent to child, understand the use of filter method in reactjs and to practice on states.

## What the app does

The app has a library of "searches" which are filtered when a user inputs a value. The string is matched against the array and the resulting strings matching those in the library array returned.

It does not do external search.

The library array has the name and url as the key value pairs. The target is the user input.

The initial state of the input text field area is null. If there is anychange in the input text field, the handleChange() method is fired. The new state thus becomes the new value input.

The filter method checks to see if the searchString length is more than one (meaning that search string is no longer null). 

Both the searchString and library are trimed for any whitespaces and changed to lowercase to make filtering easy.

Libraries is passed as props from the parent index.js to the child Search.js as items.

## Future thoughts

I will update the repo using the wikipedia API. But first, just learning the ropes of react.

MaterializeCSS is used because it's awesome!!!
