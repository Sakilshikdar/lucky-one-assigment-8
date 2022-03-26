import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Phones from './component/Phones/Phones';




function App() {
  return (
    <div className="App">
    <Header></Header>
    <Phones></Phones>
    <div className='p-react'>
    <div>
        <h1>1.How react work</h1>
        <h4>React is an efficient and flexible JavaScript library for creating user interfaces. This is the 'V' in MVC. ReactJS is an open source, component-based front-end library that is only responsible for the view layer of the application.A document is accessed by determining the logical structure and manner of the React documents. So, to speed it up, the response applies a virtual DOM which is basically a DOM tree representation in JavaScript.</h4>
    </div>
    <div>
      <h1>2.How useState work</h1>
      <h4>
       A response element is regularly javascript using hooks. Now it makes a lot of sense, before the react hook.A response element defined as a function must be refactored to use ES6 class syntax. To add some part of the state or life cycle approach to the material. With feedback hooks, this is no longer necessary, since functions can still function when using the good parts of feedback. And there are still</h4>
    </div>
    </div>
    </div>
  );
}

export default App;
