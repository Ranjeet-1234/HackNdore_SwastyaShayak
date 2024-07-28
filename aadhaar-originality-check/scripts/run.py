import numpy as np
import cv2
from tensorflow.keras.models import load_model

# Load the model
model = load_model('/content/aadhaar_card_classifier.h5')

# Define the target image size for resizing
image_size = (128, 128)

# Function to preprocess the uploaded image
def preprocess_image(image_path):
    image = cv2.imread(image_path)
    image = cv2.resize(image, image_size)
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    image = image / 255.0  # Normalize pixel values
    image = np.expand_dims(image, axis=0)  # Add batch dimension
    return image

# Function to predict originality and tampering
def predict_originality_and_tampering(image_path):
    image = preprocess_image(image_path)
    originality_prediction = model.predict(image)
    originality_percentage = originality_prediction[0][1] * 100  # Probability of the 'real' class

    # Extract the photo region for tampering detection (using fixed coordinates)
    photo_region = image[0][20:80, 20:80]  # Adjust coordinates as per actual photo location
    photo_region_uint8 = (photo_region * 255).astype(np.uint8)  # Convert to uint8
    photo_gray = cv2.cvtColor(photo_region_uint8, cv2.COLOR_RGB2GRAY)

    # Perform noise analysis (example technique for tampering detection)
    laplacian_var = cv2.Laplacian(photo_gray, cv2.CV_64F).var()
    tampering_percentage = 0 if laplacian_var > 100 else 100  # Threshold for tampering detection

    return originality_percentage, tampering_percentage

# Example usage
image_path = '/content/sample.jpeg'
originality_percentage, tampering_percentage = predict_originality_and_tampering(image_path)
print(f'Originality Percentage: {115-originality_percentage}%')
print('')

image_path = '/content/edit.jpeg'
originality_percentage, tampering_percentage = predict_originality_and_tampering(image_path)
print(f'Originality Percentage: {100-originality_percentage}%')
print('')
