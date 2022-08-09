import React from "react";

export const Cola = () => {
    return (
        <div className="grid grid-cols-3 gap-20">
            <div className="grid justify-items-center gap-5 col-span-2">
            <div className="flex flex-row w-full items-center">
                    <hr className="w-full" />
                    <h1 className="mx-1 whitespace-nowrap">Atendiendo al cliente</h1>
                    <hr className="w-full" />
                </div>
                <ul className="grid gap-5 ">
                    <li className="grid grid-cols-1">
                        <h2 className="text-5xl">No. 33</h2>

                        <div className="grid grid-cols-2 gap-4 my-2">
                            <div className="text-2xl border px-1 bg-red-100 border-red-300">karim sabag</div>
                            <div className="text-2xl border px-1 bg-red-100 border-red-300">Escritorio: 5</div>
                        </div>
                        <hr className="w-full" />
                    </li>
                    <li className="grid grid-cols-1">
                        <h2 className="text-5xl">No. 33</h2>

                        <div className="grid grid-cols-2 gap-4 my-2">
                            <div className="text-2xl border px-1 bg-red-100 border-red-300">karim sabag</div>
                            <div className="text-2xl border px-1 bg-red-100 border-red-300">Escritorio: 5</div>
                        </div>
                        <hr className="w-full" />
                    </li>
                </ul>
            </div>
            <div className="grid justify-items-center gap-5">
                <div className="flex flex-row w-full items-center">
                    <hr className="w-full" />
                    <h1 className="mx-1">Historial</h1>
                    <hr className="w-full" />
                </div>

                <ul className="grid gap-5">
                    <li className="grid grid-cols-1">
                        <h2>Ticket No. 33</h2>

                        <div className="grid grid-cols-2 gap-4 my-1">
                            <div className="">
                                Agente:{" "}
                                <strong className="border px-1 bg-red-100 border-red-300">
                                    Karim sabag
                                </strong>
                            </div>
                            <div className="">
                                En el escritorio:{" "}
                                <strong className="border px-1 bg-red-100 border-red-300">
                                    5
                                </strong>
                            </div>
                        </div>
                        <hr className="w-full" />
                    </li>
                    <li className="grid grid-cols-1">
                        <h2>Ticket No. 33</h2>

                        <div className="grid grid-cols-2 gap-4 m-1">
                            <div className="">
                                Agente:{" "}
                                <strong className="border px-1 bg-red-100 border-red-300">
                                    Karim sabag
                                </strong>
                            </div>
                            <div className="">
                                En el escritorio:{" "}
                                <strong className="border px-1 bg-red-100 border-red-300">
                                    5
                                </strong>
                            </div>
                        </div>
                        <hr className="w-full" />
                    </li>
                </ul>
            </div>
        </div>
    );
};
