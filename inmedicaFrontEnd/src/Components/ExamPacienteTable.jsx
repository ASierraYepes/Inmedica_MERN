import React from 'react'

export default function AgendaExamTable() {
    return (
        <>
            <div className="row p-3 mb-2 text-dark">
                <div className="col-md-12 col-lg-4">
                    <form>
                        <div className="form-group">
                            <table>
                                <tr>
                                    <th>Numero</th>
                                    <th>Descripcion</th>
                                    <th>Fecha</th>
                                    <th>Hora</th>
                                </tr>
                                <tr><td>
                                    <input type="number" className="form-control " id="numero1" placeholder="Numero" readonly />
                                </td><td>
                                        <input type="text" className="form-control" id="descripcion1" placeholder="Descripcion" readonly />
                                    </td><td>
                                        <input type="date" className="form-control" id="Fecha1" placeholder="Fecha Examen" readonly />
                                    </td><td>
                                        <input type="text" className="form-control form-check" id="hora1" value="Hora1" />
                                    </td></tr>
                                <tr><td>
                                    <input type="number" className="form-control" id="numero2" placeholder="Numero" readonly />
                                </td><td>
                                        <input type="text" className="form-control" id="descripcion2" placeholder="Descripcion" readonly />
                                    </td><td>
                                        <input type="date" className="form-control" id="Fecha2" placeholder="Fecha Examen" readonly />
                                    </td><td>
                                        <input type="text" className="form-control form-check" id="hora2" value="hora2" />
                                    </td></tr>
                            </table>
                        </div><br /><br />
                    </form>
                </div>
            </div>
        </>
    )
}