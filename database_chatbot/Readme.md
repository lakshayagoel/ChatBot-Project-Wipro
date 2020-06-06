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
    git clone https://github.com/chirag-singhal/ChatBot_PS-1.git<br>
    cd ChatBot_PS-1<br>
    pip install virtualenv<br>
    virtualenv chatbot<br>
    source chatbot/bin/activate<br>
    pip install django<br>
    cd databse_chatbot<br>
    python3 manage.py createsuperuser<br>
    python3 manage.py makemigrations<br>
    python3 manage.py migrate --run-syncdb<br>
    python3 manage.py runserver<br>
</code>