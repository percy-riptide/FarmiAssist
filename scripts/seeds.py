import main
 
seeds = ["chilli","onion","coriander","Chilli","Onion","Coriander","Onions","onions","chillies","Chillies","Chili","chili"]

for element in seeds:
    if element in main.filtered_sentence:      
        x=element
if x=='chillies' or x=='Chillies' or x=='chili' or x=='Chili':
    print('chilli')
elif x=='onions' or x=='Onions':
    print('onion')
else:
    print(x)