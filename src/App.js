/* eslint-disable */

import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

function App() {

  let [title, titleChange] = useState(['Men coat recommended..','Gangnam Famous Restaurant','Gangnam Famous nuddle Restaurant']);
  let [modal, modalChange] = useState(false);
  let [titleNum, titleNumChg] = useState(0);
  let [inputData, inputDataChg] = useState('');
  //let [rcmd, rcmdChange] = useState(0);
  let [arrRcmd, arrRcmdChange] = useState([]);
  
  let posts = 'Famous Restaurant';

  function chgTitle(){
    var newTitle = [...title];  //spread operator ...immutable data
    newTitle[0]='Women coat recommended..';
    titleChange(newTitle);
  }

  function addRcmNum(i){
    var addArrRcmd = [...arrRcmd];
    addArrRcmd[i] = addArrRcmd[i]+1;
    arrRcmdChange(addArrRcmd);
  }

  function chgArrRcmd(i){
    var size = arrRcmd.length;
    //console.log(" arrRcmd size : "+size+", i : "+i);
    var newArrRcmd = [...arrRcmd];
    newArrRcmd[i]=0;
    arrRcmdChange(newArrRcmd);
    return arrRcmd
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={ { color:'grey', fontSize:'30px'} }>My Blog</div>
      </div>

      <div>
        <input onChange={ (e)=>{ inputDataChg(e.target.value) } } />
        <button onClick={ ()=>{
            var addTitle = [...title];
            //addTitle.push(inputData);
            addTitle.unshift(inputData);
            titleChange( addTitle );
            
            var addRcmd = [...arrRcmd];
            addRcmd.unshift(0);
            arrRcmdChange(addRcmd);
          }
        }>Posting..</button>
      </div>
      
      {
        title.map( (a, i)=>{
            //arrRcmd[i];
            return(
              <div className='list' key={i}>
                <h3 onClick={ ()=>{ titleNumChg(i) } }>{ a }
                  <span onClick={ ()=>{ 
                     arrRcmd[i] === null?chgArrRcmd(i):addRcmNum(i)
                    } }>👍
                  </span>{
                      arrRcmd[i] === undefined?chgArrRcmd(i):arrRcmd[i]
                    }
                    {/* {console.log(arrRcmd[i])} */}
                </h3>
                <p>17th February published..</p>
                <hr/>
              </div>
            )
        })
      }
      
      {/* <button onClick={ ()=>{ titleNumChg(0) } }>btn1</button>
      <button onClick={ ()=>{ titleNumChg(1) } }>btn2</button>
      <button onClick={ ()=>{ titleNumChg(2) } }>btn3</button> */}

      <button onClick={ ()=>{ modalChange(true) } }>Viewing..</button>

      {
        modal === true
        ?<Modal title={title} titleNum={titleNum}></Modal>
        : null
      }

    </div>
  );
}

function Modal(props){ // component
  return(
    <> {/* fragment -- using more than one tage in return() */}
    <div className="modal"> 
        <h2>Title : { props.title[props.titleNum] }</h2>
        <p>Date</p>
        <p>Detail</p>
    </div>
    <div></div>
    <div></div>
    </>
  )
}

export default App;
