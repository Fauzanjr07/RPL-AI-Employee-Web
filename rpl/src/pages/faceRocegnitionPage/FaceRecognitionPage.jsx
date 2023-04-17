import "../stylingPage.scss"
import myImage from "../../images/telkomLogo.png";
import {Link, Router} from "react-router-dom";
import Webcam from "react-webcam";
import { CameraOptions, useFaceDetection } from 'react-use-face-detection';
import { Camera } from '@mediapipe/camera_utils';
import FaceDetection from '@mediapipe/face_detection';
import React, { useState } from "react";



const FaceRecognitionPage = () => {
  const width=480
  const height=380
    const { webcamRef, boundingBox, isLoading, detected, facesDetected } = useFaceDetection({
      faceDetectionOptions: {
        model: 'short',
      },
      faceDetection: new FaceDetection.FaceDetection({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection/${file}`,
      }),
      camera: ({ mediaSrc, onFrame }: CameraOptions) =>
      new Camera(mediaSrc, {
        onFrame,
        width,
        height,
      }),
    });


      if (facesDetected == 1) {
        const myButton = document.getElementById("myButton");
        setTimeout(() => {
          console.log("Wajah terdeteksi");
          return(
            myButton.click()        
          )
        }, 3000);
        
      }

    
  return (
    <div className="login">
      <div className="login__container">
        <div className="form__container">
          <div className="form__left">
            <img className="logo" src={myImage} alt="Logo Telkom" />
          </div>
          <div className="form__right">
            <div className="faceRecognitionPage__form">
              <div className="tittle">
                <span className="tittle__up">Hadapkan Wajah Ke depan Kamera!</span>
              </div>
              <div classname="webcam" style={{ width, height, position: 'relative' }}>
                {boundingBox.map((box, index) => (
                  <div
                  key={`${index + 1}`}
                  style={{
                    border: '4px solid red',
                    position: 'absolute',
                    top: `${box.yCenter * 100}%`,
                    left: `${box.xCenter * 100}%`,
                    width: `${box.width * 100}%`,
                    height: `${box.height * 100}%`,
                    zIndex: 1,
                  }}
                  />
                ))}
                <Webcam
                  ref={webcamRef}

                  width={480}
                  height={380}
                />
              </div>
              <div className="faceRecognition_submit">
                <Link to="/informationPage">
                  <input className="submit__box" id="myButton" type="button" value="Sign-in" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default FaceRecognitionPage;
