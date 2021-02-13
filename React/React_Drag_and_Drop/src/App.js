import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';

const finalProducts = [
  {
    id: '1',
    name: 'картофель',
    groupId: 21,
    groupName: 'овощи и фрукты',
    thumb: '/images/p1.jpg'
  },
  {
    id: '2',
    name: 'помидоры',
    groupId: 21,
    groupName: 'овощи и фрукты',
    thumb: '/images/p1.jpg'
  },
  {
    id: '3',
    name: 'клубника',
    groupId: 21,
    groupName: 'овощи и фрукты',
    thumb: '/images/p2.jpg'
  },
  {
    id: '4',
    name: 'шоколад',
    groupId: 8,
    groupName: 'кондитерские изделия',
    thumb: '/images/p3.jpg'
  },
  {
    id: '5',
    name: 'томаты',
    groupId: 21,
    groupName: 'овощи и фрукты',
    thumb: '/images/p4.jpg'
  }
]

const App = () => {
  const [products, setProducts] = useState(finalProducts);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(products);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setProducts(items);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Final products</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="products">
            {(provided) => (
              <ul className="products" {...provided.droppableProps} ref={provided.innerRef}>
                {products.map(({id, name, thumb}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <div className="products-thumb">
                            <img src={thumb} alt={`${name} Thumb`} />
                          </div>
                          <p>
                            { name }
                          </p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
}
export default App;