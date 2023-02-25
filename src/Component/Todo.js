// // import React, { useState } from 'react';

// // function ToDoList() {
// //   const [tasks, setTasks] = useState([]);
// //   const [completedTasks, setCompletedTasks] = useState([]);
// //   const [deletedTasks, setDeletedTasks] = useState([]);

// //   const handleAddTask = (event) => {
// //     event.preventDefault();
// //     const taskName = event.target.elements.taskName.value;
// //     if (taskName) {
// //       setTasks([...tasks, taskName]);
// //       event.target.reset();
// //     }
// //   };

// //   const handleCompleteTask = (completedTask) => {
// //     setCompletedTasks([...completedTasks, completedTask]);
// //     setTasks(tasks.filter(task => task !== completedTask));
// //   };

// //   const handleDeleteTask = (deletedTask) => {
// //     setDeletedTasks([...deletedTasks, deletedTask]);
// //     setTasks(tasks.filter(task => task !== deletedTask));
// //   };

// //   const handleDeleteCompletedTask = (deletedTask) => {
// //     setDeletedTasks([...deletedTasks, deletedTask]);
// //     setCompletedTasks(completedTasks.filter(task => task !== deletedTask));
// //   };

// //   const handleRestoreTask = (restoredTask) => {
// //     setTasks([...tasks, restoredTask]);
// //     setDeletedTasks(deletedTasks.filter(task => task !== restoredTask));
// //   };

// //   return (
// //     <div>
// //       <h1>Simple ToDo list</h1>
// //       <form onSubmit={handleAddTask}>
// //         <input type="text" name="taskName" />
// //         <button type="submit">Add Task</button>
// //       </form>
// //       <h2>Active Tasks</h2>
// //       <ul>
// //         {tasks.map(task => (
// //           <li key={task}>
// //             {task}
// //             <button onClick={() => handleCompleteTask(task)}>Complete</button>
// //             <button onClick={() => handleDeleteTask(task)}>Delete</button>
// //           </li>
// //         ))}
// //       </ul>
// //       <h2>Completed Tasks</h2>
// //       <ul>
// //         {completedTasks.map(task => (
// //           <li key={task}>
// //             {task}
// //             <button onClick={() => handleDeleteCompletedTask(task)}>Delete</button>
// //           </li>
// //         ))}
// //       </ul>
// //       <h2>Deleted Tasks</h2>
// //       <ul>
// //         {deletedTasks.map(task => (
// //           <li key={task}>
// //             {task}
// //             <button onClick={() => handleRestoreTask(task)}>Restore</button>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default ToDoList;

// // import React, { useState } from 'react';

// // function TodoList() {
// //   const [tasks, setTasks] = useState([]);
// //   const [completedTasks, setCompletedTasks] = useState([]);
// //   const [deletedTasks, setDeletedTasks] = useState([]);
// //   const [inputValue, setInputValue] = useState('');
// //   const [activeTab, setActiveTab] = useState('active');

// //   const handleInputChange = (event) => {
// //     setInputValue(event.target.value);
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     if (inputValue.trim()) {
// //       setTasks([...tasks, { text: inputValue, completed: false, id: Date.now() }]);
// //       setInputValue('');
// //     }
// //   };

// //   const handleComplete = (index) => {
// //     const newTasks = [...tasks];
// //     const task = newTasks.splice(index, 1)[0];
// //     task.completed = !task.completed;
// //     if (task.completed) {
// //       setCompletedTasks([...completedTasks, task]);
// //     } else {
// //       setTasks([...newTasks, task]);
// //       setCompletedTasks(completedTasks.filter((t) => t !== task));
// //     }
// //   };

// //   const handleDelete = (id) => {
// //     const updatedTasks = tasks.filter((task) => task.id !== id);
// //     const deletedTask = tasks.find((task) => task.id === id);
// //     setTasks(updatedTasks);
// //     setDeletedTasks([...deletedTasks, deletedTask]);
// //   };
// //     const taskIndex = tasks.findIndex(task => task.id === id);
// //     if (taskIndex !== -1) {
// //       setTasks(tasks.filter(task => task.id !== id));
// //       return;
// //     }
// //     const completedTaskIndex = completedTasks.findIndex(task => task.id === id);
// //     if (completedTaskIndex !== -1) {
// //       const deletedTask = completedTasks[completedTaskIndex];
// //       setCompletedTasks([...completedTasks.slice(0, completedTaskIndex), ...completedTasks.slice(completedTaskIndex + 1)]);
// //       setDeletedTasks([...deletedTasks, deletedTask]);
// //     }
// //   };
  

// //   const handleRestore = (id) => {
// //     const updatedTasks = deletedTasks.filter(task => task.id !== id);
// //     const restoredTask = deletedTasks.find(task => task.id === id);
// //     setDeletedTasks(updatedTasks);
// //     setTasks([...tasks, restoredTask]);
// //   };

// //   const handleTabChange = (tab) => {
// //     setActiveTab(tab);
// //   };

// //   const filteredTasks = activeTab === 'active'
// //     ? tasks
// //     : activeTab === 'completed'
// //       ? completedTasks
// //       : deletedTasks;

// //   return (
// //     <div>
// //       <form onSubmit={handleSubmit}>
// //         <input type="text" value={inputValue} onChange={handleInputChange} />
// //         <button type="submit">Add Task</button>
// //       </form>

// //       <div>
// //         <button onClick={() => handleTabChange('active')}>Active</button>
// //         <button onClick={() => handleTabChange('completed')}>Completed</button>
// //         <button onClick={() => handleTabChange('deleted')}>Deleted</button>
// //       </div>

// //       <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Tasks</h2>
// //       <ul>
// //         {filteredTasks.map((task) => (
// //           <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
// //             <input type="checkbox" checked={task.completed} onChange={() => handleComplete(tasks.indexOf(task))} />
// //             {task.text}
// //             {(activeTab === 'active' || activeTab === 'completed') &&
// //               <button onClick={() => handleDelete(task.id)}>Delete</button>
// //             }
// //             {activeTab === 'deleted' &&
// //               <button onClick={() => handleRestore(task.id)}>Restore</button>
// //             }
         

            
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );



// // export default TodoList;


// // import React, { useState } from 'react';

// // function TodoList() {
// //   const [tasks, setTasks] = useState([]);
// //   const [completedTasks, setCompletedTasks] = useState([]);
// //   const [deletedTasks, setDeletedTasks] = useState([]);
// //   const [inputValue, setInputValue] = useState('');
// //   const [activeTab, setActiveTab] = useState('active');

