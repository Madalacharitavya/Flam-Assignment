# 🔥 Flam Assignment – Bottom Sheet React Component

A responsive, animated Bottom Sheet component built using React with pure CSS and JavaScript logic — **no external animation libraries** used. This application is optimized for both desktop and mobile and showcases modern UI/UX interactions using drag gestures, spring motion, and snap point logic.

![Demo]![Screenshot (143)](https://github.com/user-attachments/assets/3cf15667-ec58-4b66-977b-419fa9933696)


## 🚀 Features

- ✅ Fully functional **Bottom Sheet** component
- ✅ **Three snap points**: Closed, Half-open, Fully-open
- ✅ **Spring motion** animation for smooth transitions
- ✅ **Gesture & Button controls**
- ✅ **Responsive design** for mobile & desktop
- ✅ **Custom styling** and intuitive handle
- ✅ **No third-party animation libraries** (pure CSS/JS)
- ✅ Bonus: Extendable architecture for future improvements


## 📦 Requirements

- Node.js ≥ 14
- npm or yarn
- Git (for version control)

## 📁 Project Setup

```bash
git clone https://github.com/Madalacharitavya/Flam-Assignment.git
cd Flam-Assignment/bottom-sheet-app
npm install
npm start


## 📚 Implementation Overview

### 1. React Application Setup

* Bootstrapped with Create React App
* Uses React Hooks for state management and event handling

### 2. Bottom Sheet Component

* Created as a reusable functional component (`BottomSheet.jsx`)
* Contains drag logic, position snapping, and animation logic

### 3. Snap Points

* Controlled via state:

  * `0%` (Closed)
  * `50%` (Half-open)
  * `100%` (Fully open)
* Snap logic based on drag distance and release velocity

### 4. Spring Motion Animation

* Implemented using `requestAnimationFrame`
* Custom physics (spring tension and friction) simulate spring-like transitions

### 5. User Interaction

* Drag up/down using mouse or touch
* Buttons provided to jump to each state manually

### 6. Styling

* Clean and minimal using CSS
* Custom handle and indicator
* Animations are fully responsive and fluid

### 7. Responsive Design

* Works across mobile, tablet, and desktop views
* Flexbox-based layout with media queries for optimal responsiveness



## 📄 License

This project is licensed under the MIT License.


git commit -m "Added detailed README"
git push origin main
````

Let me know if you'd like me to generate a GIF or organize your images folder too.
