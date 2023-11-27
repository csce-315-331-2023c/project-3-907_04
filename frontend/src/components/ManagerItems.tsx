import {
    Paper,
    Typography,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
    TextField,
    MenuItem,
    Select,
    Checkbox,
    Pagination,
} from "@mui/material";
import { useMenuStore } from "../store";
import { ItemToAdd } from "./ItemToAdd";
import { EditItemIngredients } from "./EditItemIngredients";
import { useState } from "react";
import { DeleteConfirmItems } from "./DeleteConfirmItems";

// https://stackoverflow.com/questions/42761068/paginate-javascript-array
function paginate<T>(array: T[], pageSize: number, pageNumber: number): T[] {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

const pageSize = 10;

export const ManagerItems = () => {
    const [isAddItemDialogOpen, setAddItemDialogOpen] = useState(true);
    const cart = useMenuStore((state) => state.cart);
    const menuitems = useMenuStore((state) => state.menuItems);
    const [page, setPage] = useState(1);
    const changeItemPrice = useMenuStore((state) => state.changeItemPrice);
    const changeGF = useMenuStore((state) => state.changeGF);
    const changeVegan = useMenuStore((state) => state.changeVegan);
    const changeExtraSauce = useMenuStore((state) => state.changeExtraSauce);
    const changeSize = useMenuStore((state) => state.changeSize);
    const changeItemName = useMenuStore((state) => state.changeItemName);
    const deleteMenuItem = useMenuStore((state) => state.deleteMenuItem);

    const tableStyle = { width: "100%", };
    const cellStyle = { padding: "8px", };


    return (
        <Paper
            style={{
                padding: "20px",
                margin: "10px",
                backgroundColor: "#f3f3f3",
            }}
        >
            <ItemToAdd
                open={isAddItemDialogOpen}
                onClose={() => setAddItemDialogOpen(false)}
            />
            <Typography variant="h5" style={{ textAlign: "center" }}>
                Items
            </Typography>
            <Pagination count={Math.ceil(menuitems.length / pageSize)} onChange={(e, v) => setPage(v)} />
            <TableContainer>
                <Table style={tableStyle}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={cellStyle}>
                                <Typography variant="h6">{"ID"}</Typography>
                            </TableCell>
                            <TableCell style={cellStyle}>
                                <Typography variant="h6">{"Names"}</Typography>
                            </TableCell>
                            <TableCell style={cellStyle}>
                                <Typography variant="h6">{"Price"}</Typography>
                            </TableCell>
                            <TableCell style={cellStyle}>
                                <Typography variant="h6">{"Gluten Free"}</Typography>
                            </TableCell>
                            <TableCell style={cellStyle}>
                                <Typography variant="h6">{"Vegan"}</Typography>
                            </TableCell>
                            <TableCell style={cellStyle}>
                                <Typography variant="h6">{"Size"}</Typography>
                            </TableCell>
                            <TableCell style={cellStyle}>
                                <Typography variant="h6">{"Extra Sauce"}</Typography>
                            </TableCell>
                            <TableCell style={cellStyle}>
                                <Typography variant="h6">{"Delete Item"}</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginate(menuitems, pageSize, page).map((menuItem, itemIndex) => (
                            <TableRow key={itemIndex}>
                                <TableCell style={cellStyle}>{menuItem.id}</TableCell>
                                <TableCell style={cellStyle}>
                                    <TextField
                                        variant="outlined"
                                        type="string"
                                        value={menuItem.name}
                                        onChange={(e) =>
                                            changeItemName(menuItem.id, e.target.value as any)
                                        }
                                    />
                                </TableCell>
                                <TableCell style={cellStyle}>
                                    <TextField
                                        variant="outlined"
                                        type="number"
                                        value={menuItem.price}
                                        onChange={(e) =>
                                            changeItemPrice(menuItem.id, e.target.value as any)
                                        }
                                    />
                                </TableCell>
                                <TableCell style={cellStyle}>
                                    <Checkbox
                                        checked={menuItem.glutenFree}
                                        onChange={(e) => changeGF(menuItem.id)}
                                    />
                                </TableCell>
                                <TableCell style={cellStyle}>
                                    <Checkbox
                                        checked={menuItem.vegan}
                                        onChange={(e) => changeVegan(menuItem.id)}
                                    />
                                </TableCell>
                                <TableCell style={cellStyle}>
                                    <Select
                                        labelId="size-select-label"
                                        id="size-select-label"
                                        value={menuItem.size}
                                        label="menuitem.size"
                                        onChange={(e) => changeSize(menuItem.id, e.target.value)}
                                    >
                                        <MenuItem value={"single"}>single</MenuItem>
                                        <MenuItem value={"double"}>double</MenuItem>
                                        <MenuItem value={"large"}>large</MenuItem>
                                        <MenuItem value={"regular"}>regular</MenuItem>
                                        <MenuItem value={"snack"}>snack</MenuItem>
                                        <MenuItem value={"plus"}>plus</MenuItem>
                                        <MenuItem value={""}>one piece</MenuItem>
                                        <MenuItem value={"none"}>none</MenuItem>
                                        <MenuItem value={"Medium"}>Medium</MenuItem>
                                        <MenuItem value={"two piece"}>two piece</MenuItem>
                                        <MenuItem value={"three piece"}>three piece</MenuItem>
                                    </Select>
                                </TableCell>
                                <TableCell style={cellStyle}>
                                    <Checkbox
                                        checked={menuItem.extrasauce}
                                        onChange={(e) => changeExtraSauce(menuItem.id)}
                                    />
                                </TableCell>
                                <TableCell style={cellStyle}>
                                    <DeleteConfirmItems
                                        id={menuItem.id}
                                        name={menuItem.name}
                                        open={isAddItemDialogOpen}
                                        onClose={() => setAddItemDialogOpen(false)}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};
