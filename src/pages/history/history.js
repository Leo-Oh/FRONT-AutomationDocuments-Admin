import React, { useEffect, useState } from "react";
import "./history.scss";
import "devextreme/data/odata/store";
import DataGrid, {
  Column,
  Pager,
  FilterRow,
  Lookup,
  Editing,
  Button,
  Paging,
  MasterDetail
} from "devextreme-react/data-grid";


export default function History() {

  const [HistoryData, setHistoryData] = useState("");

  const get_students = () => {
    fetch(process.env.REACT_APP_API_URL + "/solicitud-de-tramite/informacion-completa")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHistoryData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    get_students();
  }, []);

  return (
    <React.Fragment>
      <h2 className={"content-block"}>Historial</h2>
      <div className={"content-block"}>
        <div className={"dx-card responsive-paddings"}>


          <DataGrid
            dataSource={HistoryData}
            remoteOperations={true}
            showBorders={true}
            keyExpr="id"
          
          >
                    <Paging defaultPageSize={10} />
        <Pager showPageSizeSelector={true} showInfo={true} />
        <FilterRow visible={true} />

            
        <Column  
            dataField={"id"}
            caption={'ID'}
            alignment="center"
            />

            <Column  
            dataField={"regiones_nombre"}
            caption={'Origen'}
            alignment="center"
            >
              <Column 
                dataField={"regiones_nombre"}
                caption={'Región'}
              />

              <Column 
                dataField={"facultades_nombre"}
                caption={'Facultad'}
              />
              <Column 
                dataField={"carreras_nombre"}
                caption={'Carrera'}
              />
            </Column>



            <Column  
            caption={'Trámites'}
            alignment="center"
            >
               <Column 
              dataField={"tramites_nombre"}
              caption={'Nombre'}
            />
            
            <Column 
              dataField={"solicitdes_de_tramites_fecha_de_solicitud"}
              caption={'Fecha de solicitud'}
              dataType="date"
            />

            <Column 
              dataField={"solicitdes_de_tramites_estado"}
              caption={'Estado'}
            />
            </Column>



            <Column  
            caption={'Estudiantes'}
            alignment="center"
            >
               <Column 
              dataField={"estudiantes_nombre_completo"}
              caption={'Nombre'}
            />
            
            <Column 
              dataField={"estudiantes_matricula"}
              caption={'Matricula'}
            />
            </Column>


            
            <Column  
            caption={'Secretarias'}
            alignment="center"
            >
               <Column 
              dataField={"secretarias_nombre"}
              caption={'Nombre'}
            />
            
            <Column 
              dataField={"secretarias_correo"}
              caption={'Correo'}
            />
            </Column>
         
         

          

            
          


          </DataGrid>
        </div>
      </div>
    </React.Fragment>
  );
}
