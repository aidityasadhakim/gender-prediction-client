import React from "react";
import PredictionForm from "./PredictionForm";

const HomeContent = () => {
  return (
    <div className="flex flex-col gap-[10px]">
      <h1 className="text-center font-bold text-[45px]">Gender Prediction</h1>
      <p>
        This model is deployed for Machine Learning Final Project Universitas
        Pertamina, if you are curious with the front-end development check the
        github link{" "}
        <strong className="text-blue-800">
          <a
            target="_blank"
            href="https://github.com/aidityasadhakim/gender-prediction-client"
          >
            here!
          </a>
        </strong>{" "}
        Also, if you are curious with the api services, check it out{" "}
        <strong className="text-blue-800">
          <a target="_blank" href="http://146.190.98.2/docs">
            Here!
          </a>
        </strong>{" "}
        Since we are not paying attention to much to security, please kindly use
        it with caution
      </p>
      <PredictionForm></PredictionForm>
    </div>
  );
};

export default HomeContent;
