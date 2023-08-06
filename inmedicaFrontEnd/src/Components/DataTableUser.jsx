import React from 'react';
import DataTable from 'react-data-table-component';
import ModalAdd from './ModalAdd';
import ModalEdit from './ModalEdit';



// const tablaUsuarios = users.users;
const columnas = ( (handleEdit,handleDelete) => [
    {
        name: "Tipo de documento",
        selector: "typeDoc",
        sortable: true
    },
    {
        name: "Numero de documento",
        selector: "doc",
        sortable: true
    },
    {
        name: "Nombre completo",
        selector: "nom",
        sortable: true
    },
    {
        name: "Correo",
        selector: "mail",
        sortable: true
    },
    {
        name: "Telefono",
        selector: "tel",
        sortable: true
    },
    {
        name: "Dirección",
        selector: "dir",
        sortable: true
    },
    {
        name: "Fecha de nacimiento",
        selector: "datetime",
        sortable: true
    },
    {
        name: "Rol",
        selector: "rol",
        sortable: true
    },
    {
        cell: (row) =>
            <div>
                <button onClick={()=>handleEdit(row)} id={ row.doc } 
                    type="button"
                    className="btn btn-outline-primary" 
                    data-toggle="modal" 
                    data-target="#exampleModaledit">                           
                        <i className="ion-ios-refresh"></i>
                </button>{" "}
                <button onClick={()=>handleDelete(row.doc)} id={ row.doc } 
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

class DataTableUser extends React.Component {

    state = {
        busquedas: "",
        selectedUser: {}
    }
    onChange = async e => {
        e.persist();
        await this.setState({ busqueda: e.target.value });
        this.filtrarElementos();
    }

    filtrarElementos = () => {
        var search = this.state.usuarios.filter(item => {
            if (item.doc.toString().includes(this.state.busqueda) ||
                item.nom.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(this.state.busqueda) || /*(Normalize): es para quitar la expresion de los acentos*/
                item.mail.toLowerCase().includes(this.state.busqueda) ||
                item.tel.toString.toLowerCase.includes(this.state.busqueda)
            ) {
                return item;
            }
        });
        this.setState({ usuariosTabla: search });
    }

    leerUsuarios = ()=> {
        setTimeout(() => {
            fetch("http://localhost:9000/crudDash/listar")
            .then(res => res.json())
            .then(data => this.setState({ usuarios: data.usuarios, usuariosTabla : data.usuarios }));
        }, 50);
        
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const user = {typeDoc: data.get('typeDoc'), doc: data.get('doc'), nom: data.get('nom'), mail: data.get('mail'), tel: data.get('tel'), dir: data.get('dir'), datetime: data.get('datetime'), rol: data.get('rol')} 
        fetch("http://localhost:9000/crudDash/actualizar",{
            headers: {"content-type":"application/json"},
            method: "PUT",
            body: JSON.stringify(user)
             })
        .then(dato=>dato.json())
        .then(dato=>alert("Registro Actualizado Exitosamente!!"))
        .catch(error=>alert(error));
        this.leerUsuarios();
    };

    // handleAdd = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.target);
    //     const user = {typeDoc: data.get('typeDoc'), doc: data.get('doc'), nom: data.get('nom'), mail: data.get('mail'), password: data.get('password'),tel: data.get('tel'), dir: data.get('dir'), datetime: data.get('datetime'), rol: data.get('rol')} 
    //     fetch("http://localhost:9000/crudDash/agregar",{
    //         headers: {"content-type":"application/json"},
    //         method: "POST",
    //         body: JSON.stringify(user)
    //         })
    //     .then(dato=>dato.json())
    //     .then(dato=>alert(dato.msg))
    //     .catch(error=>alert(error));
    //     this.leerUsuarios();
    // };

    handleEdit = (usuario) => {
        this.setState({selectedUser: usuario})
    }

    handleDelete = (doc) => {
        fetch(`http://localhost:9000/crudDash/eliminar/${doc}`, {method: 'DELETE'})
        .then(dato=>alert("Usuario eliminado exitosamente!!"))
        this.leerUsuarios();
    }
    componentDidMount() {
        this.leerUsuarios();
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
                            <div className="col-lg-13 my-2">
                                <div className="card rounded-1">
                                    <div>
                                        <button type="button" onClick={" "}
                                            className="btn btn-outline-primary modaladd" 
                                            data-toggle="modal" 
                                            data-target="#exampleModaladd">
                                                <i className="ion-md-add"></i>
                                        </button>
                                    </div>

                                    <div className="card-header bg-light">
                                        <h6 className="font-weight-bold mb-0">Tabla general de usuarios registrados</h6>
                                    </div>
                                    <div className="table-responsive">
                                        {/* <div className="barraBusqueda">
                                            <input type="text"
                                                placeholder="Filtrar"
                                                className="form-control"
                                                name="busqueda"
                                                value={this.state.busqueda}
                                                onChange={this.onChange}
                                            />
                                        </div> */}
      
                                        <DataTable
                                            columns={columnas (this.handleEdit,this.handleDelete)}
                                            data={this.state.usuariosTabla}
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
                    <ModalAdd leerUsuarios={this.leerUsuarios}/>
                    {/* Modal edit*/}
                    <ModalEdit selectedUser={this.state.selectedUser} handleSubmit={this.handleSubmit}/>
                </section>
            </>
        )
    }
}
export default DataTableUser;