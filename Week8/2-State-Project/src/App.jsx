import { useState } from "react";
import Course from "./Course";

function getRandomCourse() {
  const courseArray = ['Nature', 'Mountain', 'Lake', 'River'];
  return courseArray[Math.floor(Math.random() * courseArray.length)]
}

function App() {

  const [course, setCourse] = useState([]);

  const handleClick=() => {
    setCourse([...course, getRandomCourse()]); // course'un başındaki ...'lar var olana veri ekle ve önceki verileri sabit tut demek.
  }

  const natureList = course.map((courses, index) => {
    return <Course key={index} courseName={courses} />
  })

  return (
    <div className="App">
      
      <button onClick={handleClick}>Resim Getir</button>

      <div className="buttonKonum">
        {natureList}
      </div>
      

    </div>
  )
}

export default App;
