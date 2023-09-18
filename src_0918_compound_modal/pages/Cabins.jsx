import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";

function Cabins() {
  useEffect(() => {
    console.log("cabins effect");
  }, []);
  /*
  useEffect(() => {
    getCabins().then((data) => console.log(data));
  }, []);
  */
  // access the client
  // const queryClient = useQueryClient();

  // queries

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
