# twitter-react-js
`Twitter App Clone` v1.02 - Twitter challenge was coded with ReactJS & Material UI. Hosting and database are provided by Google Firebase.

---
Twitter Clone App: https://twitter-react-7ec96.web.app/

---
How To:

To code a web app similar to the one at the domain https://twitter-react-7ec96.web.app/, you'll need to follow several steps. Here's a high-level breakdown:

1. Set up the development environment:
   - Install Node.js and npm (Node Package Manager) if you haven't already.
   - Choose a code editor or integrated development environment (IDE) for development.

2. Create a new React app:
   - Open a terminal or command prompt.
   - Navigate to the desired directory where you want to create your project.
   - Run the following command to create a new React app:
     ```
     npx create-react-app twitter-app
     ```

3. Configure the app:
   - Once the app is created, navigate into the project directory:
     ```
     cd twitter-app
     ```
   - Open the project in your code editor.
   - Modify the `src` directory to build the desired components and functionality for your Twitter app.
   - Update the `public` directory with any required static assets (e.g., images, icons, etc.).
   - Modify the `public/index.html` file to set the correct title and add any necessary meta tags.

4. Set up routing (if applicable):
   - If your app requires multiple pages or routes, install a routing library such as React Router:
     ```
     npm install react-router-dom
     ```
   - Configure the routes in your app by creating the necessary components and defining the routes in a routing configuration file.

5. Implement authentication and authorization (if applicable):
   - Determine the authentication mechanism you want to use (e.g., OAuth, Firebase Authentication, etc.).
   - Follow the documentation for your chosen authentication method to implement user sign-up, login, and logout functionality.
   - Handle user authentication state throughout the app.

6. Connect to a backend (if applicable):
   - Determine the backend services you want to use (e.g., Firebase Realtime Database, Firestore, etc.).
   - Set up the necessary APIs or SDKs to connect your app to the backend services.
   - Implement the required functionality to read and write data to the backend, such as fetching tweets, posting tweets, etc.

7. Style the app:
   - Use CSS or a CSS framework (e.g., Bootstrap, Tailwind CSS) to style your app.
   - Create or modify the necessary CSS files to achieve the desired visual appearance.

8. Test the app:
   - Write unit tests and integration tests to ensure the app's functionality is working as expected.
   - Use testing frameworks like Jest and React Testing Library to write and run tests.

9. Build and deploy the app:
   - Once you are satisfied with your app's functionality and design, build a production-ready version of the app.
   - Run the following command to create an optimized build:
     ```
     npm run build
     ```
   - Deploy the built files to a hosting service like Firebase Hosting or another hosting platform of your choice.

10. Continuously maintain and update the app:
    - Monitor and address any reported issues or bugs.
    - Implement new features or improvements based on user feedback.
    - Keep your dependencies up to date by regularly updating them.

Please note that this is a simplified overview, and the actual implementation details can vary depending on the specific requirements of your Twitter app. Make sure to refer to the documentation of the libraries and services you choose to use for more detailed instructions.



---

Coded by `Kevin Roozrokh`.

Portfolio: https://kevinroozrokh.github.io/

Github: https://github.com/KevinRoozrokh

Email: KevRooz@Outlook.com

---
[![Github](https://img.shields.io/badge/-Github-gray?style=flat-square&logo=Github&logoColor=white)](https://github.com/KevinRoozrokh)
[![Github.io](https://img.shields.io/badge/-Github.io-black?style=flat-square&logo=Github&logoColor=white)](https://kevinroozrokh.github.io/)
[![Linkedin](https://img.shields.io/badge/-LinkedIn-darkblue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/kevin-roozrokh/)
[![Facebook](https://img.shields.io/badge/-Facebook-blue?style=flat-square&logo=Facebook&logoColor=white)](https://www.facebook.com/kevinkayvan/)
[![Instagram](https://img.shields.io/badge/-Instagram-red?style=flat-square&logo=Instagram&logoColor=white)](https://www.instagram.com/donkayvan/)
[![Twitter](https://img.shields.io/badge/-Twitter-teal?style=flat-square&logo=Twitter&logoColor=white)](https://twitter.com/kevinkayvan)

---

**Version Notes //**

Version 1.00
Built using Create-React-App
Styling and icons were designed to match Twitter's newest UI as of April 20, 2021.
Min-width set to 640px for feed.
Max-width set to 640px for images.

Version 1.01
Added hover effects ToolTips. Mouse over icons reveals menu name.
Press and hold on iOS and Android reveal menu name.
This feature was much more complicated to implement than anticipated. Enjoy!

Version 1.02
Max-width set to 640px for feed and images.
Cleaner more compact look for cell phones and mobile devices.

**\*\*\***//REACT JS//\*\*\*\*\*\*\*

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
