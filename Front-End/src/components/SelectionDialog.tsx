import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from '@mui/material';

interface SelectionDialogProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (selectedOption: string) => void;
}

const SelectionDialog: React.FC<SelectionDialogProps> = ({ open, onClose, onSubmit }) => {
    const [selectedOption, setSelectedOption] = useState<string>('');

    const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedOption(event.target.value as string);
    };

    const handleSubmit = () => {
        onSubmit(selectedOption);
        onClose(); // Close the dialog after submitting
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Select a Tour Type</DialogTitle>
            <DialogContent>
                <FormControl fullWidth>
                    <InputLabel id="tour-select-label">Tour Type</InputLabel>
                    <Select
                        labelId="tour-select-label"
                        value={selectedOption}
                        onChange={handleSelectChange}
                    >
                        <MenuItem value="Historical">Historical Tour</MenuItem>
                        <MenuItem value="Cultural">Cultural Tour</MenuItem>
                        <MenuItem value="Food">Food Tour</MenuItem>
                        <MenuItem value="Nightlife">Nightlife Tour</MenuItem>
                        <MenuItem value="Adventure">Adventure Tour</MenuItem>
                        <MenuItem value="Relaxation">Relaxation Tour</MenuItem>
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary" disabled={!selectedOption}>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default SelectionDialog;
