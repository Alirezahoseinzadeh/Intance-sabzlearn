import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridRowSpacingParams } from "@mui/x-data-grid";
import "./Order.Style.css";
import { useSelector } from "react-redux";
export default function Orders() {
  const products = useSelector((state: any) => state.products);

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
      field: "Completed",
      headerName: "وضعیت دوره",
      width: 150,
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
            fontSize: params.row.id === 6 ? "16px" : "inherit",
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
        const isTotalRow = params.row.id === 6;

        return !isTotalRow ? (
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

  const rows = [
    {
      id: 1,
      sid: 1,
      productName: "Java Script",
      lname: "محمد امین سعیدی راد",
      Completed: "تکمیل شده",
      price: "2.300.000 هزار تومان",
    },
    {
      id: 2,
      sid: 2,
      productName: "React Js",
      lname: "محمد امین سعیدی راد",
      Completed: "در حال برگزاری",
      price: "4.700.000 هزار تومان",
    },
    {
      id: 3,
      sid: 3,
      productName: "Node JS",
      lname: "محمد امین سعیدی راد",
      Completed: "در اننطار شروع",
      price: "1.150.000 هزار تومان",
    },
    {
      id: 4,
      sid: 4,
      productName: "Php",
      lname: "قدیر یلمه",
      Completed: "تکمیل شده",
      price: "رایگان",
    },
    {
      id: 5,
      sid: 5,
      productName: "20 کتابخانه کابردی با js",
      lname: "رضا دارابی",
      Completed: "تکمیل شده",
      price: "رایگان",
    },
    {
      id: 6,
      sid: 6,
      productName: "تعداد دوره",
      lname: "5",
      Completed: "مجموع",
      price: "7.000.000 میلیون تومان",
    },
  ];
  const handleDelete = (id: any) => {
    console.log(`Deleting item with id: ${id}`);
  };
  const getRowId = (row: any) => row.id;

  const getRowClassName = (params: any) => {
    return params.row.id === 6 ? "row6" : "";
  };
  const getRowSpacing = React.useCallback((params: GridRowSpacingParams) => {
    return {
      top: params.isFirstVisible ? 0 : 5,
      bottom: params.isLastVisible ? 0 : 5,
    };
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#bdbdb9",
      }}>
      <Box
        sx={{
          direction: "rtl",
          display: "flex",
          flexDirection: "column",
          alignItems: "Center",
          justifyContent: "center",
          width: "100%",
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

// import React from "react";
// import { Box, Button, Typography } from "@mui/material";
// import { DataGrid, GridRowSpacingParams } from "@mui/x-data-grid";
// import "./Order.Style.css";
// import { useSelector } from "react-redux";

// export default function Orders() {
//   const products = useSelector((state: any) => state.products);

//   // Dynamically generate the rows based on products
//   const rows = products.map((product: any) => ({
//     id: product.id,
//     sid: product.id,
//     productName: product.name,
//     lname: product.author,
//     Completed: product.status,
//     price: product.price,
//   }));

//   // Dynamically generate the total row
//   const totalRow = {
//     id: rows.length + 1,
//     sid: rows.length + 1,
//     productName: "تعداد دوره",
//     lname: String(rows.length),
//     Completed: "مجموع",
//     price: `${products.reduce(
//       (total: number, product: any) => total + product.price,
//       0
//     )} میلیون تومان`,
//   };

//   const fields = [
//     {
//       field: "sid",
//       headerName: "شماره",
//       width: 150,
//     },
//     {
//       field: "productName",
//       headerName: "محصول",
//       width: 180,
//       headerClassName: "custom-header",
//     },
//     {
//       field: "lname",
//       headerName: "مدرس دوره",
//       width: 180,
//       headerClassName: "custom-header",
//     },
//     {
//       field: "Completed",
//       headerName: "وضعیت دوره",
//       width: 150,
//       headerClassName: "custom-header",
//     },
//     {
//       field: "price",
//       headerName: "قیمت",
//       width: 200,
//       headerClassName: "custom-header",
//       renderCell: (params: any) => (
//         <div
//           style={{
//             fontSize: params.row.id === totalRow.id ? "16px" : "inherit",
//           }}>
//           {params.value}
//         </div>
//       ),
//     },
//     {
//       field: "delete",
//       headerName: "عملیات",
//       width: 120,
//       renderCell: (params: any) => {
//         const isTotalRow = params.row.id === totalRow.id;

//         return !isTotalRow ? (
//           <Button
//             sx={{
//               backgroundColor: "#d60000",
//               color: "white",
//               "&:hover": {
//                 backgroundColor: "#f90000",
//                 color: "white",
//               },
//             }}
//             variant="outlined"
//             color="error"
//             onClick={() => handleDelete(params.row.id)}>
//             حذف
//           </Button>
//         ) : null;
//       },
//     },
//   ];

//   const handleDelete = (id: any) => {
//     // Implement your delete logic here, using the id
//     console.log(`Deleting item with id: ${id}`);
//   };

//   const getRowId = (row: any) => row.id;

//   const getRowClassName = (params: any) => {
//     return params.row.id === totalRow.id ? "row-total" : "";
//   };

//   const getRowSpacing = React.useCallback((params: GridRowSpacingParams) => {
//     return {
//       top: params.isFirstVisible ? 0 : 5,
//       bottom: params.isLastVisible ? 0 : 5,
//     };
//   }, []);

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         minHeight: "100vh",
//         backgroundColor: "#bdbdb9",
//       }}>
//       <Box
//         sx={{
//           direction: "rtl",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "Center",
//           justifyContent: "center",
//           width: "100%",
//           borderRadius: "25px",
//         }}>
//         <Typography
//           sx={{
//             marginTop: "10px",
//             fontSize: "20px",
//             width: "80%",
//             backgroundColor: "#018957 ",
//             borderRadius: "10px",
//             textAlign: "Center",
//             padding: "10px 0",
//             color: "white",
//             fontWeight: "600",
//           }}>
//           لیست دوره های انتخاب شده
//         </Typography>

//         <Box
//           sx={{
//             width: "80%",
//             backgroundColor: "white",
//             marginTop: "30px",
//             borderRadius: "25px",
//           }}>
//           <DataGrid
//             getRowId={getRowId}
//             getRowClassName={getRowClassName}
//             sortingMode="server"
//             disableColumnFilter
//             disableColumnMenu
//             hideFooterPagination={true}
//             columns={fields}
//             rows={rows.concat([totalRow])}
//             getRowSpacing={getRowSpacing}
//             sx={{ paddingRight: "10px", borderRadius: "25px" }}
//           />
//         </Box>
//       </Box>
//     </Box>
//   );
// }
