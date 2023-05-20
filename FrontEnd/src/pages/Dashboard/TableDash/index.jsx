import "../../../index.css";

export default function TableDash() {
    return (
        <table className="table-auto bg-black">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Data</th>
                </tr>
                <tbody>
                    <tr>
                        <td>Luiz Fernando</td>
                        <td>luiz@luiz.com</td>
                        <td>14/02/1998</td>
                    </tr>
                </tbody>
            </thead>
        </table>
    );
}
