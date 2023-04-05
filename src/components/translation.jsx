import React from 'react';
export default function Translation({doStuff,setInput,result}){
     return (
          <div>
               <textarea className='text-area' cols={55} rows={10} onChange={(event) => setInput(event.target.value)}></textarea>
               <button className='action-button' onClick={doStuff}>do you stuff!!</button>
               <h3 className='result-text'>{result.length > 0 ? result : ""}</h3>
          </div>
     );
};