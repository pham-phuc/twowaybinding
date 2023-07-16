import {useState} from 'react';

const courses = [
  {
    id : 1,
    name:'HTML - CSS',
  },
  {
    id : 2,
    name : 'Javascript',
  },
  {
    id:3,
    name:'ReactJS',
  }
]

function App() {

  const [check,setCheck] = useState([]);
  
  const handleCheck = (id)=>{
    setCheck(prev => {
      const isCheck = check.includes(id);
      if (isCheck){
        return check.filter(item => item!==id)
      }else{
        return [...prev,id];
      }
    })
  }

  return (
    <div className="App">
      {courses.map(course => (
        <div key={course.id}>
          <input type = 'checkbox'
          checked = {check.includes(course.id)}  
            onChange={()=>handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button > Register </button>
    </div>
  );
}

export default App;
