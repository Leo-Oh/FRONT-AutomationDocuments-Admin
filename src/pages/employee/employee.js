import React, { useEffect, useState } from 'react';
import './employee.scss';
import 'devextreme/data/odata/store';
import DataGrid, {
  Column,
  Pager,
  FilterRow,
  Lookup,
  Button, 
  DataGridTypes, 
  Editing,
  Paging
} from 'devextreme-react/data-grid';




export default function Employee() {

  const [secretariesData, setSecretariesData] = useState("");



    useEffect(() => {
      fetch(process.env.REACT_APP_API_URL + '/secretarias/informacion-completa')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setSecretariesData(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
  }, []);




  return (
    <React.Fragment>
      <h2 className={'content-block'}>Secretarias</h2>
      <div className={'content-block'}>
        <div className={'dx-card responsive-paddings'}>



      <DataGrid
      id="gridContainer"
      dataSource={secretariesData}
      keyExpr="secretarias_id"
      showBorders={true}
      focusedRowEnabled={true}
      defaultFocusedRowIndex={0}
      columnAutoWidth={true}
      //onRowValidating={onRowValidating}
      //</div>onEditorPreparing={onEditorPreparing}
      >
                <Paging defaultPageSize={10} />
        <Pager showPageSizeSelector={true} showInfo={true} />
        <FilterRow visible={true} />

      <Editing
        mode="row"
        useIcons={true}
        allowUpdating={true}
        //allowDeleting={isDeleteIconVisible} 
        />

      <Column dataField="secretarias_id" caption="ID"  width={90}/>
      <Column dataField="regiones_nombre" caption="Region" />
      <Column dataField="facultades_nombre" caption="Facultad" />
      <Column dataField="secretarias_nombre" caption="Nombre"  />
      <Column dataField="secretarias_apellido_paterno" caption="Apellido Paterno" />
      <Column dataField="secretarias_apellido_materno" caption="Apellido Materno"  width={130} />
      <Column dataField="secretarias_matricula" caption="Matricula" />
      <Column dataField="secretarias_turno" caption="Turno" />
      <Column dataField="secretarias_correo" caption="Correo" />
      <Column dataField="secretarias_telefono" caption="Teléfono" />
      <Column dataField="secretarias_direccion" caption="Dirección" />

      <Column type="buttons" caption="Acciones" width={110}>
        <Button name="edit" />
        <Button name="delete" />
        <Button 
        hint="Clone" 
        icon="copy" 
        //visible={isCloneIconVisible} 
        //disabled={isCloneIconDisabled} 
        //onClick={onCloneIconClick} 
        />
      </Column>

    </DataGrid>
        </div>
      </div>


    </React.Fragment>
)}

