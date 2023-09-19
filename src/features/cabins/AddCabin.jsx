import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal, { Open, Window } from "../../ui/Modal";
import { useEffect } from "react";

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   const handleOnCloseModal = () => {
//     setIsOpenModal(false);
//   };

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((open) => !open)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal>
//           <Modal.ModalButton>
//             <HiXMark onClick={handleOnCloseModal} />
//           </Modal.ModalButton>
//           <CreateCabinForm onCloseModal={handleOnCloseModal} />
//         </Modal>
//       )}
//     </div>
//   );
// }

function AddCabin() {
  console.log("addcabin");
  useEffect(() => {
    console.log("addcabin effect");
  }, []);
  return (
    <Modal>
      <Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Open>
      <Window name="cabin-form">
        <CreateCabinForm />
      </Window>

      {/* <Modal.Open opens="table">
        <Button>Show table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window> */}
    </Modal>
  );
}

export default AddCabin;
