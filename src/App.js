
import './App.scss';
import {DatePicker} from 'antd'
import {Card} from 'antd';

function App() {
  const test= (date, dateString) =>{
    console.log(date, dateString);
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <h1> web personal  <span> ERIKA</span></h1>
        <h2>proyecto</h2>
        <DatePicker onChange={test} />
        <Card title="TARJETA" style={{ width: 300 }}>
          <p>HOLA MUNDO</p>
         
         </Card>
      </header>
    </div>
  );
}

export default App;
