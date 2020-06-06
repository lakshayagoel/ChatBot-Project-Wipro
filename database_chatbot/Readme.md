# Database

## Responsibilities

* Stores responses based on intent and entities
* Has features to populate and edit the DB content

## Team 

* Chirag Singhal
* Anirudh

## How to setup?

Make sure you have **pip** installed.

<code>
    git clone https://github.com/chirag-singhal/ChatBot_PS-1.git\n
    cd ChatBot_PS-1\n
    pip install virtualenv\n
    virtualenv chatbot\n
    source chatbot/bin/activate\n
    pip install django\n
    cd databse_chatbot\n
    python3 manage.py createsuperuser\n
    python3 manage.py makemigrations\n
    python3 manage.py migrate --run-syncdb\n
    python3 manage.py runserver\n
</code>