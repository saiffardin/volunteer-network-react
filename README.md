# volunteer-network-react
 A site where people can opt in to volunteering activities as per their choice. 


## Key Features

* A variety of volunteering activities is provided in the home page. All these activities are fetched from database.
* Clicking on the *Join Campaign* button of any of these activities -
    * will take a **logged in user** to the registration form of that particular activity that the user has clicked.
    * otherwise, will take user to the login page - where user has to do the login first. And he will redirected to the registration page.

* User has to login with his GOOGLE account.
* User can see all his registered activities in his *Events* tab. He can also *cancel/delete* any of his registered activities there.

* In registration form there are five fields: 
    * 'Full Name' and 'Email' fields are set when the user makes a successful login.
    * 'Date' field is a calender type, where user can select a convenient date for volunteering.
    * In 'Description' user can put his longings to the authority.
    * 'Volunteering For' field will set in an automatic manner whenever user clicks any of the activities in his *Home* page.
    


## Tools and Technologies

* Framework: React, Express, Bootstrap.
* Language: JavaScript.
* Database: MongoDB.
* Libraries: React Router, Bootstrap Card, Bootstrap Form.
* Authentication: Firebase Auth.

