import React from 'react';
import DataTable from 'react-data-table-component';
import ModalEditCita from './ModalEditCita';


// const tablaUsuarios = users.users;
const columnas = ( (EditCitaExamen,EliminarCita) => [
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
        name: "Fecha",
        selector: "fecha",
        sortable: true
    },
    {
        name: "Hora",
        selector: "hora",
        sortable: true
    },
    {
        name: "Código",
        selector: "codigo",
        sortable: true
    },
    {
        cell: (row) =>
            <div>
                <button onClick={()=>EditCitaExamen(row)} id={ row._id } 
                    type="button"
                    className="btn btn-outline-primary" 
                    data-toggle="modal" 
                    data-target="#exampleModaledit">                           
                        <i className="ion-ios-refresh"></i>
                </button>{" "}
                <button onClick={()=>EliminarCita(row._id)} id={ [row._id] } 
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


class TablaCitas extends React.Component {

    state = {
        busquedas: "",
        selectedCita: {}
    }
    onChange = async e => {
        e.persist();
        await this.setState({ busqueda: e.target.value });
        this.filtrarElementos();
    }

    leerCitas = ()=> {
        setTimeout(() => {
            fetch("http://localhost:9000/citaexamen/listar_ce")
            .then(res => res.json())
            .then(data => this.setState({ citas: data.citas, citasTabla : data.citas }));
        }, 50);
    }
    
    ActualizarCita = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const cita = {_id: data.get('id'), typeDoc: data.get('typeDoc'),doc: data.get('doc'), fecha: data.get('fecha'), hora: data.get('hora'), codigo: data.get('codigo')} 
        fetch("http://localhost:9000/citaexamen/actualizar_ce",
            {
            headers: {"content-type":"application/json"},
            method: "POST",
            body: JSON.stringify(cita)
             })
        .then(dato=>dato.json())
        .then(dato=>alert(dato.msg))
        .catch(error=>alert(error));
        this.leerCitas();
    };


    EditCitaExamen = (cita) => {
        this.setState({selectedCita: cita})
    }

    EliminarCita = (_id) => { 
        fetch(`http://localhost:9000/citaexamen/eliminar_c/${_id}`, {method: 'DELETE'})
        .then(dato=>alert("Cita eliminada exitosamente!!"))
        this.leerCitas();
    }
    componentDidMount() {
        this.leerCitas();
    }


    handleChange = state => {
        console.log('state', state.selectedRows);

        this.setState({ selectedRows: state.selectedRows });
    };

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
                                            columns={columnas (this.EditCitaExamen,this.EliminarCita)}
                                            data={this.state.citasTabla}
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
                    {/* Modal add*/}
                
                    {/* Modal edit*/}
                    <ModalEditCita selectedCita={this.state.selectedCita} ActualizarCita={this.ActualizarCita}/>
                </section>
            </>
        )
    }
}
export default TablaCitas;