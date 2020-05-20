from googletrans import Translator
translator = Translator()
f=open('english.txt','r')
content = f.read()
result = translator.translate(content, dest='kn')
with open('translated.txt',"w",encoding="utf8") as f1:
    f1.write(result.text)