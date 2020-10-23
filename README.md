# Note Taker

## Description
This note taker has been developed to allow the user to add and delete notes to keep track of tasks or important deadlines. To access the site, click <a href="https://hidden-fortress-15223.herokuapp.com/"> here </a> . It is deployed off of the Heroku website. 

## Technologies used
JavaScript, Nodejs, Express

## Usage
To use this website, click on the link above under "Description".
The homepage will pop up and you will click "Get Started" :
<img src="https://github.com/taylorhackbart/Note-Taker/blob/master/readmeimages/title.png">

Once you have entered the main page, you will see empty page and placeholder text for the title and body portion of your notes. Once you enter a note (MUST have text in title and body to be saved), the save icon will pop up next to the pencil icon:
<img src="https://github.com/taylorhackbart/Note-Taker/blob/master/readmeimages/createnote.png">

Once the note has been saved, it will appear in the side bar with a trashcan next to it, indicating it has been saved and can also be deleted: 
<img src="https://github.com/taylorhackbart/Note-Taker/blob/master/readmeimages/noteadded.png">

If you click on a note that has been saved and would like to create a new note, click the pencil icon in the top left corner:
<img src="https://github.com/taylorhackbart/Note-Taker/blob/master/readmeimages/addnote.png">

## Installation
The package.json file has express, nodemon and uuidv1 saved. Run "npm install" in your terminal to install these packages. If you would like to run the website locally in your server, run "npx nodemon server.js" in your terminal. As nodemon is running, open your broswer and type in "https://localhost:3000/" and this will lead you to the site being hosted locally on your computer.
