### Algorithm & Approach

This is a fully responsive Web App. Beautifully made with React. It saves data to local storage.

I decided to break the user interface into five main components to keep it simple.
1.Header component that has the search-box and a button that brings up the popup form.
2.Content component that displays the filtered Cards if the user has already typed something into the search-box. Otherwise it will display all Cards.
3.Card component that displays the card structure and also has the handlers for the different features (Show/hide button, Edit button, Delete button), it also includes the Copy to Clipboard button and all the JSX related code.
4.Popup component, it's a very simple popup menu that only contains the code to close the popup.
5.PopupForm component, it contains the form that is shown when the user clicks the Add Card Button (The PLUS ICON +) or Edit button.
Every component has comments to explain the various chunks of code.

### Technical Dependencies & Libraries

Code editor: "VS Code 1.69.0"

Libraries & Dependencies:
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-scripts": "5.0.1",
"react-copy-to-clipboard": "^5.1.0". This package makes it easy to copy text to Clipboard,
"react-spring": "^9.4.5". This is a spring-physics based animation library that I have used to create an animation which the user can see on load,
"sweetalert2": "^11.4.20". A really beautiful way to create popup boxes. I have used it to create the Copy to Clipboard alert.

APIs:
"Clearbit API". I have used this API to get the logos for the Card component.

### Limitations

As a Front-End developer I had my limitations with Back-End, that's why I couldn't provide the CRUD REST API endpoints but even though the Web App works perfectly fine and has solid functionality.
