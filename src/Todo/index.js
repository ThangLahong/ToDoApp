import {useReducer, useRef} from 'react';
import reducer, {initState} from './reducer'
import {setJob, addJob, deleteJob} from './action'

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const {job, jobs} = state;

  const inputRef = useRef();

  const handleAdd = () => {
    dispatch(addJob(job));
    dispatch(setJob(''));
    inputRef.current.focus();
  }

  return (
    <div className="App">
      <input
        ref={inputRef}
        value={job}
        onChange={e => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(deleteJob(index))}>
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
