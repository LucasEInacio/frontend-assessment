# FRONT-END ASSESSMENT

This project was created for my interview process at Number8. 
It consists of a React front-end application that consumes from an end point (https://s3.us-west-2.amazonaws.com/cdn.number8.com/LA/listings.json) containing real estate properties.
Under the Houses menu the user will be able to see a list with all the properties retrieved, which can be filtered by accessing the filter section.
The user will be able to visualize each property in more detail by clicking on View Details, where he will have an option to save the property by clicking on Save Property button, and this action will display a modal with all the saved properties.
Also in the View page you will find a Contact Agent form that validates all the inputs to send the contact, and the user will get a notification for validation errors or on success.

## Technologies Used and Others

* React
* SPA
* React Redux
* High-Order Component Pattern (HOC)
* Children Prop
* Material UI Components
* Sass

Now, I am going to explain briefly my choices:
- React Js library for working with reusable components in an SPA website since I saw it'd be useful for the kind of application proposed;
- React Redux for managing variable state across multiple components;
- High-Order Component used to add a notification system that can be used by the entire application;
- Children prop implemented in a shared component (e.g. ModalView) so the more specific components can coordinate some functions;
- A lot of Material UI components were used, and Sass to manipulate the CSS.

## Install and Run

After cloning the repository;
In the project directory, you can run npm install.
Then run npm start.

## Credits

I would like to thank Number8 for the opportunity to participate in the process! I am glad to deliver all the required specifications and the bonus, and count on me to clarify any doubts.