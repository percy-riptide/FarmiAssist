from textblob import TextBlob
f=open('kannada.txt',encoding="utf8")
word10 = TextBlob(f.read())  
x=word10.translate(from_lang='kn', to ='en')
print(x)