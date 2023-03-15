import React from 'react'
import DataTable from 'react-data-table-component';

import {NovedadesForm}  from '../components/NovedadesForm'; 


export const Archivo = () => {
  const max ={
    maxWidth:"100%"
  }


  const handleButtonClickEdit = (e, id) => {
    e.preventDefault();
    console.log("Row Id eDITAR", id);
  };
  const handleButtonClickVer = (e, id) => {
    e.preventDefault();
    console.log("Row Id VER", id);
  };
  const handleButtonClickDelete = (e, id) => {
    e.preventDefault();
    console.log("Row Id ELIMINAR", id);
  };
  
  const columns = [
    {
      name:'Acciones',
      button: true,
      cell: (row) => (
        <div className="todo-item-action"  >
          <span className="edit"  onClick={(e) => handleButtonClickVer(e, row.id)} data-toggle="tooltip" data-placement="top" title="Ver">
            <i className=' bx bxs-show' style={{padding:'0px 10px 0px 10px',color:'#08807b',fontSize:'20px',cursor:'pointer'}}></i>
            </span>
          <span className="edit" onClick={(e) => handleButtonClickEdit(e, row.id)} data-toggle="tooltip" data-placement="top" title="Editar">
            <i className='bx bx-edit-alt ' style={{padding:'0px 10px 0px 0px',color:'#26ade4',fontSize:'20px',cursor:'pointer'}}>
              </i></span>
          <span className="edit" onClick={(e) => handleButtonClickDelete(e, row.id)} data-toggle="tooltip" data-placement="top" title="Eliminar">
            <i className='bx bx-trash' style={{padding:'0px 10px 0px 0px',color:'red',fontSize:'20px',cursor:'pointer'}}></i>
            </span>
          
        </div>
        ),
    }, 
    {
      name:'Subir Archivo',
      button: true,
      cell: (row) => (
        <div className="todo-item-action"  >
          <span className="edit" onClick={(e) => handleButtonClickDelete(e, row.id)} data-toggle="tooltip" data-placement="top" title="Subir Archivo">
            <i className='bx bx-archive-out' style={{padding:'5px 10px 0px 10px',color:'green',fontSize:'20px',cursor:'pointer'}}></i>
          </span>
        </div>
        ),
    }, 
    {
        name: 'Tipo',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'Puesto',
        selector: row => row.year,
        sortable: true,
    },
    {
      name: 'Fecha',
      selector: row => row.title,
      sortable: true,
    },
    {
        name: 'Preliminar',
        selector: row => row.year,
        sortable: true,
    },
  ];

  const data = [
      {
          id: 1,
          title: 'Accidente Vehicular',
          year: 'Aguila IV',
      },
      {
          id: 2,
          title: 'Robo',
          year: 'Aguila V',
      },
      {
        id: 3,
        title: 'Allanamiento',
        year: '1988',
    },
    {
        id: 4,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
      id: 5,
      title: 'Beetlejuice',
      year: '1988',
  },
  {
      id: 6,
      title: 'Ghostbusters',
      year: '1984',
  },
  {
    id: 7,
    title: 'Beetlejuice',
    year: '1988',
},
{
    id: 8,
    title: 'Ghostbusters',
    year: '1984',
},
{
  id: 9,
  title: 'Beetlejuice',
  year: '1988',
},
{
  id: 10,
  title: 'Ghostbusters',
  year: '1984',
},
{
  id: 11,
  title: 'Beetlejuice',
  year: '1988',
},
{
  id: 12,
  title: 'Ghostbusters',
  year: '1984',
},
  ]


  

  return (
    <div className="todo-content-area" style={max}>
    <div className="sidebar-left" style={{width:'30%'}} >
        <div className="sidebar" >
            <div className="sidebar-content d-flex email-sidebar" style={{width:'90%'}} data-simplebar="">
                <div className="todo-menu">
                    <NovedadesForm/>
                </div>
            </div>
        </div>
    </div>

    <div className="content-right" style={{width:'70%'}}>
        <div className="todo-area">
            <div className="todo-list-wrapper">
                <div className="todo-list">
                    <div className="todo-list-header d-flex align-items-center">
                        <div className="header-left d-flex align-items-center mr-3">
                            <ul className="list-inline m-0 d-flex">
                                <li className="list-inline-item email-delete">
                                    <button type="button" className="btn-icon">
                                        <i className=' bx bx-line-chart'></i>
                                    </button>
                                </li>
                                <li className="list-inline-item email-unread">
                                    <button type="button" className="btn-icon">
                                        <i className='bx bx-envelope'></i>
                                    </button>
                                </li>
                            </ul>
                        </div>

                        <div className="header-right w-100">
                           
                        </div>
                    </div>
                    <DataTable
                      title="Listado de Archivos"
                      columns={columns}
                      data={data}
                     
                      pagination
                      
                      dense
                    />
                    
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
