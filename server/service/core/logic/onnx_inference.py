import cv2
import numpy as np
import main as s


def emotions_detector(img_array):

    if len(img_array.shape) > 3:
        return {"emotion": "This image cannot be processed. Please Try Different Image"}

    if len(img_array.shape) == 2:
        img_array = cv2.cvtColor(img_array, cv2.COLOR_GRAY2RGB)

    test_image = cv2.resize(img_array, (256, 256))
    im = np.float32(test_image)
    img_array = np.expand_dims(im, axis=0)
    # print(img_array.shape)

    if img_array.shape[1:] != (256, 256, 3):
        return {"emotion": "Image dimensions are incorrect. Expected (256, 256, 3)"}

    onnx_pred = s.m_q.run(['dense'], {"input": img_array})
    # print(np.argmax(onnx_pred[0][0]))

    emotion = ""
    if np.argmax(onnx_pred[0][0]) == 0:
        emotion = "Angry"
    elif np.argmax(onnx_pred[0][0]) == 1:
        emotion = "Happy"
    else:
        emotion = "Sad"

    print(emotion)

    return {"emotion": emotion}
