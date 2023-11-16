import React, { useState } from "react";
import {
    Button,
    // ButtonGroup,
    Checkbox,
    Dialog,
    DialogContent,
    DialogTitle,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { useMenuStore } from "../store";

interface DeleteConfirmProps {
    id: number;
    name: string;
    open: boolean;
    onClose: () => void;
}

export const DeleteConfirmIngredient: React.FC<DeleteConfirmProps> = ({ id, name }) => {
    // const [isAddItemDialogOpen, setAddItemDialogOpen] = useState(true);
    const menuitems = useMenuStore((state) => state.menuItems);
    const changeSize = useMenuStore((state) => state.changeSize);
    // const tableStyle = {
    //   border: "1px solid #ddd",
    //   width: "100%",
    // }
    const deleteIngredient = useMenuStore((state) => state.deleteIngredient);
    const [open, setOpen] = useState(false);
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");

    const [glutenFree, setGlutenFree] = useState(false);
    const [vegan, setVegan] = useState(false);
    const [size, setSize] = useState<string | undefined>("");
    const [extraSauce, setExtraSauce] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg></Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Are you sure you want to delete {name}</DialogTitle>
                <DialogContent sx={{ display: 'flex', paddingX: '9em' }}>
                    <Button variant="contained" color="error" onClick={() => { setOpen(false); deleteIngredient(id); }} sx={{ marginRight: 'auto' }}>
                        Yes
                    </Button>

                    <Button variant="contained" color="primary" onClick={() => setOpen(false)}>
                        No
                    </Button>
                </DialogContent>
            </Dialog>
        </>
    );
};