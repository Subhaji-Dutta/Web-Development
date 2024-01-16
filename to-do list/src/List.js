import './list.css';
function List({list,deleteItem}){
    
    return(
        <div>
            {list.map((listObj, index) => {
                return(
                    <div key={index} className="Item">
                        <div className='display'>{listObj}</div>
                        <button className='button' onClick={() => deleteItem(index)}>X</button>
                        
                    </div>
                );
            })}
        </div>
    );
}
export default List;