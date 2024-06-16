import React, { useEffect, useState } from 'react';
import './students.scss';
import 'devextreme/data/odata/store';
import DataGrid, {
  Column,
  Pager,
  FilterRow,
  Lookup,
  Editing,
  Button,
  Paging
} from 'devextreme-react/data-grid';

export default function Students() {

  const [studentsData, setStudentsData] = useState("");

  const get_students = () =>{
      fetch(process.env.REACT_APP_API_URL + '/estudiantes/informacion-completa')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setStudentsData(data);
            })
            .catch((err) => {
                console.log(err.message);
            }); 
    }


    useEffect( ()=>{
      get_students();

    }, []);


  return (
    <React.Fragment>
      <h2 className={'content-block'}>Estudiantes</h2>
      <div className={'content-block'}>
        <div className={'dx-card responsive-paddings'}>
  
        <DataGrid
        className={'dx-card wide-card'}
        dataSource={studentsData}
        showBorders={false}
        focusedRowEnabled={true}
        defaultFocusedRowIndex={0}
        columnAutoWidth={true}
        columnHidingEnabled={true}
      >
        <Paging defaultPageSize={10} />
        <Pager showPageSizeSelector={true} showInfo={true} />
        <FilterRow visible={true} />

        <Column
          dataField={"estudiantes_id"}
          caption={'ID'}
          hidingPriority={9}
        />
        <Column
          dataField={"regiones_nombre"}
          caption={'Region'}
          hidingPriority={9}
        />
        <Column
          dataField={"facultades_nombre"}
          caption={'Facultad'}
          hidingPriority={9}
        />
        <Column
          dataField={"carreras_nombre"}
          caption={'Carrea'}
          hidingPriority={9}
        />

        <Column
          dataField={"estudiantes_nombre_completo"}
          caption={'Nonbre'}
          hidingPriority={9}
        />

        <Column
          dataField={"estudiantes_matricula"}
          caption={'Matricula'}
          hidingPriority={9}
        />

      <Column
          dataField={"estudiantes_semestre"}
          caption={'Semestre'}
          hidingPriority={9}
        />
      <Column
          dataField={"estudiantes_correo"}
          caption={'correo'}
          hidingPriority={9}
        />
       <Column
          dataField={"estudiantes_telefono"}
          caption={'Teléfono'}
          hidingPriority={9}
        />

    <Editing
        mode="row"
        useIcons={true}
        allowUpdating={true}
        allowDeleting={true} 
        />
    <Column type="buttons" caption="Acciones">   
       <Button id="clear"  text="Clear" />
       <Button name="edit" />
       <Button 
       hint="Clone" 
       icon="copy" 
       visible={true} 
       //disabled={isCloneIconDisabled} 
       //onClick={onCloneIconClick} 
       />
     </Column>

      </DataGrid>          
        
        </div>
      </div>


    </React.Fragment>
)}

