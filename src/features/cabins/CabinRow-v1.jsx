import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import { useDeleteCabin } from "./useDeleteCabin";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import styled from "styled-components";
import CreateCabinForm from "./CreateCabinForm";
import useCreateCabin from "./useCreateCabin";
import Modal from "../../ui/Modal-1";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();
  const isWorking = isDeleting || isCreating;

  const handleDuplicate = () => {
    createCabin({
      name: `${name} copy`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  };
  const handleDeleteCabin = () => {
    deleteCabin(cabinId);
  };
  const handleOnCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <TableRow>
        <Img src={image}></Img>
        <Cabin>{name}</Cabin>
        <div>
          Fits up to <span style={{ fontWeight: "bold" }}>{maxCapacity}</span>{" "}
          guests
        </div>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Discount>
          {discount ? formatCurrency(discount) : <span>&mdash;</span>}
        </Discount>
        <div>
          <button disabled={isWorking} onClick={handleDuplicate}>
            <HiSquare2Stack />
          </button>

          <button onClick={() => setIsOpenModal((open) => !open)}>
            <HiPencil />
          </button>

          <button disabled={isWorking} onClick={handleDeleteCabin}>
            {/* {isDeleting ? "deleting..." : "delete"} */}
            <HiTrash />
          </button>
        </div>
      </TableRow>
      {isOpenModal && (
        <Modal onCloseModal={handleOnCloseModal}>
          <CreateCabinForm
            cabinToEdit={cabin}
            onCloseModal={handleOnCloseModal}
          />
        </Modal>
      )}
    </>
  );
}

export default CabinRow;
