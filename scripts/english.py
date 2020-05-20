from textblob import TextBlob
f=open('english.txt','r')
word10 = TextBlob(f.read())  
x=word10.translate(from_lang='en', to ='kn')
#f=open("translated.txt","w")
print(x)
#f.close()