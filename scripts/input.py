import main

if 'requirements' in main.filtered_sentence:
    print('true')
elif 'requirement' in main.filtered_sentence:
    print('true')
else:
    print('null')