import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';

import headphone from "../../assets/headphone.png";
import mouse from "../../assets/mouse.png";
import keyboard from "../../assets/keyboard.png";
import smartwatch from "../../assets/smartwatch.png";


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Products = [
  {
    ProductName: "Headphones",
    Price: 1500,
    Rating: 4.5,
    Stock: 20,
    ProductImage: headphone
  },
  {
    ProductName: "Mouse",
    Price: 500,
    Rating: 4.2,
    Stock: 30,
    ProductImage: mouse
  },
  {
    ProductName: "Keyboard",
    Price: 1200,
    Rating: 4.4,
    Stock: 15,
    ProductImage: keyboard
  },
  {
    ProductName: "Smart Watch",
    Price: 3000,
    Rating: 4.6,
    Stock: 10,
    ProductImage:smartwatch
  }
];


export default function BasicTable() {
  return (
    // <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Dessert (100g serving)</TableCell>
    //         <TableCell align="right">Calories</TableCell>
    //         <TableCell align="right">Fat&nbsp;(g)</TableCell>
    //         <TableCell align="right">Carbs&nbsp;(g)</TableCell>
    //         <TableCell align="right">Protein&nbsp;(g)</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {rows.map((row) => (
    //         <TableRow
    //           key={row.name}
    //           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    //         >
    //           <TableCell component="th" scope="row">
    //             {row.name}
    //           </TableCell>
    //           <TableCell align="right">{row.calories}</TableCell>
    //           <TableCell align="right">{row.fat}</TableCell>
    //           <TableCell align="right">{row.carbs}</TableCell>
    //           <TableCell align="right">{row.protein}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>




    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell>Product Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Products.map((product) => (
            <TableRow key={product.ProductName}>
              <TableCell>{product.ProductName}</TableCell>
              <TableCell>{product.Price}</TableCell>
              <TableCell>{product.Rating}</TableCell>
              <TableCell>{product.Stock}</TableCell>
              <TableCell><img src={product.ProductImage} alt="Image" style={{ width: "60px",height: "60px"}}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
