import React, { useEffect } from 'react';
import { useState } from 'react';

const getData = () => {
  const items = localStorage.getItem("todolist")
  if(items){
    return JSON.parse(items)
  }
  else{
    return [];
  }
}

function TodoList() {

  const [initial, SetInitial] = useState({
    list: ''
  });
  const [storeList, setStoreList] = useState(getData());

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetInitial({ ...initial, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setStoreList([...storeList, initial]);

    SetInitial({
      list: ''
    })
  }

  const handledelete = (index) => {
    const filterList = storeList.filter((el,id) => {
      return index !== id;
    })

    setStoreList([...filterList])
  }

  const removeAll = () => {
    setStoreList([])
  }

  useEffect(() => {
    localStorage.setItem("todolist",JSON.stringify(storeList));
  },[storeList])

  return (
    <div className='container'>
      <h1 className='text-center mt-4 mb-4'>To-do list app</h1>
      <form className='w-50 mx-auto border border-info p-3' onSubmit={(e) => { handleSubmit(e) }}>
        <div className="input-group">
          <input type="text" className="form-control rounded-0 outline-0" placeholder="Add list..." name='list' value={initial.list} onChange={(e) => { handleChange(e) }} />
          <button className="btn bg-info text-white rounded-0 px-4" type="submit">Add</button>
        </div>

        <ul className="list-group">
          {

            storeList.map((list,index) => {
              return (
                <li className="list-group-item mt-3 border rounded-0 d-flex align-items-center justify-content-between">
                  <div>
                    {list.list}
                  </div>
                  <div>
                    <i className="fa-solid fa-trash text-info" onClick={() => {handledelete(index)}}/>
                  </div>
                </li>
              )
            })
          }
        </ul>
          {
            storeList.length > 2 ?
            <button onClick={(e) => removeAll(e)} className="btn clear bg-info text-white rounded-0 py-2 mt-3">Clear All</button>
            : null
          }
      </form>
    </div>
  )
}

export default TodoList
