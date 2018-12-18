# WhatBreed Web

Make sure you have python and these libraries installed: tensorflow, flask, numpy. Please also make sure to create a text file called results.txt.

To run this project locally, make sure to create a system variable FLASK_APP and set it equal to "app.py". After doing this, type flask run, and then you can visit the website in your browser by going to localhost:5000.

If you would like to see the live version of the project, please go to http://ec2-54-183-133-236.us-west-1.compute.amazonaws.com/

app.py is the Flask python file that runs the website

bot.py is the discord bot that connects to our team's discord server

label_image.py is the python file provided by TensorFlow that labels the image

retrained.pb is the graph of the trained model_file

upload.html is the html file rendered by Flask that you see when you visit the website

style.css is the css file for the Flask website

# WhatBreed Mobile 

The easist way to run this application is to download the apk file included in this project to your Android device'
  1. Go to additional setting\ developer options in your phones settings
  2. Set Allow USB debugging to Ok
  At this point you can import the application from github into Android Studio and when the gradle file syncs run it by pressing the green play button in the top right corner after your phone is connected through usb.
  3. If you dont want to download Android Studio you can install the APK in this project to your phone by:
  4. Connecting your phone to the laptops usb
  5. Go to your phone setting and go to USB Preferences
  6. Select File Transfer under Use USB for
  7. Go to your phones internal storage and drag and drop the apk file from your laptop to your phone
  8. Go to your phones settings and allow external applications to be installed outisde of the app store
  8. On your phone open this apk file and the app will install and run
  9. Have fun!
