import { Box, TextField } from "@material-ui/core";
import { Autocomplete } from "@mui/material";
const opt = [
  {
    id: "Cumulative",
  },
  { id: "Batch average" },
  { id: "Week performance" },
  { id: "Weekly with Average" },
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
      getOptionLabel={(option) => option.id}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          {option.id}
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
