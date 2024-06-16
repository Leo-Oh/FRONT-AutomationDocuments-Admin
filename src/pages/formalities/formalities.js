import React, { useEffect, useState } from 'react';
import './formalities.scss';
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







export default function Formalities() {

  const [formalitiesData, setFormalitiesData] = useState("");



    useEffect(() => {
      fetch(process.env.REACT_APP_API_URL + '/tramites')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setFormalitiesData(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
  }, []);


  return (
    <React.Fragment>
      <h2 className={'content-block'}>Tramites</h2>
      <div className={'content-block'}>
        <div className={'dx-card responsive-paddings'}>
  
        <DataGrid
        className={'dx-card wide-card'}
        dataSource={formalitiesData}
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
        dataField={'id'}

        caption={'ID'} width={90} 
        hidingPriority={2}
        
        />

        <Column
          dataField={"nombre"}
          caption={'Nonbre'}
          hidingPriority={9}
        />

        <Column
        dataField={"descripcion"}
        caption={'Descripción'}
        hidingPriority={7}
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

