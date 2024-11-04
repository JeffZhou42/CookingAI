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
