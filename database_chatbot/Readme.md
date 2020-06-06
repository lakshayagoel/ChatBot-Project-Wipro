# Database

## Responsibilities

* Stores responses based on intent and entities
* Has features to populate and edit the DB content

## Team 

* Chirag Singhal
* Anirudh

## How to setup?

Make sure you have **pip** installed. Open up the terminal and type -

    git clone https://github.com/chirag-singhal/ChatBot_PS-1.git
    cd ChatBot_PS-1
    pip install virtualenv
    virtualenv chatbot
    source chatbot/bin/activate
    pip install django
    cd databse_chatbot
    python3 manage.py createsuperuser
    python3 manage.py makemigrations
    python3 manage.py migrate --run-syncdb
    python3 manage.py runserver