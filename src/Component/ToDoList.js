import { useState } from 'react';
import {faCartPlus, faCircle, faCirclePlus, faEllipsisVertical, faPlus, faXmark} from "@fortawesome/free-solid-svg-icons";
import {faTrash,faFile} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function ToDoList({ items, onItemClick, onItemCheck, onDelete }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [isOpenBtn, setIsOpenBtn] = useState(false);



  
  const toggleModalbtn = (index) => {
    if (openIndex === index) {

      setOpenIndex(null);
      setIsOpenBtn(false);
    } else {
      setOpenIndex(index);
      setIsOpenBtn(true);
    }
  };

  return (
    <div className="ul_list">
      <ul>
        <div>
          
        {items.map((item, index) => (
          
        <li key={index}>
          
         <div>
         <FontAwesomeIcon icon={faEllipsisVertical }className='modalbtn-2' onClick={() => toggleModalbtn(index)} />
         <div>
            <input 
                className="inputLi2" 
                type="checkbox" 
                style={{backgroundColor: item.completed ? '#712FFF' : 'transparent', borderColor: item.completed ? '#712FFF' : 'gray', '--active-color': '#712FFF'}}
                checked={item.completed} 
                onChange={(event) => onItemCheck(event, index)} 
              />
              <span className='textspan' onClick={() => onItemClick(index)}>{item.text}</span>
            </div>

         {openIndex === index && (
            <div onClose={() => setOpenIndex(null)}>
               <div className='modalbtn'>
               <div >
                <button className='movetotrash' onClick={() => onDelete(index)}><FontAwesomeIcon icon={faTrash }/><span className='text-btn-move'>Move To Trash</span></button>
               </div>
              </div>
            </div>
          )}
          
          
         </div>
         
          </li>
        ))}
        </div>
      
      </ul>
    </div>
  );
}

function DoneList({ items, onItemClick, onItemCheck, onDelete }) {
  const [openIndex, setOpenIndex] = useState(null);

  
  const [isOpenBtn, setIsOpenBtn] = useState(false);



  
  const toggleModalbtn = (index) => {
    if (openIndex === index) {
  
      setOpenIndex(null);
      setIsOpenBtn(false);
    } else {
      setOpenIndex(index);
      setIsOpenBtn(true);
    }
  };
  

  return (
    <div className="ul_list">
      <ul>
        <div>
          
        {items.map((item, index) => (
          
        <li key={index}>
          
         <div>
         <FontAwesomeIcon icon={faEllipsisVertical }className='modalbtn-2' onClick={() => toggleModalbtn(index)} />
         <div>
            <input 
                className="inputLi2" 
                type="checkbox" 
                style={{backgroundColor: item.completed ? '#712FFF' : 'transparent', borderColor: item.completed ? '#712FFF' : 'gray', '--active-color': '#712FFF'}}
                checked={item.completed} 
                onChange={(event) => onItemCheck(event, index)} 
              />
              <span  className='textspan' onClick={() => onItemClick(index)}>{item.text}</span>
            </div>

         {openIndex === index && (
            <div onClose={() => setOpenIndex(null)}>
               <div className='modalbtn'>
               <div >
                <button className='movetotrash' onClick={() => onDelete(index)}><FontAwesomeIcon icon={faTrash }/><span className='text-btn-move'>Move To Trash</span></button>
               </div>
              </div>
            </div>
          )}
          
          
         </div>
         
          </li>
        ))}
        </div>
      
      </ul>
    </div>
  );
}

function TrashList({ items,onItemClick,  onItemCheck, onDeleteForever, onMoveToToDo }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [isOpenBtn, setIsOpenBtn] = useState(false);



  
  const toggleModalbtn = (index) => {
    if (openIndex === index) {
    
      setOpenIndex(null);
      setIsOpenBtn(false);
    } else {
      setOpenIndex(index);
      setIsOpenBtn(true);
    }
  };

  return (
    <div className="ul_list">
    <ul>
      <div>
        
      {items.map((item, index) => (
        
      <li key={index}>
        
       <div>
       <FontAwesomeIcon icon={faEllipsisVertical }className='modalbtn-2' onClick={() => toggleModalbtn(index)} />
       <div>
          <input 
              className="inputLi2" 
              type="checkbox" 
              style={{backgroundColor: item.completed ? '#712FFF' : 'transparent', borderColor: item.completed ? '#712FFF' : 'gray', '--active-color': '#712FFF'}}
              checked={item.completed} 
              onChange={(event) => onItemCheck(event, index)} 
            />
            <span onClick={() => onItemClick(index)}>{item.text}</span>
          </div>

       {openIndex === index && (
          <div onClose={() => setOpenIndex(null)}>
             <div className='modalbtn'>
             <div className='btntrash'>
              <button  className='btntrash2' onClick={() => onDeleteForever(index)}><FontAwesomeIcon icon={faTrash }/><span className='text-btn-move'>Delete Forever</span></button>
              <button   className='btntrash3' onClick={() => onMoveToToDo(index)}><FontAwesomeIcon icon={faFile} /><span className='text-btn-move'>Move to To Do</span></button>
              </div>
              </div>
            </div>
          )}
          
          
         </div>
         
          </li>
        ))}
        </div>
      
      </ul>
    </div>
  );
}




