import React, { useEffect, useState } from 'react';
import './faculty.scss';
import 'devextreme/data/odata/store';
import DataGrid, {
  Column,
  Pager,
  FilterRow,
  Lookup,
  Button,
  Editing,
  Paging
} from 'devextreme-react/data-grid';







export default function Faculty() {

  const [facultiesData, setFacultiesData] = useState("");


    useEffect(() => {
      fetch(process.env.REACT_APP_API_URL + '/facultades/informacion-completa')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setFacultiesData(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
  }, []);



  return (
    <React.Fragment>
      <h2 className={'content-block'}>Facultades</h2>
      <div className={'content-block'}>
        <div className={'dx-card responsive-paddings'}>
  

  

        <DataGrid
        className={'dx-card wide-card'}
        dataSource={facultiesData}
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
        dataField={'facultades_id'}
        caption={'ID'} width={90} 
        hidingPriority={1}
        />

        <Column
          dataField={"regiones_nombre"}
          caption={'Region'}
          hidingPriority={2}
        />

        <Column
          dataField={"facultades_nombre"}
          caption={'Nonbre'}
          hidingPriority={3}
        />

        <Column
        dataField={"facultades_direccion"}
        caption={'Direccion'}
        hidingPriority={4}
        />

        <Column
        dataField={"facultades_telefono"}
        caption={'Teléfono'}
        hidingPriority={5}
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

