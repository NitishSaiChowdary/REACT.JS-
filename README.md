node js - runtime env - execte jasascript application
npm-Node package Manager

npm create vite@latest
Once project is dowmloaded 
cd projec-name
npm install
npm run dev

A component in React is a reusable piece of a user interface (UI) that has its own appearance and logic

package.json - Consist of packafe name nd versions

package-lock.json - consists of package names and versons of packages usrd by our project.

public-which consists like images/audio/videos and etc..

src- source code of application
 assets-like images/audio/videos and etc..
 main.jsx - Root javascript file 
 index.css- css file for main.jsx
 app.jsx - component
 app.css - css file for app.jsx


.gitignore -files which are not required in stroing in cloud are added under it 

eslint- ecmascript linter. -

index.html - root html file of app.

README.MD - TEXT FILE TO INCLUDE PROJECT SETUP STEPS AND ABOUT THE PROJECT.

COMPONENT: COLLECTION OF HTML, JAVASCRPIT & CSS -packages

> IN HTML WAY,we can call component as custom tag.

> To create a new component
ComponentName.jsx

function ComponentName(){
    variables 
    functions

    return{
        <div>
        
        </div>
    }
}

export default ComponentName;

import ComponentName from 'relativepath';
-->String Interpolation / Expreesion /Data Binding
-->Communicating from javascript to html.
Syntax in react:
const Username = 'admin890';
const email ='admin@gmail.com';

<p>{Username + email}</p>

-->event Binding 
-->Communicating from  html to javascript .
IN JAVASCRPIT
onclick
onchage
onkeyup  

IN REACT--
<button onClick={() => addToCart(produts[].id)}></button>

Map Method --> mao method iteraters the html elements for no of elements prests in the array.

Sytanx:

{arrayName.map((value,index)=>(

))}

->In return keyword of Function component:
to write html code:
(
    <div></div>
)

to write javascrpit code:
{arrayName.map((value,index)=>(
 <div></div>
))}

Find: Retrieve matching value from the array.

Syntax:
   const filteredvalue = arrayName.find((value,index)=>{
    return condition;
   });

React - Single page Application (SPA)

Routing - Routing in react is the process of Navigating between pages in a single-page application 

Installation-
  npm install react-router-dom 

  main.jsx 
  using BrowserRouter -It remember the history of user navigation
   import{BrowserRouter} from 'react-router-dom';
<BrowserRouter>
<App/>
</BrowserRouter>


  App.jsx
  import {Routes,route} from 'react-router-dom';

  <Routes>
   <Route path="/routeName" element={<ComponentName/>}/>
   <Route path="/routeName" element={<ComponentName/>}/>
   <Route path="/routeName" element={<ComponentName/>}/>

</Routes>

Link: Used to do Static Navigations
 import{Link} from 'react-router-dom';

 <Link to="">


Nested Routing:

  <Routes>
   <Route path="/routeName" element={<ComponentName/>}/>
   <Route path="/routeName" element={<ComponentName/>}>
       <Route path="routeName" element={<ComponentName/>}/>
       <Route path="routeName" element={<ComponentName/>}/>
       <Route path="routeName" element={<ComponentName/>}/>
   </Route>
   <Route path="/routeName" element={<ComponentName/>}/>
</Routes>

import {Outlet} from 'react-router-dom';
<Outlet/>
 
 Passing data in route
 1.Route params
    /routeName/value1/value2

    to retrieve route params from url
    import{useParams} from 'react-route-dom';

    const params = useParams();
        {productId:1}

 2.Query params

    /routeName?key1=value1&key2=value2&key3=value3

import{useSearchParams} from 'react-router-dom';

const [secarchParams , setSearchParams] = useSearchParams();

secarchParams.get(keyName);

React 16.x
1.Function Components 
Hooks-functions
IN React ,hooks are function that allows you to use React state and lifecycle features from within function Components
A hookis function that gives you access to react internal memory.

1.useStatte:Manages state in the functional component

import{useState} from 'react';
const [state,setState]=useState{initialValure};

    const [email, setEmail] = useState('admin@gmail.com');
    const changeEmail = () => {
       setEmail('vendor@gamil.com');
    }


    const [counter, setCounter] = useState(20);

    const increment = () => {
        setCounter(counter+2);
    };
    return (
        <div>
            <h1 className="text-xl">Cart</h1>
            
            <h2>Counter:{counter}</h2>
            <h3>email:{email}</h3>
            <button className="ms-2 bg-green-500 text-white text-sm px-3 py-2 rounded my-2" onClick={increment}>Increment</button>
            <button className="ms-2 bg-green-500 text-white text-sm px-3 py-2 rounded my-2" onClick={changeEmail}>change email</button>
        </div>
    )

2.useEffect-Used to perform side effects in the component.
eg : API calls
1.Component mount (load)
2.componentUpdate
3.component Unmount(destroy)
syntax:
useEffect(callbackfunction,Dependencies array)
1.Component mount (load)
useEffect(()=>{

},[]);
1.Component mount (load) & componentUpdate
useEffect(()=>{

},[Dependencies1,Dependencies2]);
when value of a dependency is changing callbackfunction present in useEffectwill e executed.