function Modal({ onClose, children }) {
  return (
    <div className='modal'>
      <div >{children}</div>
   
    </div>
  );
}

function ToDoListApp() {
  const [status, setStatus] = useState('toDo');
  const [modalOpen, setModalOpen] = useState(false);
  const [newItemText, setNewItemText] = useState('');
  const [toDoList, setToDoList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [trashList, setTrashList] = useState([]);

  const [isClicked, setIsClicked] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
    setIsClicked(true); 
    if (modalOpen) setIsClicked(false); 
  };

  const handleNewItemSubmit = (event) => {
    event.preventDefault();
    setToDoList([...toDoList, { text: newItemText, completed: false, isTrash: false }]);
    setNewItemText('');
    toggleModal();
  };


  const handleToDoClick = (event) => {
    console.log(`Button clicked: ${event.target.innerText}`);
  };

  const handleCheck = (event, index) => {
    const newList = [...toDoList];
    const completedItem = newList.splice(index, 1)[0];
    completedItem.completed = event.target.checked;
    completedItem.isTrash = false;
    setDoneList([...doneList, completedItem]);
    setToDoList(newList);
  };

  const handleDoneCheck = (event, index) => {
    const newList = [...doneList];
    const uncompletedItem = newList.splice(index, 1)[0];
    uncompletedItem.completed = event.target.checked;
    uncompletedItem.isTrash = false;
    setToDoList([...toDoList, uncompletedItem]);
    setDoneList(newList);
  };

  const handleDelete = (index) => {
    if (status === 'toDo') {
      const newList = [...toDoList];
      const deletedItem = newList.splice(index, 1)[0];
      if (deletedItem.completed) {
      setDoneList(doneList.filter((item) => item !== deletedItem));
      }
      setTrashList([...trashList, deletedItem]);
      setToDoList(newList);
      } else if (status === 'done') {
      const newList = [...doneList];
      const deletedItem = newList.splice(index, 1)[0];
      if (!deletedItem.completed) {
      setToDoList(toDoList.filter((item) => item !== deletedItem));
      }
      setTrashList([...trashList, deletedItem]);
      setDoneList(newList);
      } else {
      const newList = [...trashList];
      const deletedItem = newList.splice(index, 1)[0];
      setTrashList(newList);
      if (deletedItem.completed) {
      setDoneList(doneList.filter((item) => item !== deletedItem));
      } else {
      setToDoList(toDoList.filter((item) => item !== deletedItem));
      }
      }
      };
      const handleDeleteForever = (index) => {
        const newList = [...trashList];
        newList.splice(index, 1);
        setTrashList(newList);
        };
        
        const handleMoveToToDo = (index) => {
        const newList = [...trashList];
        const movedItem = newList.splice(index, 1)[0];
        movedItem.isTrash = false;
        setToDoList([...toDoList, movedItem]);
        setTrashList(newList);
        };
        
        
        return (
        <div>
        <div className='btns_and_modalbtn'>
          <div className='alldiv'>
              <div>
                <button className={`btn ${status === 'toDo' ? 'active' : ''}`} onClick={() => setStatus('toDo')}>To Do</button>
                <button className={`btn ${status === 'done' ? 'active' : ''}`} onClick={() => setStatus('done')}>Done</button>
                <button className={`btn ${status === 'trash' ? 'active' : ''}`} onClick={() => setStatus('trash')}>Trash</button>
              </div>
              <div className='btnfilter'>
                {status === 'toDo' && (
                <div>
                <h2>To Do</h2>
                <div className='line'></div>
                <ToDoList items={toDoList} onItemClick={handleToDoClick} onItemCheck={handleCheck} onDelete={handleDelete} />
                </div>
                )}
                 {status === 'done' && (
                  <div>
                  <h2>Done</h2>
                  <div className='line'></div>
                  <DoneList items={doneList} onItemCheck={handleDoneCheck} onDelete={handleDelete} />
                  </div>
                  )}
                  {status === 'trash' && (
                  <div>
                  <h2>Trash</h2>
                  <div className='line'></div>
                  <TrashList items={trashList} onDeleteForever={handleDeleteForever} onMoveToToDo={handleMoveToToDo} />
                  </div>
                  )}
              </div>
          </div>
          <button className='formbtn' onClick={toggleModal}>
            <FontAwesomeIcon icon={isClicked ? faXmark : faPlus} className='faPlus' />
          </button>
              
              {modalOpen  && (
              <Modal onClose={toggleModal}>
              <h3>Add New To Do</h3>
              <form onSubmit={handleNewItemSubmit}>
              <input className='inputModal' placeholder='Your text' value={newItemText} onChange={(event) => setNewItemText(event.target.value)} />
              <button className='Addbtn' type="submit">Add</button>
              </form>
              </Modal>
              )}
            </div>
        </div>

        );
        }
        
        export default ToDoListApp;


     