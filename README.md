# 
##### By Alejandro Spara Dominguez

##### This project was developed for the fifth project with the Code Institute and the Full Stack Development Course. 

### [Click here to view the deployed front end app.](https://stack-react.herokuapp.com/)
### [Click here to view the deployed back end app.](https://stack-drf-api.herokuapp.com/)

### [Click here to view the repository for the front end of the application.](https://github.com/AlexSD92/stack_react)
### [Click here to view the repository for the back end of the application.](https://github.com/AlexSD92/stack_drf_api)

# Table of Contents:

1. [Why](#Why)
2. [User Experience (UX)](#user-experience-UX)
    1. [Target Audience](#target-audience)
    2. [User Stories](#user-stories)
    3. [Strategy](#strategy)
    4. [Scope](#scope)
    5. [Skeleton](#skeleton)
3. [Features](#features)
    1. [Current Features](#current-features)
    2. [Future Features](#future-features)
4. [Technologies](#technologies)
    1. [Languages](#languages)
    2. [Frameworks](#frameworks)
    3. [Other Technologies and Libraries] (#other-technologies-and-libraries)
5. [Testing and Development](#testing-and-development)
6. [Deployment](#deployment)
    1. [Cloning and Forking the GitHub Repository](#cloning-and-forking-the-github-repository)
    2. [Local Deployment](#local-deployment)
    3. [Remote Deployment](#remote-deployment)
7. [Credits](#credits)


# Why

# User Experience

### Target Audience

This app is aimed at a general audience. 
- Anyone that would like to ask a question about something. 
- Anyone that feels like they could answer questions that have been asked. 

### User Stories

##### Navigation & Authentication
- As a user, I can register for an account so that I may use the platform. 
- As a user, I can log in to my account so that I may use the platform. 
- As a user, I can log out of my account so that I may end my session.
- As a user, I am unable to post questions unless I am logged in.
- As a user, I am unable to post answers unless I am logged in. 
- As a user, I am unable to view my profile unless I am logged in.

##### Questions & Answers
- As a user, I can post questions so that I may receive answers. 
- As a user, I can update my own questions so that I may correct errors or make them clearer.
- As a user, I can delete my own questions so that I may remove the questions I no longer need answered. 
- As a user, I can post answers to questions so that I may be helpful to other users.
- As a user, I can update my own answers so that I may correct errors or make them clearer.
- As a user, I can delete my own answers so that I may remove answers that are incorrect.
- As a user, I am unable to update other user questions.
- As a user, I am unable to delete other user questions.
- As a user, I am unable to update other user answers.
- As a user, I am unable to delete other user answers. 
- As a user, I can view a list of questions so that I may see what questions have been asked. 
- As a user, I can view a list of answers so that I may see what answers have been given.

##### Profile
- As a user, I can access my profile so that I may view my information. 
- As a user, I can update my details so that I may keep my information up to date. 
- As a user, I can view other user profiles so I may learn more about them.
- As a user, I am unable to edit other user profiles.

### Strategy

Create a simple question and answer app where users are able to login/out and post questions and answers. 

### Scope

- Log in and out. 
- Create, update and delete questions.
- Create, update and delete answers.
- Manage user profile.
- Update and delete restricted to owner.

### Skeleton

Wireframes for the structure of the Question List, Question Detail and Answer Detail components can be found in the [assets directory](assets).

# Features

### Current Features
- Log in/out 
- Register for an account
- Post a new question
- Post an answer to a question
- Edit an existing question if you are the author
- Edit an existing answer if you are the author
- Edit your profile
- Question and answer list view
- Question and answer detail view

### Future Features
- Statistics on platform usage
    - For example, how many questions a user has asked versus answered
- Additional authentication options, such as logging in with social media
- A direct messaging system to contact other users directly 
- Additional profile features such as images 
- Ability to upvote and downvote questions and answers in order to provide better visibility on the best questions and answers

# Technologies
### Languages

- [Python](https://www.python.org/)
- [HTML](https://www.w3schools.com/html/)
- [CSS](https://www.w3schools.com/css/)
- [SQL](https://www.w3schools.com/sql/)
- [JavaScript](https://www.w3schools.com/js/)
- [JSX](https://www.w3schools.com/react/react_jsx.asp)

### Frameworks

- [Django](https://www.djangoproject.com/)
- [Django REST](https://www.django-rest-framework.org/)
- [React](https://reactjs.org/)
- [Gunicorn](https://gunicorn.org/)
- [React Router](https://v5.reactrouter.com/)
- [Bootstrap React](https://react-bootstrap.github.io/)
- [dj-rest-auth](https://dj-rest-auth.readthedocs.io/)
- [JWT](https://jwt.io/)
- [Axios](https://axios-http.com/)
- [Django Allauth](https://django-allauth.readthedocs.io/)
- [Django CORS Headers](https://pypi.org/project/django-cors-headers/)

### Other Technologies and Libraries

- [Psycopg2-Binary](https://pypi.org/project/psycopg2-binary/)
- [Whitenoise](http://whitenoise.evans.io/en/stable/)
- [Heroku](https://id.heroku.com/)
- [Heroku Postgres](https://www.heroku.com/postgres)

# Testing and Development

# Deployment
### Cloning and Forking the GitHub Repository

In order to make changes to this code without affecting the original code, you must fork the repository. This means that you will be given a copy of the code for that moment in time. In order to do this, you must:

1. Create a GitHub account (if you have one already, skip this step).
2. Navigate to the repository.
    - [Front End](https://github.com/AlexSD92/stack_react)
    - [Back End](https://github.com/AlexSD92/stack_drf_api)
3. Near the top right, click 'Fork'.
4. A copy of the repository will be available for you to use within your own remote repository.

In order to clone the repository, you must:

1. Create a GitHub account (if you have one already, skip this step).
2. Navigate to the repository you would like to clone.
    - [Front End](https://github.com/AlexSD92/stack_react)
    - [Back End](https://github.com/AlexSD92/stack_drf_api)
3. Near the top, select 'Code' in the dropdown.
4. Copy the HTTPS address.
5. Navigate to the directory where you would like to create a new directory using the terminal.
    - Use the pwd command to know where you currently are.
    - Use cd followed by the directory name to change directories.
    - use mkdir followed by a new directory name to create a new directory.
6. Enter:
    - Front End: 'https://github.com/AlexSD92/stack_react.git'
    - Back End: 'https://github.com/AlexSD92/stack_drf_api.git'
7. The repository will be cloned into your chosen directory.

### Local Deployment

##### Front End

1. Create a new folder in your preferred IDE.
    - If you would like to copy this project exactly, use GitPod. 
2. Give your folder a project name, for example '*stack-react*'.
3. Open up your terminal.
4. First and foremost, install Django by typing 'npx create-react-app . --use-npm', and wait for the installation to finish.
5. Install the following using 'npm install':
    - react-bootstrap
    - react-router-dom
6. In the command terminal, start the app by typing 'npm start'. 
7. Your project should not be hosted locally. 

##### Back End

1. Create a new folder in your preferred IDE.
    - If you would like to copy this project exactly, use GitPod. 
2. Give your folder a project name, for example 'stack-drf-api'.
3. Open up your terminal.
4. First and foremost, install Django by typing '*pip install Django*', and wait for the installation to finish.
5. Time to start the project, so type '*django-admin startproject [insert your project name here]*' and wait for the folders and files to be created. Our project is named *crm*.
6. Install the following dependencies using 'pip install':
    - django-rest-framework
    - django-cors-headers
    - django-allauth
    - dj-rest-auth
    - psycopg2
    - gunicorn
    - dj-database-url
7. In your terminal, type '*python manage.py runserver*'
8. Your project should be hosted locally.
9. You should view the following message 'The install worked successfully! Congratulations!'.

### Remote Deployment

##### Front End

1. Create a new folder in your preferred IDE.
    - If you would like to copy this project exactly, use GitPod. 
2. Give your folder a project name, for example '*stack-react*'.
3. Open up your terminal.
4. First and foremost, install Django by typing 'npx create-react-app . --use-npm', and wait for the installation to finish.
5. Install the following using 'npm install':
    - react-bootstrap
    - react-router-dom
6. Create a Heroku account if you don't have one already. 
7. Click on Create new app. 
8. Give your app a name, choose your region and click create.
9. Click on Deploy and click on 'Deploy Branch' at the bottom of the page after connecting to your GitHub account.

##### Back End

1. Create a new folder in your preferred IDE.
    - If you would like to copy this project exactly, use GitPod. 
2. Give your folder a project name, for example 'stack-drf-api'.
3. Open up your terminal.
4. First and foremost, install Django by typing '*pip install Django*', and wait for the installation to finish.
5. Time to start the project, so type '*django-admin startproject [insert your project name here]*' and wait for the folders and files to be created. Our project is named *crm*.
6. Install the following dependencies using 'pip install':
    - django-rest-framework
    - django-cors-headers
    - django-allauth
    - dj-rest-auth
    - psycopg2
    - gunicorn
    - dj-database-url
    - whitenoise
7. Create your *.gitignore* and include:
    - *.log
    - *.pot
    - *.pyc
    - __pycache__/
    - local_settings.py
    - *.sqlite3
    - media
    - .env 
    - .venv 
    - env/ 
    - venv/ 
    - ENV/ 
    - env.bak/ 
    - venv.bak/
8. Create a GitHub account if you don't already have one.
9. Create a new repository by clicking the green button labelled as *New*, and name your repo the same as you named your project locally for consistency.
10. Decide whether you want the repo to be either public or private.
11. Don't select to initialise your repository with any starting files, you can create these later on and push them to the repo. 
12. Click the green *Create repository* button.
13. On your command line, execute the following:
    1. *git init*
    2. *git add .*
    3. *git commit -m "Initial commit"*
    4. *git branch -M main*
    5. *git remote add origin [insert your SSH link]*
        - Your SSH link should look something like 'https://github.com/AlexSD92/stack_drf_api.git'
    6. *git push -u origin main*
14. Your local files are now linked to your github repository and from here on out, you only need to use the add, commit and push commands to update your repo.
15. Create an account if you don't already have one. 
16. Click on create new app.
17. Give your app a name, choose your region and click create.
18. Click on the 'Resources' tab first. 
    - Under Add-ons, search and select 'Heroku Postgres'.
    - Select your plan name, most likely 'Hobby Dev - Free'.
    - Then click 'Submit Order Form'
19. Next head to your settings and click on 'Reveal Config Vars'.
    - Notice that Heroku has created a 'DATABASE_URL' for use later.
    - Include requirements.txt as a key and copy all of the contents of your requirements.txt into the value field. 
    - Within your project folder and in the settings.py file, you should find a 'SECRET_KEY'. Include this as a key and the secret key as the value. You can edit this to be whatever you like, just be sure to include it in your Config vars. 
    - Finally, for development, you will need to disable the collection of static files. The file key value pair you need to add is 'DISABLE_COLLECTSTATIC=1'.
20. Click on 'Add Buildpack' and select python, then 'Save changes'.
25. At the top of your settings.py file, '*import os*' and '*import dj_database_url*'.
26. Ensure DEBUG is set to True for development purposes or True for production.
27. Set your 'ALLOWED_HOST' to ['[*your heroku project name*].herokuapp.com']. For example, 'ALLOWED_HOSTS = ['stack-drf-api.herokuapp.com']
28. Comment out the existing database and include a new DATABASE setting. 
    - Go back to your Heroku config vars and grab the DATABASE_URL key value. 
    - Include it as your new DATABASE setting. For example: 
    DATABASE = {
        'default': dj_database_url.parse('insert DATABASE_URL KEY VALUE'),
    }
29. In your terminal, type '*python manage.py migrate*'.
    - You should see all migrations with a green OK status.
30. Collect you static files by setting:
    - STATIC_ROOT = os.path.join(BASE_DIR, 'static')
    - STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
31. Also list: 
    - 'whitenoise.middleware.WhiteNoiseMiddleware', within MIDDLEWARE' under django.middleware.security.SecurityMiddleware' in settings.py    
    - 'whitenoise.runserver_nostatic', within INSTALLED_APPS in settings.py
32. Head back to Heroku and click on the 'Deploy' tab.
33. Select your 'Deployment method' as 'GitHub'. 
    - Follow the prompts to link your GitHub account.
    - Search for the repository you created. 
    - Click 'Connect'.
34. Head down to the 'Manual deploy' section and click on 'Deploy Branch'. 
35. Wait for Heroku to build your app and then open your app.
36. You should view the following message 'The install worked successfully! Congratulations!'. 

# Credits
1. [The Django Documentation](https://docs.djangoproject.com/en/4.0/)
    - For the details of how django works.

2. [The Django REST Documentation](https://www.django-rest-framework.org/)

3. [W3Schools](https://www.w3schools.com/)
    - For their Django and React tutorials

4. [Stack Overflow](https://stackoverflow.com/)
    - Amazing forums with great and detailed discussions demonstrating how to write code and why it should be written that way.

5. [Code Institute](https://codeinstitute.net/)
    - For their learning platform and support. 