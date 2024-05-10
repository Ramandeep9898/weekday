import { Dropdown } from "../components/Dropdown/Dropdown";
import { ChipDropdown } from "../components/Dropdown/ChipDropdown";
import { SearchInput } from "../components/Input/Input";

type ElementType = {
  type: string;
};

type ReturnComponentPropTypes = {
  filter: ElementType;
  handleOnChange: any;
  selectedFilterData: any;
};

export const dynamicReturn = ({
  filter,
  handleOnChange,
  selectedFilterData,
}: ReturnComponentPropTypes) => {
  const obj: { [key: string]: JSX.Element } = {
    chipDropdown: (
      <ChipDropdown
        filter={filter}
        handleOnChange={handleOnChange}
        selectedFilterData={selectedFilterData}
      />
    ),
    dropdown: (
      <Dropdown
        filter={filter}
        handleOnChange={handleOnChange}
        selectedFilterData={selectedFilterData}
      />
    ),
    search: (
      <SearchInput
        filter={filter}
        handleOnChange={handleOnChange}
        selectedFilterData={selectedFilterData}
      />
    ),
  };
  return obj[filter.type];
};
