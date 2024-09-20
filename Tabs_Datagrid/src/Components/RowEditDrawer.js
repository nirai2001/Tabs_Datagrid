import React from 'react';
import { Box, Drawer, TextField, Typography, Switch, FormControlLabel, Button } from "@mui/material";

const RowEditDrawer = ({
  drawerOpen,
  handleCloseDrawer,
  entity,
  setEntity,
  logicalName,
  setLogicalName,
  addToUtility,
  setAddToUtility,
  enableAudit,
  setEnableAudit,
  handleSave,
  handleCancel,
  selectedRow
}) => (
  <Drawer anchor="right" open={drawerOpen} onClose={handleCloseDrawer}>
    <Box sx={{ width: 584, height: "100%", display: "flex", flexDirection: "column" }}>
      <Box sx={{ flex: 1, padding: 2 }}>
        <Typography variant="h6" sx={{ marginBottom: "20px" }}>
          Edit Row
        </Typography>

        {selectedRow && (
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
              <TextField
                label="Entity"
                value={entity}
                onChange={(e) => setEntity(e.target.value)}
                variant="outlined"
                fullWidth
                sx={{ marginRight: 1 }}
              />
              <TextField
                label="Logical Name"
                value={logicalName}
                onChange={(e) => setLogicalName(e.target.value)}
                variant="outlined"
                fullWidth
                sx={{ marginLeft: 1 }}
              />
            </Box>

            <Box sx={{ marginBottom: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={addToUtility}
                    onChange={(e) => setAddToUtility(e.target.checked)}
                  />
                }
                label="Add to Utility"
              />
            </Box>

            <Box sx={{ marginBottom: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={enableAudit}
                    onChange={(e) => setEnableAudit(e.target.checked)}
                  />
                }
                label="Enable Audit"
              />
            </Box>
          </Box>
        )}
      </Box>

      <Box
        sx={{
          padding: 2,
          borderTop: "1px solid #ddd",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Button variant="contained" color="primary" onClick={handleSave} sx={{ marginRight: 1 }}>
          Save
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleCancel}>
          Cancel
        </Button>
      </Box>
    </Box>
  </Drawer>
);

export default RowEditDrawer;
