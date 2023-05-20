import "./index.css";

import PersistentDrawerLeft from "../../components/Navbar";
import BoxStatics from "./BoxStatics";
import TableDash from "./TableDash";

export default function Dashboard() {
    return (
        <div className="container">
            <PersistentDrawerLeft />
            <div className=" bg-white shadow-xl rounded mt-52 px-8 pb-8 mb-4 containerDash">
                <BoxStatics />
            </div>
            <div className=" bg-white shadow-xl rounded px-8 pb-8 mb-4 agendamentos">
                <TableDash />
            </div>
            <div className=" bg-white shadow-xl rounded px-8 pb-8 mb-4 ultimoContato">
                <ul>
                    <li>Versão 1.0</li>
                    <li>&copy;2023 Sorria Sempre Mais. All rights reserved.</li>
                    <li>Politica de privacidade</li>
                </ul>
            </div>
        </div>
    );
}
