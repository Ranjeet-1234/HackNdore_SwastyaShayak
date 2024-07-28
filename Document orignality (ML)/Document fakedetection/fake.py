import os
import cv2
from PIL import Image
import requests
from skimage.metrics import structural_similarity
import imutils

from PIL import Image
import requests

original = Image.open(requests.get('https://www.thestatesman.com/wp-content/uploads/2019/07/pan-card.jpg', stream=True).raw)
tampered = Image.open(requests.get('https://assets1.cleartax-cdn.com/s/img/20170526124335/Pan4.png', stream=True).raw)

# Resize Image
original = original.resize((250, 160))
print(original.size)
original.save('original.png')#Save image
tampered = tampered.resize((250,160))
print(tampered.size)
tampered.save('tampered.png')#Saves image

# Change image type if required from png to jpg
tampered = Image.open('tampered.png')
tampered.save('tampered.png')#can do png to jpg

# load the two input images
original = cv2.imread('original.png')
tampered = cv2.imread('tampered.png')

# Convert the images to grayscale
original_gray = cv2.cvtColor(original, cv2.COLOR_BGR2GRAY)
tampered_gray = cv2.cvtColor(tampered, cv2.COLOR_BGR2GRAY)

# Compute the Structural Similarity Index (SSIM) between the two images,
# ensuring that the difference image is returned

(score, diff) = structural_similarity(original_gray, tampered_gray, full=True)
diff = (diff * 255).astype("uint8")
print("SSIM Score is : {}".format(score*100))
if score >= 80:
    print ("The given pan card is original")
else:
    print("The given pan card is tampered")



# Calculating threshold and contours
thresh = cv2.threshold(diff, 0, 255, cv2.THRESH_BINARY_INV | cv2.THRESH_OTSU)[1]
cnts = cv2.findContours(thresh.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
cnts = imutils.grab_contours(cnts)

# loop over the contours
for c in cnts:
    # applying contours on image
    (x, y, w, h) = cv2.boundingRect(c)
    cv2.rectangle(original, (x, y), (x + w, y + h), (0, 0, 255), 2)
    cv2.rectangle(tampered, (x, y), (x + w, y + h), (0, 0, 255), 2)

#Display original image with contour
print('Original Format Image')
original_contour = Image.fromarray(original)
original_contour.save("original_contour_image.png")
original_contour


#Diplay tampered image with contour
print('Tampered Image')
tampered_contour = Image.fromarray(tampered)
tampered_contour.save("tampered_contours_image.png")
tampered_contour


# Display difference image with black

print('Different Image')
difference_image = Image.fromarray(diff)
difference_image.save("difference_image.png")
difference_image
