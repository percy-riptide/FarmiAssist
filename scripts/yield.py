import main

if 'yield' in main.filtered_sentence:
    print('true')
elif 'yields' in main.filtered_sentence:
    print('true')
elif 'product' in main.filtered_sentence:
    print('true')
elif 'produce' in main.filtered_sentence:
    print('true')
elif 'produced' in main.filtered_sentence:
    print('true')
else:
    print('null')