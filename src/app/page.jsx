"use client";
import Image from "next/image";
import { Button } from "flowbite-react";
import PredictionContent from "@/components/PredictionContent";

export default function Home() {
  return (
    <>
      <div className="mx-auto md:w-1/2 w-3/4 flex items-center justify-center h-screen">
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-center font-bold text-[45px]">
            Gender Prediction
          </h1>
          <p>
            This model is deployed for Machine Learning Final Project
            Universitas Pertamina, if you are curious with the front-end
            development check the github link here
            <strong>
              <a href=""></a>
            </strong>
          </p>
          <PredictionContent></PredictionContent>
        </div>
      </div>
    </>
  );
}
