from fastapi import FastAPI

import psycopg2

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to the API"}

def get_db_connection():
    conn = psycopg2.connect(
        dbname="flashcard",
        user="postgres",
        password= "1234",
        host="localhost"
    )
    return conn


@app.get("/vocabulary")
def read_vocabulary():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM vocabulary;")
    rows = cursor.fetchall()
    conn.close()
    return {"data": rows}
