import cv2
import requests
from PIL import Image
from django.shortcuts import render, redirect
from .simple_facerec import SimpleFacerec
from rest_framework.decorators import api_view
# Create your views here.

@api_view(['GET'])
def face_verify(request):
    sfr = SimpleFacerec()
    sfr.load_encoding_images("images/")
    cap = cv2.VideoCapture(0)

    while True:
        
        _ , frame = cap.read()

        face_locations, face_names = sfr.detect_known_faces(frame)
        for face_loc, name in zip(face_locations, face_names):
            if name != "Unknown":
                status = "verified"
            y1, x2, y2, x1 = face_loc[0], face_loc[1], face_loc[2], face_loc[3]

            cv2.putText(frame, name,(x1, y1 - 10), cv2.FONT_HERSHEY_DUPLEX, 1, (0, 0, 200), 2)
            cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 0, 200), 4)

        cv2.imshow("Frame", frame)

        key = cv2.waitKey(1)
        if key == 32:
            break

    cap.release()
    cv2.destroyAllWindows()

    return redirect('http://localhost:3000/dashboard/app')

