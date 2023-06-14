"use client";

import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import ModalGender from "./ModalGender";
import { useState } from "react";
import { api } from "@/api";

const PredictionForm = () => {
  const [openModal, setOpenModal] = useState();
  const [value, setValue] = useState("");
  const [gender, setGender] = useState();

  const toogleModal = () => {
    if (value) {
      setOpenModal("default");
    } else {
      alert("Fill the name");
    }
  };

  const closeModal = () => {
    setOpenModal(undefined);
    setValue("");
  };

  const getGender = async () => {
    try {
      const res = await api.get(`/predict?name=${value}`);
      const data = await res.data.gender;
      if (data === "female") {
        setGender("Perempuan");
      } else {
        setGender("Laki-laki");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="bg-slate-200">
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your Name" />
          </div>
          <TextInput
            value={value}
            onChange={(e) => {
              setValue(e.currentTarget.value);
            }}
            id="name"
            placeholder="Aidityas"
            required
            type="text"
          />
        </div>
        <Button
          onClick={() => {
            toogleModal();
            getGender();
          }}
        >
          Submit!
        </Button>
        <ModalGender
          gender={gender}
          modalToogle={openModal}
          setCloseToogle={closeModal}
        />
      </form>
    </Card>
  );
};

export default PredictionForm;
