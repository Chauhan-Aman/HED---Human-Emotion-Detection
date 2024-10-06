# HED---Human-Emotion-Detection
  
This system provides a real-time platform for detecting and classifying human emotions using computer vision and deep learning. It efficiently analyzes facial expressions to categorize emotions, offering insights that can be applied in various fields like mental health and customer experience.

#### Key features include:

- Emotion Detection: Analyze facial expressions and classify emotions into categories such as happy, sad, and angry.

- Real-Time Analysis: Process images in real-time to provide immediate feedback on emotional states.

- Deep Learning Model: Leverages advanced deep learning techniques to ensure accurate classification of emotions.

- Versatile Applications: Suitable for use in mental health monitoring, customer experience enhancement, and human-computer interaction.

This project demonstrates the potential of AI-driven emotion detection, allowing for more intuitive interaction between humans and machines.

## Technologies Used
- Computer Vision
- Deep Learning
- Python
- FastAPI

## Demo

https://github.com/user-attachments/assets/dcc6dcd3-8b7f-42a0-a28c-f58b081197f7

## How to Run This Project

1. Clone the repository:
```
git clone https://github.com/Chauhan-Aman/HED---Human-Emotion-Detection.git
cd human-emotion-detection
```
2. Set up a virtual environment:
```
python -m venv venv
source venv/bin/activate.ps1   # On Windows use `venv\Scripts\activate.ps1`
```
3. Install required dependencies:
```
Install required dependencies:
```
4. Run the FastAPI server:
```
uvicorn main:app --reload
```
5. Access the API: Open your browser and go to http://127.0.0.1:8000 to see the Human Emotion Detection API running.
6. Frontend Interaction:
   - To interact with the API from the frontend, ensure CORS settings allow access from your frontend domain.
   - You can upload images through the frontend to classify emotions.

This setup will allow you to run the Human Emotion Detection system locally.
