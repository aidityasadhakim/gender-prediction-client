"use client";
import { Button, Modal } from "flowbite-react";
import { useState, useEffect } from "react";

const ModalGender = ({ modalToogle, setCloseToogle, gender }) => {
  const [openModal, setOpenModal] = useState();

  useEffect(() => {
    setOpenModal(modalToogle);
  }, [modalToogle]);

  return (
    <>
      <Modal
        show={openModal === "default"}
        onClose={() => {
          setOpenModal(undefined);
        }}
        size={"sm"}
        position={"center"}
      >
        <Modal.Header>Your Predicted Gender</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base text-[24px] leading-relaxed text-gray-500 dark:text-gray-400">
              {gender}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setCloseToogle();
            }}
          >
            Benar
          </Button>
          <Button
            color="gray"
            onClick={() => {
              setCloseToogle();
            }}
          >
            Salah
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalGender;
