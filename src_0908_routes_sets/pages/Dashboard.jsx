import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  console.log("dashboard");

  useEffect(() => {
    console.log("dashboard effect");
  }, []);
  return (
    <Row type="horizontal">
      <Heading as="h1">Dashboard</Heading>
      <p>TEST</p>
    </Row>
  );
}

export default Dashboard;
