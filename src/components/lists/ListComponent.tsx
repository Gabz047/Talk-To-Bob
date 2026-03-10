import React, { useEffect, useState } from "react";

interface props {
  items: itemsType[];
}

interface itemsType {
  id: number | null;
  title: string;
  color: string;
  complete?: boolean;
}

export function List({ items }: props) {
    const [list, setList] = useState<itemsType[]>([]);
    const [item, setItem] = useState<itemsType>({
        id: null,
        title: '',
        color: '',
        
    })
    const [onEditingId, setOnEditingId] = useState<number>(0)

  useEffect(() => { 
    setList(items);
  }, [items]);

  function addItem() {
    const newItem = {
        ...item,
        complete: false,
        id: Date.now()
    }

    setList(prev => [...prev, newItem])

    setItem({
        id: null,
        title: '',
        color: '',
        complete: false,
    })
  }

  function removeItem(id: number | null){
    setList((prev) => prev.filter(s => s.id != id))
  }

  function editItem() {
    console.log(item)
    setList((prev) => prev.map(i => i.id === item.id ? {...i, ...item} : i))

    setItem({
        id: null,
        title: '',
        color: '',
        complete: false,
    })

    setOnEditingId(0)
  }

   function completeItem(itemData: itemsType) {
    console.log(item)
    setList([...list.map(item => ({...item, complete: item.id === itemData.id ? true : item.complete}))])

   

  }
  

  function handleEditItem(id: number | null) {
    if (id === null) return
    const itemToEdit = list.find(s => s.id == id)
    if (itemToEdit == null) return

    setOnEditingId(id)

    setItem(itemToEdit)
  }

  return (
    <div>
        <input type="text" onChange={(e) => setItem({...item, title: e.target.value})} value={item.title} />
        <input type="text" onChange={(e) => setItem({...item, color: e.target.value})} value={item.color} />
        <button onClick={() => onEditingId ? editItem() : addItem()}>{onEditingId ? 'Editar' : 'Adicionar'}</button>
      <ul>
        {list.map((listItem) => (
            <div key={listItem.id}>
          <li style={{
            backgroundColor: listItem.color,
            textDecoration: listItem.complete ? 'line-through' : 'none'
          }} ><p style={{color: 'white', mixBlendMode: 'difference'}}>{listItem.title}</p></li>
          <button onClick={() => removeItem(listItem.id)}>Remove</button>
        <button onClick={() => handleEditItem(listItem.id)}>Edit</button>
        <button onClick={() => completeItem(listItem)}>Complete</button>


          </div>
        ))}
        
      </ul>
    </div>
  );
}
