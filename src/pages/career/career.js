import React, { useEffect, useState } from 'react';
import './career.scss';
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




export default function Career() {


  const [careersData, setCareersData] = useState("");

  useEffect(() => {
      fetch(process.env.REACT_APP_API_URL + '/carreras/informacion-completa')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setCareersData(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
  }, []);


  return (
    <React.Fragment>
      <h2 className={'content-block'}>Carreras</h2>
      <div className={'content-block'}>
        <div className={'dx-card responsive-paddings'}>
  

  

        <DataGrid
        className={'dx-card wide-card'}
        dataSource={careersData}
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
        dataField={'carreras_id'}
        caption={'ID'} width={90} 
        hidingPriority={2}
        />
        
        <Column
          dataField={"carreras_nombre"}
          caption={'Nonbre'}
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

