import main

if 'season' in main.filtered_sentence:
    print('true')
elif 'seasons' in main.filtered_sentence:
    print('true')
elif 'Season' in main.filtered_sentence:
    print('true')
elif 'Seasons' in main.filtered_sentence:
    print('true')
else:
    print('null')