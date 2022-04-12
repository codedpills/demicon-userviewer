import { useState } from "react";
import { useCheckSearchTerm } from "./useCheckSearchTerm";

export function SearchInput({ onSearch, loading, fetchOnEmpty }) {
  const [searchTerm, setSearchTerm] = useState();

  useCheckSearchTerm(searchTerm, onSearch, !!fetchOnEmpty);

  function handleChange(e) {
    const { value } = e.target;
    setSearchTerm(value);
  }

  return (
      <input
        type="text"
        placeholder="Filter by country"
        onChange={handleChange}
        disabled={loading}
      />
  );
}
