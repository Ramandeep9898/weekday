import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useState } from "react";
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
  //   const theme = useTheme();
  let array = [];
  const [personName, setPersonName] = useState<string[]>(
    selectedFilterData[name] || []
  );
  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    handleOnChange(name, personName);
  };

  // const [searchParams, setSearchParams] = useSearchParams();
  console.log(selectedFilterData, selectedFilterData[name]);

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        name={name}
        value={personName}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value, index) => (
              <Chip key={index} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {fields?.map((ele: any) => (
          <MenuItem
            key={ele.value}
            value={ele.label}
            //   style={getStyles(ele, selectedFilterData[name], theme)}
          >
            {ele.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
