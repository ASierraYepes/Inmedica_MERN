import React from 'react';
import DataTable from 'react-data-table-component';
import ModalEditAgenda from './ModalEditAgenda';


// const tablaUsuarios = users.users;
const columnas = ( (EditHorario,EliminarHorario) => [
    {
        name: "id",
        selector: "_id",
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
        name: "Estado",
        selector: "estado",
        sortable: true
    },
    {
        cell: (row) =>
            <div>
                <button onClick={()=>EditHorario(row)} id={ row._id } 
                    type="button"
                    className="btn btn-outline-primary" 
                    data-toggle="modal" 
                    data-target="#exampleModaledit">                           
                        <i className="ion-ios-refresh"></i>
                </button>{" "}
                <button onClick={()=>EliminarHorario(row._id)} id={ [row._id] } 
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


class AgendaTabla extends React.Component {

    state = {
        busquedas: "",
        selectedHorario: {}
    }
    onChange = async e => {
        e.persist();
        await this.setState({ busqueda: e.target.value });
        this.filtrarElementos();
    }

    leerHorarios = ()=> {
        setTimeout(() => {
            fetch("http://localhost:9000/agenda/listar_a")
            .then(res => res.json())
            .then(data => this.setState({ horarios: data.horarios, agendaTabla : data.horarios }));
        }, 50);
        
    }
    ActualizarHorario = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const user = {_id: data.get('id'),fecha: data.get('fecha'), hora: data.get('hora'), estado: data.get('estado')} 
        fetch("http://localhost:9000/agenda/actualizar_a",
            {
            headers: {"content-type":"application/json"},
            method: "POST",
            body: JSON.stringify(user)
             })
        .then(dato=>dato.json())
        .then(dato=>alert("Horario Actualizado Exitosamente!!"))
        .catch(error=>alert(error));
        this.leerHorarios();
    };


    EditHorario = (horario) => {
        this.setState({selectedHorario: horario})
    }

    EliminarHorario = (_id) => {
        fetch(`http://localhost:9000/agenda/eliminar_a/${_id}`, {method: 'DELETE'})
        .then(dato=>alert("Horario eliminado exitosamente!!"))
        this.leerHorarios();
    }
    componentDidMount() {
        this.leerHorarios();
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
                                            columns={columnas (this.EditHorario,this.EliminarHorario)}
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
                    <ModalEditAgenda selectedHorario={this.state.selectedHorario} ActualizarHorario={this.ActualizarHorario}/>
                </section>
            </>
        )
    }
}
export default AgendaTabla;