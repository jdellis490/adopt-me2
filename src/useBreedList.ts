import { QueryStatus, useQuery } from "@tanstack/react-query";
import fetchBreedList from "./queries/fetchBreedList";
import { Animal } from "./APIResponsesTypes";

const useBreedList = (animal: Animal) => {
  const results = useQuery({
    queryKey: ["breeds", animal],
    queryFn: fetchBreedList,
  });
  return [results?.data?.breeds ?? [], results.status] as [
    string[],
    QueryStatus,
  ];
};

export default useBreedList;
