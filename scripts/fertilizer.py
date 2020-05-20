import main

if 'fertilizer' in main.filtered_sentence:
    print('true')
elif 'fertilizers' in main.filtered_sentence:
    print('true')
elif 'Fertilizer' in main.filtered_sentence:
    print('true')
elif 'Fertilizers' in main.filtered_sentence:
    print('true')
elif 'fertiliser' in main.filtered_sentence:
    print('true')
elif 'fertilisers' in main.filtered_sentence:
    print('true')
elif 'Fertiliser' in main.filtered_sentence:
    print('true')
elif 'Fertilisers' in main.filtered_sentence:
    print('true')
else:
    print('null')