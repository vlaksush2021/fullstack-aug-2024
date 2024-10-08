// import React, { useState } from 'react';
// import Greeting from './Greeting';
// import Product from './Product';
// import Counter from './Counter';
// import InputFiled from './InputFiled';
// import Employee from './day2/Employee';
// import Student from './day2/Student';
// function App() {
//   const name = "Shiva";
//   const product = {
//     name:"Laptop",
//     price:"$2000"
//   }
//   const org = "ABC Products";

//   const [empCount,setEmpCount] = useState(0);
//   const [studCount,setstudCount] = useState(0);

//   const empCountHandler = (data) => { //1
//     setEmpCount(data);
//   }

//   const studCountHandler = (data) => { //1
//     setstudCount(data);
//   }

//   return (
//     <div style={{ textAlign: 'left'}}>
//       <h1>Learning React </h1>
//       <hr color='red' />

//       <h3>Employee Registration - {empCount} </h3>
//       <h3>Student  Registration - {studCount} </h3>
//       <h3>Total Registration - {empCount+studCount}</h3>

//       <hr />
//       <table width="100%">
//         <tr>
//           <td><Employee empCount = {empCount} empHandler={empCountHandler} /></td>
//           <td><Student studCount = {studCount} studHandler={studCountHandler} /></td>
//         </tr>
//       </table>
      
     

//     </div>
//   );
// }

// export default App;



// //Day2 - Fetching Data - App.js
// import React, { useState } from 'react';
// import DataFetchingComponent from './day2/DataFetchingComponent';
// import UserComponet from './day2/UserComponent';
// function App() {

//   return (
//     <div style={{ textAlign: 'left'}}>
//       <h1>Learning React </h1>
//       <hr color="red"/>

//       <DataFetchingComponent />
//       {/* <UserComponet /> */} 
//     </div>
//   );
// }

// export default App;




// //Day3 - Controlled Component
// import React, { useState } from 'react';
// import LoginForm from './form-demos/LoginForm';

// function App() {

//   return (
//     <div style={{ textAlign: 'left'}}>
//       <h1>Learning React </h1>
//       <hr color="red"/>

//       <LoginForm />

//     </div>
//   );
// }

// export default App;



// //Day3 - Uncontrolled Component
// import React, { useState } from 'react';
// import LoginForm2 from './form-demos/LoginForm2';

// function App() {

//   return (
//     <div style={{ textAlign: 'left'}}>
//       <h1>Learning React </h1>
//       <hr color="red"/>

//       <LoginForm2 />

//     </div>
//   );
// }

// export default App;



// //Day3 - Advanced React Hooks
// import React, { useState } from 'react';
// import LoginForm from './adv-hooks/LoginForm';

// function App() {

//   return (
//     <div style={{ textAlign: 'left'}}>
//       <h1>Learning React </h1>
//       <hr color="red"/>

//       <LoginForm />

//     </div>
//   );
// }

// export default App;





// //Day3 - Custom Hook
// import React, { useState } from 'react';
// import LoginForm2 from './adv-hooks/LoginForm2';
// function App() {
//   return (
//     <div style={{ textAlign: 'left'}}>
//       <h1>Learning React </h1>
//       <hr color="red"/>

//       <LoginForm2 />

//     </div>
//   );
// }

// export default App;










// //Day4 - Context API
// import React, { useState } from 'react';
// import A from './Context-Demos/A';
// import NameContext from './Context-Demos/NameContext';

// function App() {
//   const org = "ABC Technologies"; //props


//   const employeeList = [
//     {id:101,name:"bala",salary:1000},
//     {id:102,name:"peter",salary:2000},
//     {id:103,name:"mohammed",salary:3000},
//   ]

//   // const [org,setOrg] = useState("ABC Technologies");

//   return (
//     <div style={{ textAlign: 'left'}}>
//       <h1>Learning React </h1>
//       <hr color="red"/>

//     <NameContext.Provider value={{org,employeeList}}>
//      <A />
//      </NameContext.Provider>

//     </div>
//   );
// }

// export default App;





//Day4 - useMemo
import React, { useState } from 'react';
import EmployeeManagement from './Performance/EmployeeManagement';



function App() {

  return (
    <div style={{ textAlign: 'left'}}>
      <h1>Learning React </h1>
      <hr color="red"/>

      <EmployeeManagement />

    </div>
  );
}

export default App;