// //   const handleInputChange = (event) => {
// //     setInputValue(event.target.value);
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     if (inputValue.trim()) {
// //       setTasks([...tasks, { text: inputValue, completed: false, id: Date.now() }]);
// //       setInputValue('');
// //     }
// //   };

// //   const handleComplete = (id) => {
// //     const task = tasks.find((task) => task.id === id);
// //     if (task) {
// //       const newTasks = tasks.filter((task) => task.id !== id);
// //       task.completed = !task.completed;
// //       if (task.completed) {
// //         setCompletedTasks([...completedTasks, task]);
// //       } else {
// //         setTasks([...newTasks, task]);
// //         setCompletedTasks(completedTasks.filter((t) => t !== task));
// //       }
// //     } else {
// //       const completedTask = completedTasks.find((task) => task.id === id);
// //       if (completedTask) {
// //         const newCompletedTasks = completedTasks.filter((task) => task.id !== id);
// //         completedTask.completed = !completedTask.completed;
// //         if (completedTask.completed) {
// //           setCompletedTasks([...newCompletedTasks, completedTask]);
// //         } else {
// //           setTasks([...tasks, completedTask]);
// //           setCompletedTasks(newCompletedTasks);
// //         }
// //       }
// //     }
// //   };

// //   const handleDelete = (id) => {
// //     const task = tasks.find((task) => task.id === id);
// //     if (task) {
// //       const updatedTasks = tasks.filter((task) => task.id !== id);
// //       setTasks(updatedTasks);
// //       setDeletedTasks([...deletedTasks, task]);
// //     } else {
// //       const completedTask = completedTasks.find((task) => task.id === id);
// //       if (completedTask) {
// //         const updatedCompletedTasks = completedTasks.filter((task) => task.id !== id);
// //         setCompletedTasks(updatedCompletedTasks);
// //         setDeletedTasks([...deletedTasks, completedTask]);
// //       }
// //     }
// //   };

// //   const handleRestore = (id) => {
// //     const restoredTask = deletedTasks.find((task) => task.id === id);
// //     if (restoredTask) {
// //       const updatedDeletedTasks = deletedTasks.filter((task) => task.id !== id);
// //       setDeletedTasks(updatedDeletedTasks);
// //       setTasks([...tasks, restoredTask]);
// //     }
// //   };

// //   const handleTabChange = (tab) => {
// //     setActiveTab(tab);
// //   };

// //   const filteredTasks = activeTab === 'active'
// //     ? tasks
// //     : activeTab === 'completed'
// //       ? completedTasks
// //       : deletedTasks;

// //   return (
// //     <div>
// //       <form onSubmit={handleSubmit}>
// //         <input type="text" value={inputValue} onChange={handleInputChange} />
// //         <button type="submit">Add Task</button>
// //       </form>

// //       <div>
// //         <button onClick={() => handleTabChange('active')}>Active</button>
// //         <button onClick={() => handleTabChange('completed')}>Completed</button>
// //         <button onClick={() => handleTabChange('deleted')}>Deleted</button>
// //       </div>

// //       <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Tasks</h2>
// //       <ul>
// //       {filteredTasks.map((task) => (
// //         <li key={task.id}>
// //         <span
// //         style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
// //         onClick={() => handleComplete(task.id)}
// //         >
// //         {task.text}
// //         </span>
// //         {activeTab === 'deleted' && (
// //         <button onClick={() => handleRestore(task.id)}>Restore</button>
// //         )}
// //         {activeTab !== 'deleted' && (
// //         <button onClick={() => handleDelete(task.id)}>Delete</button>
// //         )}
// //         </li>
// //         ))}
// //         </ul>

// //         </div>
// //         );
// //         }
// //         export default TodoList;

// // import React, { useState } from 'react';
// // import { v4 as uuidv4 } from 'uuid';

// // function TodoList() {
// //   const [tasks, setTasks] = useState([]);
// //   const [completedTasks, setCompletedTasks] = useState([]);
// //   const [deletedTasks, setDeletedTasks] = useState([]);
// //   const [inputValue, setInputValue] = useState('');
// //   const [activeTab, setActiveTab] = useState('active');

// //   const handleInputChange = (event) => {
// //     setInputValue(event.target.value);
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     if (inputValue.trim()) {
// //       setTasks([...tasks, { text: inputValue, completed: false, id: uuidv4() }]);
// //       setInputValue('');
// //     }
// //   };

// //   const handleComplete = (id) => {
// //     const task = tasks.find((task) => task.id === id);
// //     if (task) {
// //       const newTasks = tasks.filter((task) => task.id !== id);
// //       task.completed = !task.completed;
// //       if (task.completed) {
// //         setCompletedTasks([...completedTasks, task]);
// //       } else {
// //         setTasks([...newTasks, task]);
// //         setCompletedTasks(completedTasks.filter((t) => t !== task));
// //       }
// //     } else {
// //       const completedTask = completedTasks.find((task) => task.id === id);
// //       if (completedTask) {
// //         const newCompletedTasks = completedTasks.filter((task) => task.id !== id);
// //         completedTask.completed = !completedTask.completed;
// //         if (completedTask.completed) {
// //           setCompletedTasks([...newCompletedTasks, completedTask]);
// //         } else {
// //           setTasks([...tasks, completedTask]);
// //           setCompletedTasks(newCompletedTasks);
// //         }
// //       }
// //     }
// //   };

// //   const handleDelete = (id) => {
// //     const task = tasks.find((task) => task.id === id);
// //     if (task) {
// //       const updatedTasks = tasks.filter((task) => task.id !== id);
// //       setTasks(updatedTasks);
// //       setDeletedTasks([...deletedTasks, task]);
// //     } else {
// //       const completedTask = completedTasks.find((task) => task.id === id);
// //       if (completedTask) {
// //         const updatedCompletedTasks = completedTasks.filter((task) => task.id !== id);
// //         setCompletedTasks(updatedCompletedTasks);
// //         setDeletedTasks([...deletedTasks, completedTask]);
// //       }
// //     }
// //   };

// //   const handleRestore = (id) => {
// //     const restoredTask = deletedTasks.find((task) => task.id === id);
// //     if (restoredTask) {
// //       const updatedDeletedTasks = deletedTasks.filter((task) => task.id !== id);
// //       setDeletedTasks(updatedDeletedTasks);
// //       setTasks([...tasks, restoredTask]);
// //     }
// //   };

// //   const handleTabChange = (tab) => {
// //     setActiveTab(tab);
// //   };

// //   const filteredTasks = activeTab === 'active'
// //     ? tasks
// //     : activeTab === 'completed'
// //       ? completedTasks
// //       : deletedTasks;

// //   return (
// //     <div>
// //       <form onSubmit={handleSubmit}>
// //         <input type="text" value={inputValue} onChange={handleInputChange} />
// //         <button type="submit">Add Task</button>
// //       </form>

// //       <div>
// //         <button onClick={() => handleTabChange('active')}>Active</button>
// //         <button onClick={() => handleTabChange('completed')}>Completed</button>
// //         <button onClick={() => handleTabChange('deleted')}>Deleted</button>
// //       </div>

// //       <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(
// //   <ul>
// //   {filteredTasks.map((task) => (
// //     <li key={task.id}>
// //       <span
// //         style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
// //         onClick={() => handleComplete(task.id)}
// //       >
// //         {task.text}
// //       </span>
// //       {activeTab === 'deleted' && (
// //         <button onClick={() => handleRestore(task.id)}>Restore</button>
// //       )}
// //       {activeTab !== 'deleted' && (
// //         <button onClick={() => handleDelete(task.id)}>Delete</button>
// //       )}
// //     </li>
// //   ))}
// // </ul>
// // </div>
// // )
// // );

// // export default TodoList;
// // nice vers
// // import React, { useState } from 'react';
// // import { v4 as uuidv4 } from 'uuid';

// // function TodoList() {
// //   const [tasks, setTasks] = useState([]);
// //   const [completedTasks, setCompletedTasks] = useState([]);
// //   const [deletedTasks, setDeletedTasks] = useState([]);
// //   const [inputValue, setInputValue] = useState('');
// //   const [activeTab, setActiveTab] = useState('active');

// //   const handleInputChange = (event) => {
// //     setInputValue(event.target.value);
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     if (inputValue.trim()) {
// //       setTasks([...tasks, { text: inputValue, completed: false, id: uuidv4() }]);
// //       setInputValue('');
// //     }
// //   };

// //   const handleComplete = (id) => {
// //     const task = tasks.find((task) => task.id === id);
// //     if (task) {
// //       const newTasks = tasks.filter((task) => task.id !== id);
// //       task.completed = !task.completed;
// //       if (task.completed) {
// //         setCompletedTasks([...completedTasks, task]);
// //       } else {
// //         setTasks([...newTasks, task]);
// //         setCompletedTasks(completedTasks.filter((t) => t !== task));
// //       }
// //     } else {
// //       const completedTask = completedTasks.find((task) => task.id === id);
// //       if (completedTask) {
// //         const newCompletedTasks = completedTasks.filter((task) => task.id !== id);
// //         completedTask.completed = !completedTask.completed;
// //         if (completedTask.completed) {
// //           setCompletedTasks([...newCompletedTasks, completedTask]);
// //         } else {
// //           setTasks([...tasks, completedTask]);
// //           setCompletedTasks(newCompletedTasks);
// //         }
// //       }
// //     }
// //   };

// //   const handleDelete = (id) => {
// //     const task = tasks.find((task) => task.id === id);
// //     if (task) {
// //       const updatedTasks = tasks.filter((task) => task.id !== id);
// //       setTasks(updatedTasks);
// //       setDeletedTasks([...deletedTasks, task]);
// //     } else {
// //       const completedTask = completedTasks.find((task) => task.id === id);
// //       if (completedTask) {
// //         const updatedCompletedTasks = completedTasks.filter((task) => task.id !== id);
// //         setCompletedTasks(updatedCompletedTasks);
// //         setDeletedTasks([...deletedTasks, completedTask]);
// //       }
// //     }
// //   };

// //   const handleRestore = (id) => {
// //     const restoredTask = deletedTasks.find((task) => task.id === id);
// //     if (restoredTask) {
// //       const updatedDeletedTasks = deletedTasks.filter((task) => task.id !== id);
// //       setDeletedTasks(updatedDeletedTasks);
// //       setTasks([...tasks, restoredTask]);
// //     }
// //   };

// //   const handleTabChange = (tab) => {
// //     setActiveTab(tab);
// //   };

// //   const filteredTasks = activeTab === 'To Do'
// //     ? tasks
// //     : activeTab === 'Done'
// //       ? completedTasks
// //       : deletedTasks;

// //   return (
// //     <div>
// //       <form onSubmit={handleSubmit}>
// //         <input type="text" value={inputValue} onChange={handleInputChange} />
// //         <button type="submit">Add Task</button>
// //       </form>

// //       <div>
// //         <button onClick={() => handleTabChange('To Do')}>To Do</button>
// //         <button onClick={() => handleTabChange('Done')}>Done</button>
// //         <button onClick={() => handleTabChange('Trash')}>Trash</button>
// //       </div>

// //       <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} </h2>
// //   <ul>
// //   {filteredTasks.map((task) => (
// //     <li key={task.id}>
// //       <span
// //         style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
// //         onClick={() => handleComplete(task.id)}
// //       >
// //         {task.text}
// //       </span>
// //       {activeTab === 'deleted' && (
// //         <button onClick={() => handleRestore(task.id)}>Move Back To To Do</button>
// //       )}
// //       {activeTab !== 'deleted' && (
// //         <button onClick={() => handleDelete(task.id)}>Move to Trash</button>
// //       )}
// //     </li>
// //   ))}
// // </ul>
// // </div>
// // )
// //       }

// // export default TodoList

// // function TodoList() {
// //     const [tasks, setTasks] = useState([]);
// //     const [completedTasks, setCompletedTasks] = useState([]);
// //     const [deletedTasks, setDeletedTasks] = useState([]);
// //     const [inputValue, setInputValue] = useState('');
// //     const [activeTab, setActiveTab] = useState('active');
  
// //     const handleInputChange = (event) => {
// //       setInputValue(event.target.value);
// //     };
  
// //     const handleSubmit = (event) => {
// //       event.preventDefault();
// //       if (inputValue.trim()) {
// //         setTasks([...tasks, { text: inputValue, completed: false, id: uuidv4() }]);
// //         setInputValue('');
// //       }
// //     };
  
// //     const handleComplete = (id) => {
// //       const task = tasks.find((task) => task.id === id);
// //       if (task) {
// //         const newTasks = tasks.filter((task) => task.id !== id);
// //         task.completed = !task.completed;
// //         if (task.completed) {
// //           setCompletedTasks([...completedTasks, task]);
// //         } else {
// //           setTasks([...newTasks, task]);
// //           setCompletedTasks(completedTasks.filter((t) => t !== task));
// //         }
// //       } else {
// //         const completedTask = completedTasks.find((task) => task.id === id);
// //         if (completedTask) {
// //           const newCompletedTasks = completedTasks.filter((task) => task.id !== id);
// //           completedTask.completed = !completedTask.completed;
// //           if (completedTask.completed) {
// //             setCompletedTasks([...newCompletedTasks, completedTask]);
// //           } else {
// //             setTasks([...tasks, completedTask]);
// //             setCompletedTasks(newCompletedTasks);
// //           }
// //         }
// //       }
// //     };
  
// //     const handleDelete = (id) => {
// //       const task = tasks.find((task) => task.id === id);
// //       if (task) {
// //         const updatedTasks = tasks.filter((task) => task.id !== id);
// //         setTasks(updatedTasks);
// //         setDeletedTasks([...deletedTasks, task]);
// //       } else {
// //         const completedTask = completedTasks.find((task) => task.id === id);
// //         if (completedTask) {
// //           const updatedCompletedTasks = completedTasks.filter((task) => task.id !== id);
// //           setCompletedTasks(updatedCompletedTasks);
// //           setDeletedTasks([...deletedTasks, completedTask]);
// //         }
// //       }
// //     };
  
// //     const handleRestore = (id) => {
// //       const restoredTask = deletedTasks.find((task) => task.id === id);
// //       if (restoredTask) {
// //         const updatedDeletedTasks = deletedTasks.filter((task) => task.id !== id);
// //         setDeletedTasks(updatedDeletedTasks);
// //         setTasks([...tasks, restoredTask]);
// //       }
// //     };
  
// //     const handleTabChange = (tab) => {
// //       setActiveTab(tab);
// //     };
  
// //     const filteredTasks = activeTab === 'active'
// //       ? tasks
// //       : activeTab === 'completed'
// //         ? completedTasks
// //         : deletedTasks;
  
// //     return (
// //       <div>
// //         <form onSubmit={handleSubmit}>
// //           <input type="text" value={inputValue} onChange={handleInputChange} />
// //           <button type="submit">Add Task</button>
// //         </form>
  
// //         <div>
// //           <button onClick={() => handleTabChange('active')}>Active</button>
// //           <button onClick={() => handleTabChange('completed')}>Completed</button>
// // <button onClick={() => handleTabChange('deleted')}>Deleted</button>
// // </div>
// // <ul>
// //     {filteredTasks.map((task) => (
// //       <li key={task.id}>
// //         <span
// //           style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
// //           onClick={() => handleComplete(task.id)}
// //         >
// //           {task.text}
// //         </span>
// //         {activeTab === 'deleted' ? (
// //           <button onClick={() => handleRestore(task.id)}>Restore</button>
// //         ) : (
// //           <button onClick={() => handleDelete(task.id)}>Move to Trash</button>
// //         )}
// //       </li>
// //     ))}
// //   </ul>
// // </div>
// // );
// // }

// // export default TodoList;

// // function TodoList() {
// //     const [tasks, setTasks] = useState([]);
// //     const [completedTasks, setCompletedTasks] = useState([]);
// //     const [deletedTasks, setDeletedTasks] = useState([]);
// //     const [inputValue, setInputValue] = useState('');
// //     const [activeTab, setActiveTab] = useState('active');
  
// //     const handleInputChange = (event) => {
// //       setInputValue(event.target.value);
// //     };
// //     const filteredTasks = activeTab === 'active'
// //     ? tasks
// //     : activeTab === 'completed'
// //       ? completedTasks
// //       : deletedTasks;
  
// //     const handleSubmit = (event) => {
// //       event.preventDefault();
// //       if (inputValue.trim()) {
// //         setTasks([
// //           ...tasks,
// //           { text: inputValue, completed: false, id: uuidv4(), checked: false },
// //         ]);
// //         setInputValue('');
// //       }
// //     };
  
// //     const handleComplete = (id) => {
// //       const task = tasks.find((task) => task.id === id);
// //       if (task) {
// //         const newTasks = tasks.filter((task) => task.id !== id);
// //         task.completed = !task.completed;
// //         task.checked = false;
// //         if (task.completed) {
// //           setCompletedTasks([...completedTasks, task]);
// //         } else {
// //           setTasks([...newTasks, task]);
// //           setCompletedTasks(completedTasks.filter((t) => t !== task));
// //         }
// //       } else {
// //         const completedTask = completedTasks.find((task) => task.id === id);
// //         if (completedTask) {
// //           const newCompletedTasks = completedTasks.filter((task) => task.id !== id);
// //           completedTask.completed = !completedTask.completed;
// //           completedTask.checked = false;
// //           if (completedTask.completed) {
// //             setCompletedTasks([...newCompletedTasks, completedTask]);
// //           } else {
// //             setTasks([...tasks, completedTask]);
// //             setCompletedTasks(newCompletedTasks);
// //           }
// //         }
// //       }
// //     };
  
// //     const handleDelete = (id) => {
// //       const task = tasks.find((task) => task.id === id);
// //       if (task) {
// //         const updatedTasks = tasks.filter((task) => task.id !== id);
// //         setTasks(updatedTasks);
// //         setDeletedTasks([...deletedTasks, task]);
// //       } else {
// //         const completedTask = completedTasks.find((task) => task.id === id);
// //         if (completedTask) {
// //           const updatedCompletedTasks = completedTasks.filter((task) => task.id !== id);
// //           setCompletedTasks(updatedCompletedTasks);
// //           setDeletedTasks([...deletedTasks, completedTask]);
// //         }
// //       }
// //     };
  
// //     const handleRestore = (id) => {
// //       const restoredTask = deletedTasks.find((task) => task.id === id);
// //       if (restoredTask) {
// //         const updatedDeletedTasks = deletedTasks.filter((task) => task.id !== id);
// //         setDeletedTasks(updatedDeletedTasks);
// //         setTasks([...tasks, restoredTask]);
// //       }
// //     };
// //     const handleTaskCheck = (id) => {
// //         const task = tasks.find((task) => task.id === id);
// //         if (task) {
// //         const newTasks = tasks.map((task) => {
// //         if (task.id === id) {
// //         return { ...task, completed: !task.completed };
// //         }
// //         return task;
// //         });
// //         setTasks(newTasks);
// //         }
// //         };

// //         const handleTabChange = (tab) => {
// //             setActiveTab(tab);
// //           };
        
// //         return(
     
// //         <div>
// //         <form onSubmit={handleSubmit}>
// //           <input type="text" value={inputValue} onChange={handleInputChange} />
// //           <button type="submit">Add Task</button>
// //         </form>
  
// //         <div>
// //     <button onClick={() => handleTabChange('active')}>Active</button>
// //     <button onClick={() => handleTabChange('completed')}>Completed</button>
// //     <button onClick={() => handleTabChange('deleted')}>Deleted</button>
// //   </div>

// //           <ul>
// //             {filteredTasks.map((task) => (
// //               <li key={task.id}>
// //                 <input
// //                   type="checkbox"
// //                   checked={task.completed}
// //                   onChange={() => handleTaskCheck(task.id)}
// //                 />
// //                 <span
// //                   style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
// //                 >
// //                   {task.text}
// //                 </span>
// //                 {activeTab === 'deleted' ? (
// //                   <button onClick={() => handleRestore(task.id)}>Restore</button>
// //                 ) : (
// //                   <button onClick={() => handleDelete(task.id)}>Delete</button>
// //                 )}
// //               </li>
// //             ))}
// //           </ul>
// //           </div>
      
// //                 )}
// //     export default TodoList


// // import { useState } from 'react';
// // import { v4 as uuidv4 } from 'uuid';

// // function TodoList() {
// // const [tasks, setTasks] = useState([]);
// // const [completedTasks, setCompletedTasks] = useState([]);
// // const [deletedTasks, setDeletedTasks] = useState([]);
// // const [inputValue, setInputValue] = useState('');
// // const [activeTab, setActiveTab] = useState('active');

// // const handleInputChange = (event) => {
// // setInputValue(event.target.value);
// // };

// // const filteredTasks = activeTab === 'active'
// // ? tasks
// // : activeTab === 'completed'
// // ? completedTasks
// // : deletedTasks;

// // const handleSubmit = (event) => {
// // event.preventDefault();
// // if (inputValue.trim()) {
// // setTasks([
// // ...tasks,
// // { text: inputValue, completed: false, id: uuidv4(), checked: false },
// // ]);
// // setInputValue('');
// // }
// // };

// // const handleTaskCheck = (id) => {
// // const task = tasks.find((task) => task.id === id);
// // if (task) {
// // const newTasks = tasks.map((t) => {
// // if (t.id === id) {
// // return { ...t, completed: !t.completed, checked: !t.checked };
// // }
// // return t;
// // });
// // setTasks(newTasks);

// // handleComplete(task);
// // } else {
// //   const completedTask = completedTasks.find((t) => t.id === id);
// //   if (completedTask) {
// //     const newCompletedTasks = completedTasks.filter((t) => t.id !== id);
// //     completedTask.checked = false;
// //     if (completedTask.completed) {
// //       setCompletedTasks(newCompletedTasks);
// //       completedTask.completed = false;

// //       if (activeTab === 'deleted') {
// //         setDeletedTasks([...deletedTasks, completedTask]);
// //       } else {
// //         setTasks([...tasks, completedTask]);
// //       }
// //     } else {
// //       setTasks([...tasks, completedTask]);
// //       completedTask.completed = true;
// //     }
// //   }
// // }
// // };

// // const handleComplete = (task) => {
// // const newTasks = tasks.filter((t) => t.id !== task.id);
// // task.checked = false;
// // if (task.completed) {
// // setCompletedTasks([...completedTasks, task]);
// // task.completed = false;
// // if (activeTab === 'deleted') {
// //     setDeletedTasks([...deletedTasks, task]);
// //   } else {
// //     setTasks(newTasks);
// //   }
// // } else {
// //   setTasks([...newTasks, task]);
// //   task.completed = true;
// // }
// // };

// // const handleDelete = (id) => {
// // const task = tasks.find((t) => t.id === id);
// // if (task) {
// // const updatedTasks = tasks.filter((t) => t.id !== id);
// // setTasks(updatedTasks);
// // task.checked = false;
// // if (activeTab === 'completed') {
// // setCompletedTasks(completedTasks.filter((t) => t.id !== id));
// // } else {
// // setDeletedTasks([...deletedTasks, task]);
// // }
// // } else {
// // const completedTask = completedTasks.find((t) => t.id === id);
// // if (completedTask) {
// // setCompletedTasks(completedTasks.filter((t) => t.id !== id));
// // completedTask.checked = false;
// // setDeletedTasks([...deletedTasks, completedTask]);
// // } else {
// // const deletedTask = deletedTasks.find((t) => t.id === id);
// // if (deletedTask) {
// // const updatedDeletedTasks = deletedTasks.filter((t) => t.id !== id);
// // setDeletedTasks(updatedDeletedTasks);
// // }
// // }
// // }


// // import React, { useState } from 'react';
// // import { v4 as uuidv4 } from 'uuid';

// // function TodoList() {
// //   const [tasks, setTasks] = useState([]);
// //   const [completedTasks, setCompletedTasks] = useState([]);
// //   const [deletedTasks, setDeletedTasks] = useState([]);
// //   const [inputValue, setInputValue] = useState('');
// //   const [activeTab, setActiveTab] = useState('active');

// //   const handleInputChange = (event) => {
// //     setInputValue(event.target.value);
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     if (inputValue.trim()) {
// //       setTasks([...tasks, { text: inputValue, completed: false, id: uuidv4() }]);
// //       setInputValue('');
// //     }
// //   };

// //   const handleComplete = (id) => {
// //     const task = tasks.find((task) => task.id === id);
// //     if (task) {
// //       const newTasks = tasks.filter((task) => task.id !== id);
// //       task.completed = !task.completed;
// //       if (task.completed) {
// //         setCompletedTasks([...completedTasks, task]);
// //       } else {
// //         setTasks([...newTasks, task]);
// //         setCompletedTasks(completedTasks.filter((t) => t !== task));
// //       }
// //     } else {
// //       const completedTask = completedTasks.find((task) => task.id === id);
// //       if (completedTask) {
// //         const newCompletedTasks = completedTasks.filter((task) => task.id !== id);
// //         completedTask.completed = !completedTask.completed;
// //         if (completedTask.completed) {
// //           setCompletedTasks([...newCompletedTasks, completedTask]);
// //         } else {
// //           setTasks([...tasks, completedTask]);
// //           setCompletedTasks(newCompletedTasks);
// //         }
// //       }
// //     }
// //   };

// //   const handleDelete = (id) => {
// //     const task = tasks.find((task) => task.id === id);
// //     if (task) {
// //       const updatedTasks = tasks.filter((task) => task.id !== id);
// //       setTasks(updatedTasks);
// //       setDeletedTasks([...deletedTasks, task]);
// //     } else {
// //       const completedTask = completedTasks.find((task) => task.id === id);
// //       if (completedTask) {
// //         const updatedCompletedTasks = completedTasks.filter((task) => task.id !== id);
// //         setCompletedTasks(updatedCompletedTasks);
// //         setDeletedTasks([...deletedTasks, completedTask]);
// //       }
// //     }
// //   };

// //   const handleRestore = (id) => {
// //     const restoredTask = deletedTasks.find((task) => task.id === id);
// //     if (restoredTask) {
// //       const updatedDeletedTasks = deletedTasks.filter((task) => task.id !== id);
// //       setDeletedTasks(updatedDeletedTasks);
// //       setTasks([...tasks, restoredTask]);
// //     }
// //   };

// //   const handleTabChange = (tab) => {
// //     setActiveTab(tab);
// //   };

// //   const filteredTasks = activeTab === 'To Do'
// //     ? tasks
// //     : activeTab === 'Done'
// //       ? completedTasks
// //       : deletedTasks;

// //   return (
// //     <div>
// //       <form onSubmit={handleSubmit}>
// //         <input type="text" value={inputValue} onChange={handleInputChange} />
// //         <button type="submit">Add Task</button>
// //       </form>

// //       <div>
// //         <button onClick={() => handleTabChange('To Do')}>To Do</button>
// //         <button onClick={() => handleTabChange('Done')}>Done</button>
// //         <button onClick={() => handleTabChange('Trash')}>Trash</button>
// //       </div>
// //       <ul>
// //         {filteredTasks.map((task) => (
// //           <li key={task.id}>
// //             <span
// //               style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
// //               onClick={() => handleComplete(task.id)}
// //             >
// //               {task.text}
// //             </span>
// //             {activeTab === 'Trash' && (
// //               <button onClick={() => handleRestore(task.id)}>Restore</button>
// //             )}
// //             {activeTab !== 'Trash' && (
// //               <button onClick={() => handleDelete(task.id)}>Delete</button>
// //             )}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default TodoList;


// // import React, { useState } from 'react';
// // import { v4 as uuidv4 } from 'uuid';

// // function TodoList() {
// //   const [tasks, setTasks] = useState([]);
// //   const [completedTasks, setCompletedTasks] = useState([]);
// //   const [deletedTasks, setDeletedTasks] = useState([]);
// //   const [inputValue, setInputValue] = useState('');
// //   const [activeTab, setActiveTab] = useState('active');

// //   const handleInputChange = (event) => {
// //     setInputValue(event.target.value);
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     if (inputValue.trim()) {
// //       setTasks([...tasks, { text: inputValue, completed: false, id: uuidv4() }]);
// //       setInputValue('');
// //     }
// //   };

// //   const handleComplete = (id) => {
// //     const task = tasks.find((task) => task.id === id);
// //     if (task) {
// //       const newTasks = tasks.filter((task) => task.id !== id);
// //       task.completed = !task.completed;
// //       if (task.completed) {
// //         setCompletedTasks([...completedTasks, task]);
// //       } else {
// //         setTasks([...newTasks, task]);
// //         setCompletedTasks(completedTasks.filter((t) => t !== task));
// //       }
// //     } else {
// //       const completedTask = completedTasks.find((task) => task.id === id);
// //       if (completedTask) {
// //         const newCompletedTasks = completedTasks.filter((task) => task.id !== id);
// //         completedTask.completed = !completedTask.completed;
// //         if (completedTask.completed) {
// //           setCompletedTasks([...newCompletedTasks, completedTask]);
// //         } else {
// //           setTasks([...tasks, completedTask]);
// //           setCompletedTasks(newCompletedTasks);
// //         }
// //       }
// //     }
// //   };

// //   const handleDelete = (id) => {
// //     const task = tasks.find((task) => task.id === id);
// //     if (task) {
// //       const updatedTasks = tasks.filter((task) => task.id !== id);
// //       setTasks(updatedTasks);
// //       setDeletedTasks([...deletedTasks, task]);
// //     } else {
// //       const completedTask = completedTasks.find((task) => task.id === id);
// //       if (completedTask) {
// //         const updatedCompletedTasks = completedTasks.filter((task) => task.id !== id);
// //         setCompletedTasks(updatedCompletedTasks);
// //         setDeletedTasks([...deletedTasks, completedTask]);
// //       }
// //     }
// //   };

// //   const handleRestore = (id) => {
// //     const restoredTask = deletedTasks.find((task) => task.id === id);
// //     if (restoredTask) {
// //       const updatedDeletedTasks = deletedTasks.filter((task) => task.id !== id);
// //       setDeletedTasks(updatedDeletedTasks);
// //       setTasks([...tasks, restoredTask]);
// //     }
// //   };

// //   const handleTabChange = (tab) => {
// //     setActiveTab(tab);
// //   };

// //   const filteredTasks = activeTab === 'To Do'
// //     ? tasks
// //     : activeTab === 'Done'
// //       ? completedTasks
// //       : deletedTasks;

// //   return (
// //     <div>
// //       <form onSubmit={handleSubmit}>
// //         <input type="text" value={inputValue} onChange={handleInputChange} />
// //         <button type="submit">Add Task</button>
// //       </form>

// //       <div>
// //         <h3>Task List</h3>
// //         <button onClick={() => handleTabChange('To Do')} title="To Do">To Do</button>
// //         <button onClick={() => handleTabChange('Done')} title="Done">Done</button>
// //         <button onClick={() => handleTabChange('Trash')} title="Trash">Trash</button>
// //       </div>

// //       {filteredTasks.length > 0 ? (
// //         <ul>
// //           {filteredTasks.map((task) => (
// //             <li key={task.id}>
// //               <span
// //                 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
// //                 onClick={() => handleComplete(task.id)}
// //               >
// //                 {task.text}
// //               </span>
// //               {activeTab === 'Trash' ? (
// //                 <button onClick={() => handleRestore(task.id)}>Restore</button>
// //               ) : (
// //                 <button onClick={() => handleDelete(task.id)}>Delete</button>
// //               )}
// //             </li>
// //           ))}
// //         </ul>
// //       ) : (
// //         <p>No tasks to show.</p>
// //       )}

// //       <div>
// //         <h3>Completed Tasks</h3>
// //         {completedTasks.length > 0 ? (
// //           <ul>
// //             {completedTasks.map((task) => (
// //               <li key={task.id}>
// //                 <span
// //                   style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
// //                   onClick={() => handleComplete(task.id)}
// //                 >
// //                   {task.text}
// //                 </span>
// //                 <button onClick={() => handleDelete(task.id)}>Delete</button>
// //               </li>
// //             ))}
// //           </ul>
// //         ) : (
// //           <p>No completed tasks to show.</p>
// //         )}
// //       </div>

// //       <div>
// //         <h3>Deleted Tasks</h3>
// //         {deletedTasks.length > 0 ? (
// //           <ul>
// //             {deletedTasks.map((task) => (
// //               <li key={task.id}>
// //                 <span>{task.text}</span>
// //                 <button onClick={() => handleRestore(task.id)}>Restore</button>
// //               </li>
// //             ))}
// //           </ul>
// //         ) : (
// //           <p>No deleted tasks to show.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default TodoList;

// // import React, { useState } from 'react';
// // import { v4 as uuidv4 } from 'uuid';

// // function TodoList() {
// //   const [tasks, setTasks] = useState([]);
// //   const [completedTasks, setCompletedTasks] = useState([]);
// //   const [deletedTasks, setDeletedTasks] = useState([]);
// //   const [inputValue, setInputValue] = useState('');
// //   const [activeTab, setActiveTab] = useState('active');

// //   const handleInputChange = (event) => {
// //     setInputValue(event.target.value);
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     if (inputValue.trim()) {
// //       setTasks([...tasks, { text: inputValue, completed: false, id: uuidv4() }]);
// //       setInputValue('');
// //     }
// //   };

// //   const handleComplete = (id) => {
// //     const taskIndex = tasks.findIndex((task) => task.id === id);
// //     if (taskIndex !== -1) {
// //       const task = tasks[taskIndex];
// //       task.completed = !task.completed;
// //       setTasks([...tasks.slice(0, taskIndex), task, ...tasks.slice(taskIndex + 1)]);
// //       if (task.completed) {
// //         setCompletedTasks([...completedTasks, task]);
// //       } else {
// //         setCompletedTasks(completedTasks.filter((t) => t !== task));
// //       }
// //     } else {
// //       const completedTaskIndex = completedTasks.findIndex((task) => task.id === id);
// //       if (completedTaskIndex !== -1) {
// //         const completedTask = completedTasks[completedTaskIndex];
// //         completedTask.completed = !completedTask.completed;
// //         setCompletedTasks([
// //           ...completedTasks.slice(0, completedTaskIndex),
// //           completedTask,
// //           ...completedTasks.slice(completedTaskIndex + 1),
// //         ]);
// //         setTasks([...tasks, completedTask]);
// //       }
// //     }
// //   };

// //   const handleDelete = (id) => {
// //     const taskIndex = tasks.findIndex((task) => task.id === id);
// //     if (taskIndex !== -1) {
// //       const task = tasks[taskIndex];
// //       setTasks([...tasks.slice(0, taskIndex), ...tasks.slice(taskIndex + 1)]);
// //       setDeletedTasks([...deletedTasks, task]);
// //     } else {
// //       const completedTaskIndex = completedTasks.findIndex((task) => task.id === id);
// //       if (completedTaskIndex !== -1) {
// //         const completedTask = completedTasks[completedTaskIndex];
// //         setCompletedTasks([
// //           ...completedTasks.slice(0, completedTaskIndex),
// //           ...completedTasks.slice(completedTaskIndex + 1),
// //         ]);
// //         setDeletedTasks([...deletedTasks, completedTask]);
// //       }
// //     }
// //   };

// //   const handleRestore = (id) => {
// //     const restoredTask = deletedTasks.find((task) => task.id === id);
// //     if (restoredTask) {
// //       setDeletedTasks(deletedTasks.filter((task) => task.id !== id));
// //       setTasks([...tasks, { ...restoredTask, completed: false }]);
// //     }
 
// //   };

// //   const filteredTasks = activeTab === 'completed' ? completedTasks : tasks.filter((task) => !task.completed);
  
// //   return (
// //   <div>
// //   <form onSubmit={handleSubmit}>
// //   <input type="text" value={inputValue} onChange={handleInputChange} />
// //   <button type="submit">Add Task</button>
// //   </form>
// //   <div>
// //   <button onClick={() => setActiveTab('active')}>Active</button>
// //   <button onClick={() => setActiveTab('completed')}>Completed</button>
// //   </div>
// //   <ul>
// //   {filteredTasks.map((task) => (
// //   <li key={task.id}>
// //   <input type="checkbox" checked={task.completed} onChange={() => handleComplete(task.id)} />
// //   <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
// //   <button onClick={() => handleDelete(task.id)}>Delete</button>
// //   </li>
// //   ))}
// //   </ul>
// //   <div>
// //   <h2>Deleted Tasks:</h2>
// //   <ul>
// //   {deletedTasks.map((task) => (
// //   <li key={task.id}>
// //   <span>{task.text}</span>
// //   <button onClick={() => handleRestore(task.id)}>Restore</button>
// //   </li>
// //   ))}
// //   </ul>
// //   </div>
// //   </div>
// //   );
// //   }
  
// //   export default TodoList;



// // import React, { useState } from 'react';
// // import { v4 as uuidv4 } from 'uuid';

// // function TodoList() {
// //   const [tasks, setTasks] = useState([]);
// //   const [completedTasks, setCompletedTasks] = useState([]);
// //   const [deletedTasks, setDeletedTasks] = useState([]);
// //   const [inputValue, setInputValue] = useState('');
// //   const [activeTab, setActiveTab] = useState('active');

// //   const handleInputChange = (event) => {
// //     setInputValue(event.target.value);
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     if (inputValue.trim()) {
// //       setTasks([...tasks, { text: inputValue, completed: false, id: uuidv4() }]);
// //       setInputValue('');
// //     }
// //   };

// //   const handleComplete = (id) => {
// //     const taskIndex = tasks.findIndex((task) => task.id === id);
// //     if (taskIndex !== -1) {
// //       const task = tasks[taskIndex];
// //       task.completed = !task.completed;
// //       setTasks([...tasks.slice(0, taskIndex), task, ...tasks.slice(taskIndex + 1)]);
// //       if (task.completed) {
// //         setCompletedTasks([...completedTasks, task]);
// //       } else {
// //         setCompletedTasks(completedTasks.filter((t) => t !== task));
// //       }
// //     } else {
// //       const completedTaskIndex = completedTasks.findIndex((task) => task.id === id);
// //       if (completedTaskIndex !== -1) {
// //         const completedTask = completedTasks[completedTaskIndex];
// //         completedTask.completed = !completedTask.completed;
// //         setCompletedTasks([
// //           ...completedTasks.slice(0, completedTaskIndex),
// //           completedTask,
// //           ...completedTasks.slice(completedTaskIndex + 1),
// //         ]);
// //         setTasks([...tasks, completedTask]);
// //       }
// //     }
// //   };

// //   const handleDelete = (id) => {
// //     const taskIndex = tasks.findIndex((task) => task.id === id);
// //     if (taskIndex !== -1) {
// //       const task = tasks[taskIndex];
// //       setTasks([...tasks.slice(0, taskIndex), ...tasks.slice(taskIndex + 1)]);
// //       setDeletedTasks([...deletedTasks, task]);
// //     } else {
// //       const completedTaskIndex = completedTasks.findIndex((task) => task.id === id);
// //       if (completedTaskIndex !== -1) {
// //         const completedTask = completedTasks[completedTaskIndex];
// //         setCompletedTasks([
// //           ...completedTasks.slice(0, completedTaskIndex),
// //           ...completedTasks.slice(completedTaskIndex + 1),
// //         ]);
// //         setDeletedTasks([...deletedTasks, completedTask]);
// //       }
// //     }
// //   };

// //   const handleRestore = (id) => {
// //     const restoredTask = deletedTasks.find((task) => task.id === id);
// //     if (restoredTask) {
// //       setDeletedTasks(deletedTasks.filter((task) => task.id !== id));
// //       setTasks([...tasks, { ...restoredTask, completed: false }]);
// //     }
// //   };

// //   const filteredTasks =
 
// //     activeTab === 'completed'
// //     ? completedTasks 
// //     : activeTab === 'deleted'
// //     ? deletedTasks
// //     : tasks.filter((task) => !task.completed);
// //       return (
// //         <div>
// //         <form onSubmit={handleSubmit}>
// //         <input type="text" value={inputValue} onChange={handleInputChange} />
// //         <button type="submit">Add Task</button>
// //         </form>
// //         <div>
// //         <button onClick={() => setActiveTab('active')}>Active</button>
// //         <button onClick={() => setActiveTab('completed')}>Completed</button>
// //         <button onClick={() => setActiveTab('deleted')}>Deleted</button>
// //         </div>
// //         {filteredTasks.map((task) => (
// //         <div key={task.id}>
// //         <input type="checkbox" checked={task.completed} onChange={() => handleComplete(task.id)} />
// //         <span>{task.text}</span>
// //         {activeTab === 'deleted' ? (
// //         <button onClick={() => handleRestore(task.id)}>Restore</button>
// //         ) : (
// //         <button onClick={() => handleDelete(task.id)}>Delete</button>
// //         )}
// //         </div>
// //         ))}
// //         </div>
// //         );
// //         }
        
        

// import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

// function ToDoList(){
//   const [showModal, setShowModal] = useState(false);
//   const [newTodo, setNewTodo] = useState("");
//   const [todoList, setTodoList] = useState([]);
//   const [doneList, setDoneList] = useState([]);

//   const handleAddTodo = () => {
//     if (newTodo !== "") {
//       setTodoList([...todoList, { id: uuidv4(), text: newTodo, completed: false }]);
//       setShowModal(false);
//       setNewTodo("");
//     }
//   };

//   const handleDoneTodo = (id) => {
//     const doneTodo = todoList.find((todo) => todo.id === id);
//     const newTodoList = todoList.filter((todo) => todo.id !== id);
//     setTodoList(newTodoList);
//     setDoneList([...doneList, doneTodo]);
//   };

//   const handleUndoTodo = (id) => {
//     const undoneTodo = doneList.find((todo) => todo.id === id);
//     const newDoneList = doneList.filter((todo) => todo.id !== id);
//     setDoneList(newDoneList);
//     setTodoList([...todoList, { ...undoneTodo, completed: false }]);
//   };

//   const handleCheckboxToggle = (id) => {
//     const todoIndex = todoList.findIndex((todo) => todo.id === id);
//     const doneTodo = todoList[todoIndex];
//     const newTodoList = [...todoList];
//     newTodoList[todoIndex] = { ...doneTodo, completed: !doneTodo.completed };
//     setTodoList(newTodoList);
//     if (doneTodo.completed) {
//       setDoneList([...doneList, doneTodo]);
//     } else {
//       const newDoneList = doneList.filter((todo) => todo.id !== id);
//       setDoneList(newDoneList);
//     }
//   };
//   return (
//     <div>
//       <div className='btns_and_modalbtn'>
//         <div className='btns'>
//         <button onClick={() => setStatus('toDo')} className={status === 'toDo' ? 'active' : ''}>To Do</button>
//       <button onClick={() => setStatus('done')} className={status === 'done' ? 'active' : ''}>Done</button>
//       <button onClick={() => setStatus('trash')} className={status === 'trash' ? 'active' : ''}>Trash</button>
//           <p>Status: {status}</p>
//         </div>
//         <div className='modalbtn'>
//         <button onClick={toggleModal}>{modalOpen ? 'x' : '+'} </button>
//         {modalOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={toggleModal}>
//               &times;
//             </span>
//             <form onSubmit={handleNewItemSubmit}>
//               <input
//                 type="text"
//                 placeholder="Enter new item"
//                 value={newItemText}
//                 onChange={(event) => setNewItemText(event.target.value)}
//               />
//               <button type="submit">Add</button>
//             </form>
//           </div>
//         </div>
//       )}

//         </div>
      
      

//       </div>
//       <div></div>
//       <div className='list'>
//       {status === 'toDo' && (
//         <ul>
//           {toDoList.map((item, index) => (
//             <li key={index} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
//               <input type="checkbox" checked={item.completed} onChange={(event) => handleCheck(event, index)} />
//               {item.text}
//             </li>
//           ))}
//         </ul>
//       )}



// // import React, { useState } from 'react';

// // function ToDoList() {
// //   const [status, setStatus] = useState('toDo');
// //   const [modalOpen, setModalOpen] = useState(false);
// //   const [newItemText, setNewItemText] = useState('');
// //   const [toDoList, setToDoList] = useState([]);
// //   const [doneList, setDoneList] = useState([]);

// //   const toggleModal = () => {
// //     setModalOpen(!modalOpen);
// //   };

// //   const handleNewItemSubmit = (event) => {
// //     event.preventDefault();
// //     setToDoList([...toDoList, { text: newItemText, completed: false }]);
// //     setNewItemText('');
// //     toggleModal();
// //   };

// //   const handleToDoClick = (event) => {
// //     console.log(`Button clicked: ${event.target.innerText}`);
// //   };

// //   const handleCheck = (event, index) => {
// //     const newList = [...toDoList];
// //     const completedItem = newList.splice(index, 1)[0];
// //     completedItem.completed = event.target.checked;
// //     setDoneList([...doneList, completedItem]);
// //     setToDoList(newList);
// //   };

// //   return (
// //     <div>
// //       <button onClick={() => setStatus('toDo')} className={status === 'toDo' ? 'active' : ''} onClick={handleToDoClick}>To Do</button>
// //       <button onClick={() => setStatus('done')} className={status === 'done' ? 'active' : ''}>Done</button>
// //       <button onClick={() => setStatus('trash')} className={status === 'trash' ? 'active' : ''}>Trash</button>
// //       <button onClick={toggleModal}>{modalOpen ? 'x' : '+'} Add Item</button>
// //       <p>Status: {status}</p>

// //       {modalOpen && (
// //         <div className="modal">
// //           <div className="modal-content">
// //             <span className="close" onClick={toggleModal}>
// //               &times;
// //             </span>
// //             <form onSubmit={handleNewItemSubmit}>
// //               <input
// //                 type="text"
// //                 placeholder="Enter new item"
// //                 value={newItemText}
// //                 onChange={(event) => setNewItemText(event.target.value)}
// //               />
// //               <button type="submit">Add</button>
// //             </form>
// //           </div>
// //         </div>
// //       )}

// //       {status === 'toDo' && (
// //         <ul>
// //           {toDoList.map((item, index) => (
// //             <li key={index} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
// //               <input type="checkbox" checked={item.completed} onChange={(event) => handleCheck(event, index)} />
// //               {item.text}
// //             </li>
// //           ))}
// //         </ul>
// //       )}

// //       {status === 'done' && (
// //         <ul>
// //           {doneList.map((item, index) => (
// //             <li key={index} style={{ textDecoration: 'line-through' }}>
// //               {item.text}
// //             </li>
// //           ))}
// //         </ul>
// //       )}

// //       <p>
// //         Current state of To Do List:
// //         {JSON.stringify(toDoList)}
// //       </p>

// //       <p>
// //         Current state of Done List:
// //         {JSON.stringify(doneList)}
// //       </p>
// //     </div>
// //   );
// // }


// // export default ToDoList

// //       {status === 'done' && (
// //         <ul>
// //           {doneList.map((item, index) => (
// //             <li key={index} style={{ textDecoration: 'line-through' }}>
// //                <input type="checkbox" checked={item.completed} onChange={(event) => handleCheck(event, index)} />
// //               {item.text}
// //             </li>
// //           ))}
// //         </ul>
// //       )}
      

      
// //       </div>
      
// //     </div>
// //   );
// // }

// // 


// // import { useState } from "react";
// // import { v4 as uuidv4 } from "uuid";

// // function ToDoList() {
// //   const [showModal, setShowModal] = useState(false);
// //   const [newTodo, setNewTodo] = useState("");
// //   const [todoList, setTodoList] = useState([]);
// //   const [doneList, setDoneList] = useState([]);
// //   const [status, setStatus] = useState("toDo");

// //   const handleAddTodo = () => {
// //     if (newTodo !== "") {
// //       const newTodoItem = {
// //         id: uuidv4(),
// //         text: newTodo,
// //         completed: false,
// //       };
// //       setTodoList([...todoList, newTodoItem]);
// //       setShowModal(false);
// //       setNewTodo("");
// //     }
// //   };

// //   const handleDoneTodo = (index) => {
// //     const doneTodo = todoList[index];
// //     setTodoList(todoList.filter((_, i) => i !== index));
// //     setDoneList([...doneList, doneTodo]);
// //   };

// //   const handleUndoTodo = (index) => {
// //     const undoneTodo = doneList[index];
// //     setDoneList(doneList.filter((_, i) => i !== index));
// //     setTodoList([...todoList, undoneTodo]);
// //   };

// //   const handleCheckboxToggle = (id) => {
// //     const updatedTodoList = todoList.map((todo) =>
// //       todo.id === id ? { ...todo, completed: !todo.completed } : todo
// //     );
// //     setTodoList(updatedTodoList);
// //   };

// //   return (
// //     <div>
// //       <div className="btns_and_modalbtn">
// //         <div className="btns">
// //           <button
// //             onClick={() => setStatus("toDo")}
// //             className={status === "toDo" ? "active" : ""}
// //           >
// //             To Do
// //           </button>
// //           <button
// //             onClick={() => setStatus("done")}
// //             className={status === "done" ? "active" : ""}
// //           >
// //             Done
// //           </button>
// //           <button
// //             onClick={() => setStatus("trash")}
// //             className={status === "trash" ? "active" : ""}
// //           >
// //             Trash
// //           </button>
// //           <p>Status: {status}</p>
// //         </div>
// //         <div className="modalbtn">
// //           <button onClick={() => setShowModal(!showModal)}>
// //             {showModal ? "x" : "+"}
// //           </button>
// //           {showModal && (
// //             <div className="modal">
// //               <div className="modal-content">
// //                 <span className="close" onClick={() => setShowModal(false)}>
// //                   ×
// //                 </span>
// //                 <input
// //                   type="text"
// //                   placeholder="Enter new item"
// //                   value={newTodo}
// //                   onChange={(event) => setNewTodo(event.target.value)}
// //                 />
// //                 <button type="button" onClick={handleAddTodo}>
// //                   Add
// //                 </button>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //       <div></div>
// //       <div className="list">
// //         {status === "toDo" && (
// //           <ul>
// //             {todoList.map((item) => (
              
// //                     <li
// //                       key={item.id}
// //                       style={{
// //                         textDecoration: item.completed ? "line-through" : "none",
// //                         display: "flex",
// //                         alignItems: "center",
// //                       }}
// //                     >
// //                       <label>
// //                         <input
// //                           type="checkbox"
// //                           checked={item.completed}
// //                           onChange={() => handleCheckboxToggle(item.id)}
// //                         />
// //                         <span style={{ marginLeft: "10px" }}>{item.text}</span>
// //                       </label>
// //                       <button onClick={() => handleDoneTodo(todoList.indexOf(item))}>
// //                         Done
// //                       </button>
// //                     </li>
// //                   ))}
// //                  </ul>
// //         )}
// //         </div>
        
// //         </div>
// // )}
//         // export default ToDoList
        


// // function ToDoList() {
// //   const [tasks, setTasks] = useState([]);
// //   const [inputValue, setInputValue] = useState('');
// //   const [activeView, setActiveView] = useState('active');

// //   const handleInputChange = (event) => {
// //     setInputValue(event.target.value);
// //   };

// //   const handleAddTask = () => {
// //     if (inputValue) {
// //       const newTask = {
// //         label: inputValue,
// //         checked: false,
// //         deleted: false,
// //       };
// //       setTasks([...tasks, newTask]);
// //       setInputValue('');
// //     }
// //   };

// //   const handleCompleteTask = (index) => {
// //     const updatedTasks = [...tasks];
// //     updatedTasks[index].checked = true;
// //     setTasks(updatedTasks);
// //   };

// //   const handleDeleteTask = (index) => {
// //     const updatedTasks = [...tasks];
// //     updatedTasks[index].deleted = true;
// //     setTasks(updatedTasks);
// //   };

// //   const handleDeletePermanently = (index) => {
// //     const updatedTasks = [...tasks];
// //     updatedTasks.splice(index, 1);
// //     setTasks(updatedTasks);
// //   };

// //   const handleTaskCheck = (index) => {
// //     const updatedTasks = [...tasks];
// //     if (updatedTasks[index].checked) {
// //       updatedTasks[index].checked = false;
// //       setTasks(updatedTasks);
// //     } else if (activeView === 'active') {
// //       handleCompleteTask(index);
// //     } else if (activeView === 'completed') {
// //       updatedTasks[index].checked = false;
// //       setTasks(updatedTasks);
// //     }
// //   };

// //   const handleActiveView = (view) => {
// //     setActiveView(view);
// //   };

// //   const tasksToRender = tasks.filter((task) => {
// //     if (activeView === 'active') {
// //       return !task.checked && !task.deleted;
// //     } else if (activeView === 'completed') {
// //       return task.checked && !task.deleted;
// //     } else {
// //       return task.deleted;
// //     }
// //   });

// //   const getTaskClassName = (task) => {
// //     let className = '';
// //     if (task.checked) {
// //       className += ' checked';
// //     }
// //     return className;
// //   };

// //   return (
// //     <div>
// //       <h1>ToDo List</h1>
// //       <div>
// //         <input type="text" value={inputValue} onChange={handleInputChange} />
// //         <button onClick={handleAddTask}>Add Task</button>
// //       </div>
// //       <div>
// //         <button onClick={() => handleActiveView('active')}>Active</button>
// //         <button onClick={() => handleActiveView('completed')}>Completed</button>
// //         <button onClick={() => handleActiveView('deleted')}>Deleted</button>
// //       </div>
// //       <ul>
// //         {tasksToRender.map((task, index) => (
// //           <li key={index} className={getTaskClassName(task)}>
// //             <input type="checkbox" checked={task.checked} onChange={() => handleTaskCheck(index)} />
// //             <span>{task.label}</span>
// //             {activeView === 'active' && (
// //               <div>
// //                 <button onClick={() => handleCompleteTask(index)}>Complete</button>
// //                 <button onClick={() => handleDeleteTask(index)}>Delete</button>
// //               </div>
// //             )}
// //             {activeView === 'deleted' && (
// //               <div>
// //                 <button onClick={() => handleDeletePermanently(index)}>Delete Permanently</button>
// //                 <button onClick={() => handleCompleteTask(index)}>Restore</button>
// //               </div>
// //             )}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }
// //   export default ToDoList;
  