import main

if 'soil' in main.filtered_sentence:
    print('true')
elif 'soils' in main.filtered_sentence:
    print('true')
elif 'Soil' in main.filtered_sentence:
    print('true')
elif 'Soils' in main.filtered_sentence:
    print('true')
else:
    print('null')