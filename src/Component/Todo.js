import React,{useState,useEffect}from 'react'

function Todo()
{
   
   const [todoName,settodoName]=useState("")
   const [toDo,settoDo]=useState([])
   const [complete,setcomplete]=useState([])
   const [editFlag,setEditFlag]=useState(false)
   const [allFlag,setAllFlag]=useState(false)
   const [compFlag,setcomFlag]=useState(false)
   const [NonFlag,setnonFlag]=useState(false)
   
   function AllFlag(e)
   {
    e.preventDefault()
    allFlag?setAllFlag(false):setAllFlag(true)
    
   }
   function completed(e)
   {
    e.preventDefault()
    compFlag?setcomFlag(false):setcomFlag(true)
    
   }
   function NonCompleted(e)
   {
    e.preventDefault()
    NonFlag?setnonFlag(false):setnonFlag(true)
    
   }
   function addTodoList(e)
   {
      e.preventDefault()
      settoDo(arr=>[...arr,[todoName,false]])
      console.warn(toDo)
   }
  
   function changeElemen(e,items,type)
   {

      e.preventDefault()
      setEditFlag(true)
      if(type=="todo")
      {
      setcomplete(arr=>[...arr,items])
      settoDo(toDo.filter(item => item[0]!=items[0]));
      }else
      if(type=="com")
      {
        settoDo(arr=>[...arr,items])
        setcomplete(complete.filter(item => item[0]!=items[0]));
      }
   }
   function deleteItem(e,items,type)
   {
    e.preventDefault()
    if(type=="todo")
    {
    settoDo(toDo.filter(item => item[0]!=items[0]));
    }else
    if(type=="com")
    {
      setcomplete(complete.filter(item => item[0]!=items[0]));
    }
   }
   
   return(
       <React.Fragment>
         <div>
            <form>
            <div className="addTodoCss">
                <input type="text" onChange={(e)=>{settodoName(e.target.value)}}></input>
                <button onClick={addTodoList}>Add</button><br/>
            </div>
                <div className="button">
                <input type="checkbox" onClick={AllFlag} />
                <label>All</label>
                <input type="checkbox" onClick={completed} />
                <label>Completed</label>
                <input type="checkbox" onClick={NonCompleted}/>
                <label>NotCompleted</label>
                </div>
            </form>
         </div>
          <div >
          <div>
              {
                allFlag?<p>All Todo List</p>:<></>
              }
              {
                allFlag?  toDo.map((items,index)=>{
                      return(
                          <div className="todoItems">
                            <input type="checkbox"  onClick={(e)=>changeElemen(e,items,"todo")}></input>
                            <p >{items[0]}</p>
                            <button onClick={(e)=>{deleteItem(e,items,"todo")}}>Delete</button>
                          </div>
                      )
                  }):<></>
              }
              {
                  allFlag?  complete.map((items,index)=>{
                      return(
                          <div className="todoItemsCom">
                            <input type="checkbox"  onClick={(e)=>changeElemen(e,items,"com")}></input>
                            <p >{items[0]}</p>
                            <button onClick={(e)=>{deleteItem(e,items,"com")}}>Delete</button>
                          </div>
                      )
                  }):<></>
              }
              </div>
             <div>
             {
                compFlag?<p>Completed Todo List</p>:<></>
              }
              {
                compFlag? complete.map((items,index)=>{
                      return(
                          <div className="todoItems">
                            <p>{items[0]}</p>
                          </div>
                      )
                  }):<></>
              }
              </div>
              <div>
              {
                NonFlag?<p>Not Completed Todo List</p>:<></>
              }
              {
                NonFlag? toDo.map((items,index)=>{
                      return(
                          <div className="todoItems">
                            <p>{items[0]}</p>
                          </div>
                      )
                  }):<></>
              }
              </div>
          </div> 
       </React.Fragment>
   )

}

export default Todo