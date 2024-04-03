import { useState } from "react";

const Body = () => {
    const [value, setValue] = useState("");
    const [Description, setDescription] = useState("");
    const [task, setTask] = useState([]);

    const clickBtn = (e) => {
        e.preventDefault()

        setTask([...task, { value, Description }]);



        setValue("")
        setDescription("")
    }

    let renderTask = <h2>No Task Availaible</h2>;

    let deleteAction = (i) =>{
        let store = [...task] ;
        store.splice( i , 1)
        setTask(store);
    }

    if (task.length > 0) {

        renderTask = task.map((t, i) => {
            return (
                <div key={i} >
                    <div className="taskCont">
                        
                        <h2>{t.value}</h2>
                        <h2>{t.Description}</h2>
                        <div>
                            <button onClick={deleteAction} className="deleteBtn">Delete</button>
                        </div>
                        
                    </div>
                    
                </div>
            )

        })
    }

    let locatStore = task;
    let localValue = localStorage.setItem("keyValue" , locatStore);
    console.log(localValue)
    return (
        <div className="bodyBg">
            <div >
            <form className="rowDiv">
                <input className="inputBox" type="text" value={value} placeholder="Enter your Task here.." onChange={(e) => {
                    setValue(e.target.value);
                }} />
                <input className="inputBox" value={Description} type="text" placeholder="Enter your Description here.." onChange={(e) => {
                    setDescription(e.target.value);
                }} />
                <div className="centerBtn">
                <button onClick={clickBtn} className="submitBtn" type="submit">Submit</button>
                </div>
                
            </form>
            </div>
           

            <div className="taskContainer">
                <ul >
                    {renderTask}
                </ul>
            </div>
        </div>
    )
}
export default Body;

// localStorage.setItem('ok',i)
// localStorage.getItem('ok')