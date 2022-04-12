import { useEffect } from "react";

const SEARCH_INPUT_DEBOUNCE_TIME = 500;
const MIN_SEARCH_LENGTH = 2;

export function useCheckSearchTerm(
  searchTerm,
  onSearch,
  fetchOnEmpySearchTerm
) {
  const searchLength = fetchOnEmpySearchTerm ? 0 : MIN_SEARCH_LENGTH;

  useEffect(() => {
    if (!onSearch || searchTerm < searchLength) return;

    const timeOut = setTimeout(() => {
      onSearch(searchTerm);
    }, SEARCH_INPUT_DEBOUNCE_TIME);

    return () => clearTimeout(timeOut);
  }, [searchTerm, searchLength]);
}
