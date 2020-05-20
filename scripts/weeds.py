import main

if 'weed' in main.filtered_sentence:
    print('true')
elif 'weeds' in main.filtered_sentence:
    print('true')
elif 'Weed' in main.filtered_sentence:
    print('true')
elif 'Weeds' in main.filtered_sentence:
    print('true')
else:
    print('null')