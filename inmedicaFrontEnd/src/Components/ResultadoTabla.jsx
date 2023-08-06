import React from 'react';
import DataTable from 'react-data-table-component';
import ModalEditResultado from './ModalEditResultado';


// const tablaUsuarios = users.users;
const columnas = ( (EditResultado,EliminarResultado) => [
    {
        name: "id",
        selector: "_id",
        sortable: true
    },
    {
        name: "Tipo Documento",
        selector: "typeDoc",
        sortable: true
    },
    {
        name: "Documento",
        selector: "doc",
        sortable: true
    },
    {
        name: "Codigo Exámen",
        selector: "codigo",
        sortable: true
    },
    {
        name: "Resultado y Comentarios",
        selector: "resultado",
        sortable: true
    },
    {
        cell: (row) =>
            <div>
                <button onClick={()=>EditResultado(row)} id={ row._id } 
                    type="button"
                    className="btn btn-outline-primary" 
                    data-toggle="modal" 
                    data-target="#exampleModaledit">                           
                        <i className="ion-ios-refresh"></i>
                </button>{" "}
                <button onClick={()=>EliminarResultado(row._id)} id={ [row._id] } 
                    className="btn btn-outline-primary">
                        <i className="icon ion-md-trash"></i>
                </button>
            </div>,      
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
	},
]);

const paginationOpciones = {
    rowsPerPageTex: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos"
}


class ResultadoTabla extends React.Component {

    state = {
        busquedas: "",
        selectedResultado: {}
    }
    onChange = async e => {
        e.persist();
        await this.setState({ busqueda: e.target.value });
        this.filtrarElementos();
    }

    leerResultado = ()=> {
        setTimeout(() => {
            fetch("http://localhost:9000/resultadoexamen/listar_r")
            .then(res => res.json())
            .then(data => this.setState({ resultados: data.resultados, agendaTabla : data.resultados }));
        }, 50);
        
    }
    ActualizarResultado = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const resultado = {_id: data.get('id'),typeDoc: data.get('typeDoc'), doc: data.get('doc'), codigo: data.get('codigo'),resultado: data.get('resultado')} 
        fetch("http://localhost:9000/resultadoexamen/actualizar_r",
            {
            headers: {"content-type":"application/json"},
            method: "POST",
            body: JSON.stringify(resultado)
             })
        .then(dato=>dato.json())
        .then(dato=>alert("Resultado actualizado exitosamente!!"))
        .catch(error=>alert(error));
        this.leerResultado();
    };


    EditResultado = (resultado) => {
        this.setState({selectedResultado: resultado})
    }

    EliminarResultado = (_id) => {
        fetch(`http://localhost:9000/resultadoexamen/eliminar_r/${_id}`, {method: 'DELETE'})
        .then(dato=>alert("Resultado eliminado exitosamente!!"))
        this.leerResultado();
    }
    componentDidMount() {
        this.leerResultado();
    }


    handleChange = state => {
        console.log('state', state.selectedRows);

        this.setState({ selectedRows: state.selectedRows });
    };

    /*--------- CRUD ---------*/

    
    
    /*--------- FIN CRUD ---------*/

    render() {
        return (
            <>
                <section>
                    <div className="container">
                        <div className="row" id="GraficoDash">
                            <div className="col-lg-12 my-3">
                                <div className="card rounded-1">
                                    <div className="table-responsive">
                                        <DataTable
                                            columns={columnas (this.EditResultado,this.EliminarResultado)}
                                            data={this.state.agendaTabla}
                                            pagination
                                            paginationComponentOptions={paginationOpciones}
                                            fixedHeader
                                            fixedHeaderScrollHeight="600px"
                                            noDataComponent={<span>No se encontró ningún elemento</span>}
                                            highlightOnHover
		                                    pointerOnHover
                                            onRowSelected={this.handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Modal edit*/}
                    <ModalEditResultado selectedResultado={this.state.selectedResultado} ActualizarResultado={this.ActualizarResultado}/>
                </section>
            </>
        )
    }
}
export default ResultadoTabla;