1.Component mount (load) & 3.component Unmount(destroy)
useEffect(()=>{

    return() =>{
        //source code present in it will be executed when component is unmounted
    }

},[]);

note:in a component we can add n no of useeffect hooks.


3.useReducer
4.useContext
5.useref
6.useMemo
7.useCallback

 For handling validaltios in react

 React Hook form - Third party library

 for Installation:
  npm install react-hook-form

Component.jsx
import { useForm } from 'react-hook-form';


function Component(){
    const{register, handlesubmit,formstate:{error},watch} = useform(); 

    const registeruser=()=>{
        
    }
}

function usefrom(){
    return{
        for fristname 

    }
}

for navigating Programmatically:

import {useNavigate} from 'react-router-dom';
const navigate = useNavigate();


Props (Properties) : Communicating between  component and sharing information.

fuction ParentComponent(){
    return(
        <ChildComponent attr1= value1 attr2 = value2/>
    )

}
fuction ChildComponent(props){

    const {attr1,attr2,attr3} = props;

}  

props - predefined objects -we can pass any information in the form of key and value pairs.
inline css have high pertive
Styling functional components-
Inline Style with jsx
<tagname Style={{propertyNmae :value,propertyNmae :value,propertyNmae :value}}

Css Modules for local styles 

fileName.css

import 'relativePathofCSS'

useRef : Gets the reference of html element to javascript.

import {useRef} from 'react';

const variableName = useRef(intialValue);
variableName.current


<tagName ref={variableName}>
context API - 

contextService.js 
import {createContext} from 'react'

const contextName = createContext();
export default contextName;

ParentComponent.jsx
import contextName from './contextService';
import ChildComponent from './ChildComponent';
function ParentComponent() {
  return (
    // Provider
    <ContextName.Provider value={{property1: value1, property2: value2, property3: value3}}>
      <ChildComponent />
    </ContextName.Provider>
  );
}
export default ParentComponent;



// ChildComponent.jsx
import { useContext } from 'react';
import ContextName from './ContextService';
function ChildComponent() {
  // Consumer
  const { property1, property2, property3 } = useContext(ContextName);
}
export default ChildComponent;








       -provider 
useContext() - consumer 

React Switch
npm install react-switch
import Switch from "react-switch";
  <Switch onChange={this.handleChange} checked={this.state.checked} />

useReducer
Is a tool that allows developers to add a reducer to a component and manage state using action 
->The useReducer hook allows developers to:
Add a reducer to a component
Specify how the state gets updated using a reducer function
Manage state using actions
Keep track of multiple pieces of state that rely on complex logic
Return the current state and a dispatch method

   syntax-
   fuunction reducer(state,action){

   }

   import {useReducer} from 'react';

   const [state,dispatch]=useReducer(reducer);
 when we dispatch an action from the component, reducer function will be called automatically 
   
   dispatch ({type: actionName,payload:data})
//////////////////////////////////////////////////////////////

3-10-2024

REDUX TOOLKIT 

frist install packages
   npm install react-redux @reduxjs /toolkit 

creation of store 

store.js

import {configureStore} from '@redux.js/toolkit';

const store = configureStore({
    reducer:{
        key:value,
         key:value,
          key:value,
           key:value,
            key:value
    }
});

export default store;

main.jsx 
import store from 'relativepath';
import {provider} from 'react-redux';

<Provider store={store}>
<app/>
</Provider>


useDispatch: used to dispatchan action from component to slice.
import { useDispatch } from 'react-redux';

const dispatch = useDispatch();

dispatch(actionName);

useSelector:used retrieve selected infromation from store.

import { useSelector } from 'react-redux';

const variableName = useSelector((state) => state.keyName);
  

Creation Of Slice:

import { createSlice } from '@reduxjs/toolkit';

const sliceName = createSlice({
    initialState: {
    },
    reducers: {
        keyName1: (state, action) => {
        },
        keyName2: () => {
            return value 
        },
        keyName3: () => {
        }
    }
});

export const {keyName1,keyName2,keyName3} =sliceName.actions;

export defaultsliceName.reducer; -->value which is returned by action.

//////
5-10-2024

Integrating APIs into Redux Toolkit using Redux Thunk Middleware

createAsyncThunk:

> In Redux Toolkit, createAsyncThunk is a function that performs asynchronous tasks in a slice:
> What it does: Accepts a Redux action type string and a callback function that returns a promise
> What it generates: Promise lifecycle action types based on the action type prefix
> What it returns: A promise that represents the status of the asynchronous operation
> Possible promise states: Pending, fulfilled, or rejected

import { createAsyncThunk } from '@reduxjs/toolkit';

const functionName = createAsyncThunk(actionName, callbackFunc);

Pending
Fulfilled
Rejected 
