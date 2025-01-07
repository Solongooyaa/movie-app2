import { ChangeEvent, useState } from "react";
import { SearchInput } from "./SearchInput";
import { SearchResults } from "./SearchResult";

export const SearchMain = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="w-[100px] h-[50px] border rounded">
      <SearchInput handleChange={handleChange} value={searchValue} />
      {searchValue && <SearchResults searchValue={searchValue} />}
      <div></div>
    </div>
  );
};
