import React, { useState } from "react";
import "./indexLogin.css";
import { login } from "../../services/auth";

export default function Login() {
    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        console.log({
            emailLogin,
            passwordLogin,
        });

        // Passando o Token
        // login(response.token)
    };

    return (
        <div className="w-full conta">
            <form
                className="bg-white shadow-xl w-1/3 place-content-center  rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmitLogin}
            >
                <div className="email mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        E-mail
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        name="emailLogin"
                        placeholder="E-mail"
                        id="emailLogin"
                        onChange={(e) => {
                            setEmailLogin(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Senha
                    </label>
                    <input
                        className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        name="passwordLogin"
                        id="passwordLogin"
                        placeholder="********"
                        onChange={(e) => {
                            setPasswordLogin(e.target.value);
                        }}
                    />
                </div>

                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Entrar
                </button>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2023 Sorria Sempre Mais. All rights reserved.
            </p>
        </div>
    );
}
