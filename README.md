# TDOA Project React Website
    
This project contains a website which is the interface for the Time Difference of Arrival project. It shows the latest location
of the robot, which is created by the akgorithm created in [this repository](https://github.com/melikebilen/TDOA_Project/tree/tdoaFirebase)

## Tutorials
This project was inspired by the tutorials:
* [Firebase + React: Real-time, Serverless Web Apps Course](https://frontendmasters.com/courses/firebase-react/)
* [React Website Tutorial](https://www.youtube.com/watch?v=I2UBjN5ER4s&t=1s )
* [Full React Course 2020](https://www.youtube.com/watch?v=4UZrsTqkcW4)

## Version
```
Node.js: v13.13.0
```

## Dependencies
```
  "dependencies": {
    "bootstrap": "^5.0.2",
    "firebase": "^8.4.3",
    "react": "^17.0.2",
    "react-bootstrap": "^1.6.1",
    "react-dom": "^17.0.2",
    "react-router": "^5.2.0",
    "react-router-dom": "^5.2.0"
  },
```

## The Folder Structure
```
  README.md
  node_modules/
  package.json
  package-lock.json
  .gitignore
  public/
    index.html
    favicon.ico
    404.html
    images/
    videos/
  src/
    components/
      Navbar.css
      Navbar.js
      HeroSection.css
      HeroSection.js
      ResourcesPage.js
      AboutUsPage.js
      AboutRobotPage.js
      AboutRobot.css
      pages/
        AboutRobot.js
        AboutUs.js
        Home.js
        Resources.js
    App.css
    App.js
    App.test.js
    index.css
    index.js
```

   ## Steps to use the code
   
    1) Make sure you have the IDE that you prefer, I have used Visual Studio Code.
   
    2) After setting up the environment, you can download the zip file. You should unzip the file that you have downloaded. 
    
      Then open the file at the IDE you prefer.
    
    3) Make sure you have Node.js installed in your computer. 
    
    4) Make sure you have all the dependencies mentioned above.
    
    5) Create a Firebase project, it should contain Real-time database and Storage. You should use the
        
       repository mentioned above in collaboration. Make sure you follow the steps there
        
       and run the code, so that your database will contain the data to represent
       
    6) Go to firebase.js file and change the APIConfiguration, you should be able to find 
        
       what to replace it with in Firebase, navigate to your project, go to settings, scroll 
        
       down and you are going to see the APIConfiguration.
       
    7) Go to your Firebase storage and get the url of the xyplot.png's URL. Paste that URL in line 12, in 
    
       Home.js file.
       
    8) Go to package.json file, change the 5th line's link with the following 
       
       https://{the github username}.github.io/{the name of the repository that would be deployed} 
        
    9) After making all these changes, run npm start to see the website in the local host. If you want
    
       to deplot the website, run npm run deploy and check out the repository. 
      
    10) I hope you can make a good use of this repository! If you need to use it, you are free to do so, 
    
        if you have questions please reach me via e-mail: bilenmelike@gmail.com
   
     
