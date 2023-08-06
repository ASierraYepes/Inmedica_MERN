import React from 'react';
import DataTable from 'react-data-table-component';
import ModalAddExamen from './ModalAddExamen';
import ModalEditExamen from './ModalEditExamen';


const columnas = ( (EditExamen,EliminarExamen) => [
    {
        name: "id",
        selector: "_id",
        sortable: true
    },
    {
        name: "Código",
        selector: "codigo",
        sortable: true
    },
    {
        name: "Descripcion",
        selector: "descripcion",
        sortable: true
    },
    {
        cell: (row) =>
            <div>
                <button onClick={()=>EditExamen(row)} id={ row._id } 
                    type="button"
                    className="btn btn-outline-primary" 
                    data-toggle="modal" 
                    data-target="#Modaleditexam">                           
                        <i className="ion-ios-refresh"></i>
                </button>{" "}
                <button onClick={()=>EliminarExamen(row._id)} id={ [row._id] } 
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

class Tablaexamenes extends React.Component {

    state = {
        busquedas: "",
        selectedExamen: {}
    }
    onChange = async e => {
        e.persist();
        await this.setState({ busqueda: e.target.value });
        this.filtrarElementos();
    }

    leerExamenes = ()=> {
        setTimeout(() => {
            fetch("http://localhost:9000/examen/listar_e")
            .then(res => res.json())
            .then(data => this.setState({ examenes: data.examenes, examenesTabla : data.examenes }));
        }, 50);
    }
    
    ActualizarExamen = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const examen = {_id: data.get('id'),codigo: data.get('codigo'), descripcion: data.get('descripcion')} 
        fetch("http://localhost:9000/examen/actualizar_e",{
            headers: {"content-type":"application/json"},
            method: "POST",
            body: JSON.stringify(examen)
             })
        .then(dato=>dato.json())
        .then(dato=>alert(dato.msg))
        .catch(error=>alert(error));
        this.leerExamenes();
    };


    EditExamen = (examen) => {
        this.setState({selectedExamen: examen})
    }

    EliminarExamen = (_id) => {
        fetch(`http://localhost:9000/examen/eliminar_e/${_id}`, {method: 'DELETE'})
        .then(dato=>alert("Examen eliminado exitosamente!!"))
        this.leerExamenes();
    }
    componentDidMount() {
        this.leerExamenes();
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
                                    <div>
                                        <button type="button" onClick={" "}
                                            className="btn btn-outline-primary modaladdexam" 
                                            data-toggle="modal" 
                                            data-target="#exampleModaladd">
                                                <i className="ion-md-add"></i>
                                        </button>
                                    </div>
                                    <div className="table-responsive">
                                        <DataTable
                                            columns={columnas (this.EditExamen,this.EliminarExamen)}
                                            data={this.state.examenesTabla}
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
                    <ModalAddExamen leerExamenes={this.leerExamenes}/>

                    <ModalEditExamen selectedExamen={this.state.selectedExamen} ActualizarExamen={this.ActualizarExamen}/>
                </section>
            </>
        )
    }
}
export default Tablaexamenes;