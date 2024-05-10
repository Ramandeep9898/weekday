import TextField from "@mui/material/TextField";

export const SearchInput = ({
  filter,
  handleOnChange,
  selectedFilterData,
}: {
  filter: any;
  handleOnChange: any;
  selectedFilterData: any;
}) => {
  return (
    <TextField
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
      value={selectedFilterData[filter.name] || ""}
      name={filter.name || ""}
      onChange={(e) => handleOnChange(e.target.name, e.target.value)}
    />
  );
};
