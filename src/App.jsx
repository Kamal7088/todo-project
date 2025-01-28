import { useState } from 'react';
import './App.css';
import {Arra} from './Data/Arra';
function App() {

  const [todolist, setTodoList] = useState([]);

  const [activeT, setActiveT] = useState(0);
  const [activeC, setActiveC] = useState(Arra[0]);
let changeD=(index)=>{

  setActiveT(index);
  setActiveC(Arra[index]);

}

  let saveTodoList = (event) => {;
    // Get the value of the todo input
    // event means form me target hoga jisme toname text me jo bhi value hm likhnge uski value ko ek toname varable bnakar isme daal diya usmr;hhfhfh;;;;;;;;
    let toname = event.target.toname.value;

    // Check if the todo already exists
    // todolist me toname varible me jo text hai agar wo nhi hoga to use todolist me add krke final variable bnakr usme daal diya fir settodolist me usko set kreke todolist me daal diya;;;;;
    if (!todolist.includes(toname)) {
      let final = [...todolist, toname];
      setTodoList(final);
    } 
    // agar text wali value jo toname me store hogi wo pahle se todolist me hogi to usko already exists print krke dikhaenge;;;;;;;
    else {
      alert("Todo Name Already Exists....");
    }

    // Prevent page refresh after form submission
  // data save hoga but page refresh nhi krega preventmethode se; data save hone ke bad krega agar krega to;
    event.preventDefault();
  };

  // Delete a todo item
  const deleteTodo = (index) => {
    // onclick se sidhe deletetodo function chala aur wha se jisme click kiya us list ki index value aayi fir(i!==index means is index ko chodkar baki i sb filter honge )
    // means i filter hone but index filter nhi hongwehrhhrhrh;
    let updatedList = todolist.filter((todo, i) => i !== index);
  // us filter huye jo unko settodolist me set krakar todolist me daal diya jaega apne aapdnnndnd;
    setTodoList(updatedList);
  };

  // Mapping over todolist and rendering each item
  let list = todolist.map((todo, i) => (
    // props me todo aur ondelete function parents se child me bheja;;;;;;
    <ToItems key={i} value={todo} onDelete={() => deleteTodo(i)} />
  ));

  return (
    <div className="App">

      <div className='tabsOuter'>

        <h1 style={{textAlign:'left'}}>
          Tabbing System
        </h1>
<ul>
  {Arra.map((tabI,index)=>{
    return(
      <li>
    <button onClick={()=>changeD(index)} className={activeT==index ? 'activeB' : ''}>{tabI.title}</button>
  </li>
    )
  })}

  <p>
{activeC.des}

  </p>
</ul>






      </div>
      <header className="App-header">
        <h1>Todo List</h1>
         <form onSubmit={saveTodoList} >
          {/* text ka nam hai toname text jo hm likhne toname variable me store hoga upar yhi toname dh re baba n v n n n ngv n nvn bvbnvnnvn  */}
          <input type="text" name="toname" placeholder="Enter your task" />  
          <button type="submit">Save</button>
        </form>

        {/* Render the todo list */}
        <div className="outerDiv">
          <ul>{list}</ul>
        </div>
      </header>
    </div>
  );
}
// chield me props receive kiya dh hf vhf vhf vhfv ;
function ToItems({ value, onDelete }) {
let [as, setAs]=useState(false)
  let cheackStatus=()=>{
setAs(!as);
  }
  return (
    <li  className={(as  ? 'com' : ' ')} onClick={cheackStatus}>
      <span>  {value}</span>
      <span className="delete" onClick={onDelete}>&times;</span>
    </li>
  );
}

export default App;
