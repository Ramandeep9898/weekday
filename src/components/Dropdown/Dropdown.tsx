import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useSearchParams } from "react-router-dom";

export const Dropdown = ({
  filter,
  handleOnChange,
  selectedFilterData,
}: {
  filter: any;
  handleOnChange: any;
  selectedFilterData: any;
}) => {
  const [searchParams, _] = useSearchParams();

  const handleChange = (event: SelectChangeEvent) => {
    handleOnChange(event.target.name, event.target.value);
  };

  const { label, fields, name } = filter;

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name={name}
          value={searchParams.get(name) || selectedFilterData[name] || ""}
          onChange={handleChange}
        >
          {fields?.map((ele: any) => (
            <MenuItem value={ele.value} key={ele.value}>
              {ele.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
