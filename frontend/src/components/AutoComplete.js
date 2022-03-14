import { Box, TextField } from "@material-ui/core";
import { Autocomplete } from "@mui/material";
const opt = [
  {
    id: 1,
    label: "Cumulative",
    id: 2,
    label: "Batch average",
    id: 3,
    label: "Week performance",
    id: 4,
    label: "Weekly with Average",
  },
];

export default function AutoComplete({ selected, setSelected }) {
  return (
    <Autocomplete
      value={selected}
      onChange={(event, newValue) => {
        console.log(newValue);
        setSelected(newValue);
      }}
      options={opt}
      disablePortal
      autoHighlight
      id="combo-box-demo"
      sx={{ width: 300 }}
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          {option.label}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a skill"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    ></Autocomplete>
  );
}
