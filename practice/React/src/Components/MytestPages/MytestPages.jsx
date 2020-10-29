import React from 'react'



const MytestPages = (props) => {

  return (
    <>
      <h1>My test pages</h1>
      {/*<textarea onChange={mytestChange} value={props.mytestText}/>*/}
      <textarea onChange={(e) => props.mytestChange(e.target.value)} value={props.mytestText}/>
      <button onClick={() => {props.mytestadd()}}>OK</button>
      {props.mytestArr.map(el=> (
        <div key={el.id}>
          <div>{el.id}.) {el.name}2:</div>
          <div>{el.text}</div>
          {/*<button onClick={() => props.mydelete(el.id)}>Delete</button>*/}
          <button onClick={() => props.mydelete(el.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default MytestPages;