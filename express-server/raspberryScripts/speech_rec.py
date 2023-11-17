import speech_recognition as sr
from datetime import date
from time import sleep
from openai import OpenAI
import os

client = OpenAI(api_key='')
messages = [{"role": "system", "content": "You are a gardening assistant who will answer questions regarding gardening only with a max of 3 sentences. Say uwu at the end of every response. If asked any unrelated question, respond with uncertainty"}]


r = sr.Recognizer()
mic = sr.Microphone()

print("starting")

def listen_for_start_word(source):
    print("Listening for hey seed...")
    while True:
        audio = r.listen(source)
        try:
            words = r.recognize_google(audio)
            if "hey seed" in words.lower():
                print("Wake word detected.")

                listen_and_respond(source)
                break
        except sr.UnknownValueError:
            pass

def listen_and_respond(source):
    print("Listening for question ...")

    while True:
        audio = r.listen(source)
        try:
            text = r.recognize_google(audio)
            print(f"You said: {text}")
            if not text:
                continue
        
            messages.append({"role": "user", "content": words})
            print(messages)

            # Use the correct syntax to access the response
            response = client.chat.completions.create(model="gpt-3.5-turbo", messages=messages)
            reply = response.choices[0].message.content

            messages.append({"role": "assistant", "content": reply})
            print("\n" + reply + "\n")


        except sr.UnknownValueError:
            sleep(2)
            print("Silence found, shutting up, listening...")
            listen_for_start_word(source)
            break


with sr.Microphone() as source:
    listen_for_start_word(source)