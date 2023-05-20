import "./index.css";

export default function BoxStatics() {
    return (
        <div className=" bg-white rounded px-8 pt-12  ca ">
            <div className=" rounded px-8  shadon1">QTDS CONSULTAS</div>
            <div className=" bg-slate-400 shadow-xl rounded px-8 pt-6 pb-8 mb-4 shadon1">
                PESSOAS CADASTRADAS
            </div>
            <div className=" bg-slate-400 shadow-xl rounded px-8 pt-6 pb-8 mb-4 shadon1">
                QTDS CONSULTAS REMARCADAS
            </div>
            <div className=" bg-slate-400 shadow-xl rounded px-8 pt-6 pb-8 mb-4 shadon1">
                QTDS CONSULTAS CANCELADAS
            </div>
        </div>
    );
}
