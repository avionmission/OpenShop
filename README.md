# OpenShop - A React Native Template

<img src="https://raw.githubusercontent.com/avionmission/blog/611dc65e1b2063c7b1228f4a9fe9da8f797e1de6/images/2023/bannerforopenshoprepo.png">

OpenShop is a react native template/starter pack for building ecommerce web apps. It provides you with a customizable and scalable base to build your own ecommerce app on. With OpenShop, you can add your own custom features and design, and launch your ecommerce app faster.

## Done:
✅ Setting up `react-navigation`  
✅ Signup and Signin screen with tabs  
✅ Home page Desing  
✅ A carousel widget for displaying ads and other content.  

## Work in Progress:
🔲 Search functionality in `DiscoverScreen.js`  
🔲 Building a Product Details Screen.  
🔲 Setting up `redux`  
🔲 Building Cart feature.  
🔲 Building Wishlist feature.  
🔲 Setting up Firebase for authentication  

## Features List
* Built with React Native, a popular and powerful framework for building cross-platform apps
* It includes basic functionality such as product listings, shopping cart, favourites page, and user authentication.
* Customizable design and layout with pre-built UI components
* Scalable and modular architecture for easy customization and maintenance
* Integration with popular libraries and tools like Redux, React Navigation, and Firebase

## Getting Started
To get started with OpenShop, follow these steps:

1. Clone this repository to your local machine.

2. Install the required dependencies by running `npm install` in the project directory.

3. Start the development server by running `npm start` or `expo start`.

4. Open the Expo client on your iOS or Android device, and scan the QR code displayed in the terminal or web interface to open the app.

### Changing the Logo
1. Replace the assets/icon.png file with your own logo file. The logo file should be a square image with a transparent background, and should be at least 1024x1024 pixels in size.
2. Open the app.json file and replace the expo.icon property with the path to your new logo file. For example:

```json
"expo": {
  "name": "OpenShop",
  "icon": "./assets/new_logo.png",
  "version": "1.0.0",
  ...
}
```
3. Save the app.json file and run the command expo publish to update your app's logo in the Expo client.

### Changing the Icon
Replace the assets/icon.png file with your own icon file. The icon file should be a square image with a transparent background, and should be at least 1024x1024 pixels in size.

1. Open the `app.json file and replace the expo.icon property with the path to your new icon file. For example:
```json
"expo": {
  "name": "OpenShop",
  "icon": "./assets/new_icon.png",
  "version": "1.0.0",
  ...
}
```
3. Save the app.json file and run the command expo publish to update your app's icon in the Expo client.

With these steps, you can easily customize the logo and icon of your OpenShop app to match your branding.