import React from "react";
import { Button } from "@mui/material";

const ActionButtons = ({ row, handleEdit }) => (
  <>
    <Button
      sx={{ color: "black", fontSize: "10px" }}
      onClick={() => handleEdit(row)}
    >
      edit
    </Button>
    <Button
      sx={{ color: "black", fontSize: "10px" }}
      onClick={() => handleEdit(row)}
    >
      manage
    </Button>
  </>
);

export default ActionButtons;
