from bs4 import BeautifulSoup
from youtube_transcript_api import YouTubeTranscriptApi
from openai import OpenAI
import requests
'''
page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")
print(soup.prettify())

https://www.youtube.com/watch?v=mhDJNfV7hjk

Uses YouTube Transcript API to get the transcript of a YouTube video.
'''

URL = input("Enter the YouTube link here: ")
ID = URL.split("v=")[1]
transcript = YouTubeTranscriptApi.get_transcript(ID)
#print(transcript)

client = OpenAI(api_key = "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")

chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "system",
            "content": "Here is an extracted transcript of a YouTube video. Could you separate the text, then analyze and edit it appropriately for punctuation and grammar?",
        },
        {
            "role": "user",
            "content": str(transcript),
        }
    ],
    model="gpt-3.5-turbo",
)

print(chat_completion.choices[0].message.content)
