# WhatBreed

Make sure you have python and these libraries installed: tensorflow, flask, numpy. Please also make sure to create a text file called results.txt.

To run this project locally, make sure to create a system variable FLASK_APP and set it equal to "app.py". After doing this, type flask run, and then you can visit the website in your browser by going to localhost:5000.

If you would like to see the live version of the project, please go to http://ec2-54-183-133-236.us-west-1.compute.amazonaws.com/

app.py is the Flask python file that runs the website

bot.py is the discord bot that connects to our team's discord server

label_image.py is the python file provided by TensorFlow that labels the image

retrained.pb is the graph of the trained model_file

upload.html is the html file rendered by Flask that you see when you visit the website

style.css is the css file for the Flask website
