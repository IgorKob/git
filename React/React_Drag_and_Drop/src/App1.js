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

const finalProducts2 = [
  {
    id: '6',
    name: 'картофель',
    groupId: 21,
    groupName: 'овощи и фрукты',
    thumb: '/images/p1.jpg'
  },
  {
    id: '7',
    name: 'помидоры',
    groupId: 21,
    groupName: 'овощи и фрукты',
    thumb: '/images/p1.jpg'
  },
  {
    id: '8',
    name: 'клубника',
    groupId: 21,
    groupName: 'овощи и фрукты',
    thumb: '/images/p2.jpg'
  },
  {
    id: '9',
    name: 'шоколад',
    groupId: 8,
    groupName: 'кондитерские изделия',
    thumb: '/images/p3.jpg'
  },
  {
    id: '10',
    name: 'томаты',
    groupId: 21,
    groupName: 'овощи и фрукты',
    thumb: '/images/p4.jpg'
  }
]

const App = () => {
  const [products, setProducts] = useState(finalProducts);
  const [products2, setProducts2] = useState(finalProducts2);

  function handleOnDragEnd(result) {
    debugger

    if (!result.destination) return;

    if (result.destination.droppableId === "products") {
      debugger

      if (result.source.droppableId === "products") {
        debugger
        const items = Array.from(products);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        // items.splice(0, 0, reorderedItem);
        setProducts(items);
      }

      if (result.source.droppableId === "products2") {
        debugger
        const items2 = Array.from(products2);
        const [reorderedItem2] = items2.splice(result.source.index, 1);
        const items = Array.from(products);
        items.splice(result.destination.index, 0, reorderedItem2);
        setProducts(items);
        setProducts2(items2);
      }
    }

    if (result.destination.droppableId === "products2") {
      debugger

      if (result.source.droppableId === "products") {
        debugger
        const items = Array.from(products);
        const [reorderedItem] = items.splice(result.source.index, 1);

        const items2 = Array.from(products2);
        items2.splice(result.destination.index, 0, reorderedItem);
        setProducts(items);
        setProducts2(items2);
      }

      if (result.source.droppableId === "products2") {
        debugger
        const items2 = Array.from(products2);
        const [reorderedItem2] = items2.splice(result.source.index, 1);
        items2.splice(result.destination.index, 0, reorderedItem2);
        setProducts2(items2);
      }
    }
  }

  // const getBackgroundColor = (snapshot) => {
  //   // Giving isDraggingOver preference
  //   if (snapshot.isDraggingOver) {
  //     return 'pink';
  //   }
  
  //   // If it is the home list but not dragging over
  //   if (snapshot.draggingFromThisWith) {
  //     return 'blue';
  //   }
  
  //   // Otherwise use our default background
  //   return 'white';
  // };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Final products</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <div>1</div>
          {/* isCombineEnabled - сombine enabled */}
          {/* <Droppable droppableId="products" type='asd' isCombineEnabled> */}
          <Droppable droppableId="products" type='asd'>
            {(provided, snapshot) => (
              <ul className="products" 
                {...provided.droppableProps} 
                ref={provided.innerRef}
                style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
                // style={{
                //   backgroundColor: provided.isDragging ? 'green' : 'lightblue',
                // }}
              >
                {products.map(({id, name, thumb}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided, snapshot) => {
                        // const style = {
                        //   backgroundColor: snapshot.isDragging ? 'blue' : 'white',
                        //   fontSize: 18,
                        //   ...provided.draggableProps.style,
                        // };
                        return (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        {/* <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={style}> */}
                          <div className="products-thumb">
                            <img src={thumb} alt={`${name} Thumb`} />
                          </div>
                          <p>
                            { name }
                          </p>
                        </li>
                        )}}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>

          <div>2</div>
          
          <Droppable droppableId="products2" type='asd'>
            {(provided, snapshot) => (
              <ul className="products" 
                {...provided.droppableProps} 
                ref={provided.innerRef}
                // style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
              >
                {products2.map(({id, name, thumb}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided, snapshot) => {
                        // const style = {
                        //   backgroundColor: snapshot.isDragging ? 'blue' : 'white',
                        //   fontSize: 18,
                        //   ...provided.draggableProps.style,
                        // };
                        return (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        {/* <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={style}> */}
                          <div className="products-thumb">
                            <img src={thumb} alt={`${name} Thumb`} />
                          </div>
                          <p>
                            { name }
                          </p>
                        </li>
                        )}}
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