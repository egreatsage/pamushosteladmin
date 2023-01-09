import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import EmployeeDataService from '../Operations';
const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

export default function BasicExampleDataGrid() {
  
  const [messages, setMessages] = React.useState([]);
  React.useEffect(() => {
    getAllMessages();
  }, []);
  const getAllMessages = async () => {
    const {data} = await EmployeeDataService.getAllMessages(
     { dataSet: 'messages',
      visibleFields: VISIBLE_FIELDS,
      rowLength: 100,}
    );
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid {...data} />
    </div>
  );
}