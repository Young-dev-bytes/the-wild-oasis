import { formatCurrency } from "../../utils/helpers";
import { useDeleteCabin } from "./useDeleteCabin";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import styled from "styled-components";
import CreateCabinForm from "./CreateCabinForm";
import useCreateCabin from "./useCreateCabin";
import Modal, { Open, Window } from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

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

  return (
    <>
      <Table.Row>
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

          <Modal>
            <Open opens="edit">
              <button>
                <HiPencil />
              </button>
            </Open>
            <Window name="edit">
              <CreateCabinForm cabinToEdit={cabin} />
            </Window>

            <Open opens="delete">
              <button>
                {/* {isDeleting ? "deleting..." : "delete"} */}
                <HiTrash />
              </button>
            </Open>
            <Window name="delete">
              <ConfirmDelete
                resourceName={name}
                disabled={isWorking}
                onConfirm={handleDeleteCabin}
              />
            </Window>
          </Modal>
          <Menus.Menu>
            <Menus.Toggle id={cabinId} />
            <Menus.List id={cabinId}>
              <Menus.Button icon={<HiSquare2Stack />} onClick={handleDuplicate}>
                Duplicate
              </Menus.Button>
              <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
            </Menus.List>
          </Menus.Menu>
        </div>
      </Table.Row>
    </>
  );
}

export default CabinRow;
