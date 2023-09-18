import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal-1";

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOnCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div>
      <Button onClick={() => setIsOpenModal((open) => !open)}>
        Add new cabin
      </Button>
      {isOpenModal && (
        <Modal onCloseModal={handleOnCloseModal}>
          <CreateCabinForm onCloseModal={handleOnCloseModal} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
