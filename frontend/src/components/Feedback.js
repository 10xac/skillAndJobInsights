import { Avatar, Divider, Grid, Paper, TextField } from "@material-ui/core";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import React, { useState } from "react";

export default function Feedback() {
  const [showFeedback, setShowFeedback] = useState(false);
  return (
    <div style={{ padding: 14 }} className="App">
      <button onClick={() => setShowFeedback((prev) => !prev)}>
        <h1>Feedback</h1>
      </button>
      {showFeedback && (
        <Paper style={{ padding: "40px 20px" }}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar alt="A" src={"A"} />
            </Grid>
            <Grid justifyContent="left" item xs zeroMinWidth>
              <h4 style={{ margin: 0, textAlign: "left" }}>Trainee or Team</h4>
              <p style={{ textAlign: "left" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                luctus ut est sed faucibus. Duis bibendum ac ex vehicula
                laoreet. Suspendisse congue vulputate lobortis. Pellentesque at
                interdum tortor. Quisque arcu quam, malesuada vel mauris et,
                posuere sagittis ipsum. Aliquam ultricies a ligula nec faucibus.{" "}
              </p>
              <p style={{ textAlign: "left", color: "gray" }}>
                posted 1 minute ago
              </p>
            </Grid>
          </Grid>
          <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
          <TextField
            fullWidth
            id="outlined-textarea"
            label="Feedback"
            placeholder=" "
            multiline
          />

          <Button variant="contained" endIcon={<SendIcon />}></Button>
        </Paper>
      )}
    </div>
  );
}
