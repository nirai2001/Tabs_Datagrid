import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import {
  Button,
  Drawer,
  FormControlLabel,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import "./table.css";
import Tags from "./tags";
import CustomPagination from "./Components/customPagination";

const rows = [
  {
    id: 1,
    Entity: "Company A",
    UtilityUsage: "Electricity",
    Audit: "Passed",
    LogicalName: 101,
    CreatedBy: "John Doe",
  },
  {
    id: 2,
    Entity: "Company B",
    UtilityUsage: "Water",
    Audit: "Failed",
    LogicalName: 102,
    CreatedBy: "Jane Smith",
  },
  {
    id: 3,
    Entity: "Company C",
    UtilityUsage: "Gas",
    Audit: "Pending",
    LogicalName: 103,
    CreatedBy: "Mike Johnson",
  },
  {
    id: 4,
    Entity: "Company D",
    UtilityUsage: "Electricity",
    Audit: "Passed",
    LogicalName: 104,
    CreatedBy: "Emily Davis",
  },
  {
    id: 5,
    Entity: "Company E",
    UtilityUsage: "Water",
    Audit: "Passed",
    LogicalName: 105,
    CreatedBy: "Chris Brown",
  },
  {
    id: 6,
    Entity: "Company f",
    UtilityUsage: "Water",
    Audit: "Passed",
    LogicalName: 106,
    CreatedBy: "gopal Brown",
  },
];

const renderCustomHeader = (headerName) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {headerName}
      <SwapVertIcon
        style={{ marginLeft: 10, fontSize: "16px", color: "#1976d2" }}
      />
    </div>
  );
};

export default function DataGridDemo() {
  const columns = [
    {
      field: "Entity",
      headerName: "Entity",
      width: 150,
      renderHeader: () => renderCustomHeader("Entity"),
    },
    {
      field: "UtilityUsage",
      headerName: "Utility Usage",
      width: 150,
      sortable: true,
      renderHeader: () => renderCustomHeader("Utility Usage"),
      renderCell: (params) => (
        <Tags
          backgroundColor={"#FFF2E5"}
          color={"#E57916"}
          label={params.row.UtilityUsage.toString()}
          customSx={{ borderRadius: "4px" }}
        />
      )
    },
    {
      field: "Audit",
      headerName: "Audit",
      width: 150,
      renderHeader: () => renderCustomHeader("Audit"),
    },
    {
      field: "LogicalName",
      headerName: "Logical Name",
      width: 150,
      renderHeader: () => renderCustomHeader("LogicalName"),
    },
    {
      field: "CreatedBy",
      headerName: "Created By",
      width: 150,
      renderHeader: () => renderCustomHeader("CreatedBy"),
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      renderCell: (params) => (
        <>
          <Button
            sx={{ color: "black", fontSize: "10px" }}
            onClick={() => handleEdit(params.row)}
          >
            edit
          </Button>
          <Button
            sx={{ color: "black", fontSize: "10px" }}
            onClick={() => handleEdit(params.row)}
          >
            manage
          </Button>
        </>
      ),
      renderHeader: () => renderCustomHeader("Actions"),
    },
  ];

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [entity, setEntity] = React.useState("");
  const [logicalName, setLogicalName] = React.useState("");
  const [addToUtility, setAddToUtility] = React.useState(false);
  const [enableAudit, setEnableAudit] = React.useState(false);
  const [totalCount, setTotalCount] = React.useState(rows.length);
  const [page, setPage] = React.useState(1); // Note: Page index starts from 0
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const pageCount = Math.ceil(totalCount / rowsPerPage);

  const handlePageChange = (e, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(Number(event.target.value));
    setPage(1); // Reset to the first page when rows per page changes
  };

  const handleEdit = (row) => {
    setSelectedRow(row);
    setEntity(row.Entity);
    setLogicalName(row.LogicalName);
    // Set default switch states, you can modify this as needed
    setAddToUtility(false);
    setEnableAudit(false);
    setDrawerOpen(true);
  };

  const CustomPaginationComponent = () => (
    <CustomPagination
      rowsPerPage={rowsPerPage}
      pageCount={pageCount}
      page={page}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      handleChangePage={handlePageChange}
      options={[5, 10, 25, 50]}
    />
  );

  const handleSave = () => {
    // Implement save functionality here
    console.log("Saved:", { entity, logicalName, addToUtility, enableAudit });
    handleCloseDrawer();
  };

  const handleCancel = () => {
    handleCloseDrawer();
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  // Slice the data based on the current page and rows per page
  const slicedRows = rows.slice((page-1) * rowsPerPage, (page) * rowsPerPage);

  return (
    <Box sx={{ height: 400, maxWidth: 1000, margin: "0 auto" }}>
      <DataGrid
        rows={slicedRows}
        columns={columns}
        disableColumnMenu
        disableRowSelectionOnClick
        disableAutosize
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#f0f0f0",
            fontWeight: "bold",
          },
          "& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100% !important",
            whiteSpace: "normal",
            lineHeight: "1.2",
            padding: "8px",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: "1.2",
            whiteSpace: "normal",
            overflow: "visible",
          },
          "& .MuiDataGrid-row": {
            maxHeight: "none !important",
          },
          "& .MuiDataGrid-renderingZone": {
            maxHeight: "none !important",
          },
          "& .MuiDataGrid-virtualScrollerContent": {
            maxHeight: "none !important",
          },
          "& .MuiDataGrid-sortIcon": {
            display: "none !important",
          },
        }}
        autoHeight
        pagination={true}
        page={page}
        rowsPerPage={rowsPerPage}
        pageSize={rowsPerPage}
        onPageChange={handlePageChange}
        onPageSizeChange={handleChangeRowsPerPage}
        slots={{
          pagination: CustomPaginationComponent,
        }}
        // hideFooterPagination
      />
      <Drawer anchor="right" open={drawerOpen} onClose={handleCloseDrawer}>
        <Box
          sx={{
            width: 584,
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ flex: 1, padding: 2 }}>
            <Typography variant="h6" sx={{ marginBottom: "20px" }}>
              Edit Row
            </Typography>

            {selectedRow && (
              <Box>
                {/* Entity and Logical Name text fields */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 2,
                  }}
                >
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

                {/* Add to Utility switch */}
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

                {/* Enable Audit switch */}
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

          {/* Buttons for Save and Cancel */}
          <Box
            sx={{
              padding: 2,
              borderTop: "1px solid #ddd",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
              sx={{ marginRight: 1 }}
            >
              Save
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
