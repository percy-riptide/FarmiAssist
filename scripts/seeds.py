from nltk.tokenize import sent_tokenize, word_tokenize 
from nltk.corpus import stopwords
import pdb
import sys
x=sys.argv[1] 
stop_words = set(stopwords.words('english')) 
word_tokens = word_tokenize(x) 
filtered_sentence = [w for w in word_tokens if not w in stop_words] 
  
filtered_sentence = []

for w in word_tokens: 
    if w not in stop_words: 
        filtered_sentence.append(w) 
 
seeds = ["chilli","wheat","cotton","paddy","tomato","Chilli","Wheat","Cotton","Paddy","Tomato"]

for element in seeds:
    if element in filtered_sentence:      
        print(element.upper())