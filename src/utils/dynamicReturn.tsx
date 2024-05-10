import { Dropdown } from "../components/Dropdown/Dropdown";

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
      <Dropdown
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
      <Dropdown
        filter={filter}
        handleOnChange={handleOnChange}
        selectedFilterData={selectedFilterData}
      />
    ),
  };
  return obj[filter.type];
};
