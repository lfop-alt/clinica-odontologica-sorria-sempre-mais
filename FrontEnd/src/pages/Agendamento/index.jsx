import "./index.css";
import TextField from "@mui/material/TextField";
import PersistentDrawerLeft from "../../components/Navbar";

export default function Agendamento() {
    return (
        <div className="containerC">
            <PersistentDrawerLeft />
            <div className="container shadow-xl">
                <TextField
                    id="cliente"
                    label="Cliente"
                    variant="outlined"
                    fullWidth
                />
                incluir mais de um procedimento
                <TextField
                    id="procedimento"
                    label="Procedimentos"
                    type="text"
                    variant="outlined"
                />
                <TextField
                    id="dentista"
                    label="Dentista"
                    type="text"
                    variant="outlined"
                />
                <TextField id="outlined-basic" variant="outlined" type="date" />
                <TextField id="outlined-basic" variant="outlined" type="time" />
            </div>
        </div>
    );
}
