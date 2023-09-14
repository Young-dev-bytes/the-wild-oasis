import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

function useCabins() {
  const { isLoading, data: cabins } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  return { isLoading, cabins };
}

export default useCabins;
