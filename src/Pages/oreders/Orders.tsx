import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridRowSpacingParams } from "@mui/x-data-grid";
import "./Order.Style.css";
import { useSelector } from "react-redux";

export default function Orders() {
  const products = useSelector((state: any) => state.products);

  const handleDelete = (id: any) => {
    console.log(`Deleting item with id: ${id}`);
  };

  const getRowId = (row: any) => row.id;

  const getRowClassName = (params: any) => {
    return params.row.id === "totalRow" ? "row6" : "";
  };

  const getRowSpacing = React.useCallback((params: GridRowSpacingParams) => {
    return {
      top: params.isFirstVisible ? 0 : 5,
      bottom: params.isLastVisible ? 0 : 5,
    };
  }, []);

  const calculateTotalPrice = () => {
    return products.reduce(
      (total: any, product: any) =>
        total + parseInt(product.price.replace(/\D/g, "")),
      0
    );
  };

  const rows = products.map((product: any, index: any) => ({
    id: index + 1,
    sid: index + 1,
    productName: product.name,
    lname: product.auther,
    price: product.price,
  }));

  // Adding the last row as a summary row
  rows.push({
    id: "totalRow",
    sid: "",
    productName: "تعداد دوره",
    lname: products.length.toString(),
    price: calculateTotalPrice().toLocaleString() + " تومان",
    noDeleteButton: true,
  });

  const fields = [
    {
      field: "sid",
      headerName: "شماره",
      width: 150,
    },
    {
      field: "productName",
      headerName: "محصول",
      width: 180,
      headerClassName: "custom-header",
    },
    {
      field: "lname",
      headerName: "مدرس دوره",
      width: 180,
      headerClassName: "custom-header",
    },
    {
      field: "price",
      headerName: "قیمت",
      width: 200,
      headerClassName: "custom-header",
      renderCell: (params: any) => (
        <div
          style={{
            fontSize: params.row.id === "totalRow" ? "16px" : "inherit",
          }}>
          {params.value}
        </div>
      ),
    },
    {
      field: "delete",
      headerName: "عملیات",
      width: 120,
      renderCell: (params: any) => {
        const isTotalRow = params.row.id === "totalRow";

        return !isTotalRow && !params.row.noDeleteButton ? (
          <Button
            sx={{
              backgroundColor: "#d60000",
              color: "white",
              "&:hover": {
                backgroundColor: "#f90000",
                color: "white",
              },
            }}
            variant="outlined"
            color="error"
            onClick={() => handleDelete(params.row.id)}>
            حذف
          </Button>
        ) : null;
      },
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#bdbdb9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Box
        sx={{
          direction: "rtl",
          display: "flex",
          flexDirection: "column",
          alignItems: "Center",
          justifyContent: "center",
          width: "80%",
          borderRadius: "25px",
        }}>
        <Typography
          sx={{
            marginTop: "10px",
            fontSize: "20px",
            width: "80%",
            backgroundColor: "#018957 ",
            borderRadius: "10px",
            textAlign: "Center",
            padding: "10px 0",
            color: "white",
            fontWeight: "600",
          }}>
          لیست دوره های انتخاب شده
        </Typography>

        <Box
          sx={{
            width: "80%",
            backgroundColor: "white",
            marginTop: "30px",
            borderRadius: "25px",
          }}>
          <DataGrid
            getRowId={getRowId}
            getRowClassName={getRowClassName}
            sortingMode="server"
            disableColumnFilter
            disableColumnMenu
            hideFooterPagination={true}
            columns={fields}
            rows={rows}
            getRowSpacing={getRowSpacing}
            sx={{ paddingRight: "10px", borderRadius: "25px" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
