import pytesseract
from pytesseract import Output
from PIL import Image

import sys

# Assuming 'myconfig' is defined somewhere above this line
myconfig = r'--oem 3 --psm 11'

# Open the image file
img_path = sys.argv[1]
# print('file path is:',img_path)
# img = 'C:/Users/Acer/Desktop/indore_backend/OCR-verify/all.jpg'  # Replace with your image path
data = pytesseract.image_to_data(img_path, config=myconfig, output_type = Output.DICT)

amount_box  =  len(data['text'])
for i in range(amount_box):
    if(float (data['conf'][i])) > 80:
        print(data['text'][i])