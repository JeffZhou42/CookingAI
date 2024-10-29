from bs4 import BeautifulSoup
from youtube_transcript_api import YouTubeTranscriptApi
import requests

URL = input("Enter the YouTube link here: ")
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")
#print(soup.prettify())

#https://www.youtube.com/watch?v=7gI56oR4R9Y

ID = URL.split("v=")[1]
transcript_list = YouTubeTranscriptApi.list_transcripts(ID)
for transcript in transcript_list:
    print(transcript.fetch())