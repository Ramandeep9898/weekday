import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useSearchParams } from "react-router-dom";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const ChipDropdown = ({
  filter,
  handleOnChange,
  selectedFilterData,
}: {
  filter: any;
  handleOnChange: any;
  selectedFilterData: any;
}) => {
  const { fields, label, name } = filter;
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event: SelectChangeEvent<any>) => {
    const {
      target: { value },
    } = event;

    // Toggle selection
    const updatedSelection = selectedFilterData[name]?.includes(value)
      ? selectedFilterData[name].filter((item: string) => item !== value)
      : [...(selectedFilterData[name] || []), value];

    handleOnChange(name, updatedSelection);

    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams);
      newSearchParams.set(name, updatedSelection.join(","));
      return newSearchParams;
    });
  };

  let selectedValues = selectedFilterData[name] || [];

  // Ensure selectedValues is always treated as an array
  if (!Array.isArray(selectedValues)) {
    selectedValues = selectedValues.split(",");
  }

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        name={name}
        value={selectedValues}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {(selected as string[]).map((value, index) => (
              <Chip
                key={index}
                label={value}
                onDelete={() =>
                  handleChange({ target: { value } } as SelectChangeEvent<any>)
                }
              />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {fields?.map((ele: any) => (
          <MenuItem key={ele.value} value={ele.label}>
            {ele.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
