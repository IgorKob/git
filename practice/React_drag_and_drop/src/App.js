import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import getInitialData from "./components/get-initial-data";
import { reorderList } from "./components/reorder";
import './App.css';
import Column from './components/Column';

function App() {
  const [state, setState] = useState(() => getInitialData());
  // debugger
  // const myArray = Object.values(state.columns).map(el => el.items).flat();
  // const myArray2 = myArray.map(el => ({id: Number(el.id), name: el.name, groupId: el.groupId, groupName: el.groupName}));
  // const myArray3 = myArray2.sort((a, b) => a.id - b.id);
  // console.log(myArray3);

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.type === "column") {
      const columnOrder = reorderList(
        state.columnOrder,
        result.source.index,
        result.destination.index
      );
      setState({
        ...state,
        columnOrder
      });
      return;
    }

    if (result.source.droppableId === result.destination.droppableId) {
      const column = state.columns[result.source.droppableId];
      const items = reorderList(
        column.items,
        result.source.index,
        // result.destination.index
        0                            // kim order 0
      );

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [column.id]: {
            ...column,
            items
          }
        }
      };
      setState(newState);
      return;
    }

    // moving between lists
    const sourceColumn = state.columns[result.source.droppableId];
    const destinationColumn = state.columns[result.destination.droppableId];
    const item = sourceColumn.items[result.source.index];

    // kim
    item.groupId = destinationColumn.id0;     // kim rename
    item.groupName = destinationColumn.id;    // kim rename

    // 1. remove item from source column
    const newSourceColumn = {
      ...sourceColumn,
      items: [...sourceColumn.items]
    };
    newSourceColumn.items.splice(result.source.index, 1);

    // 2. insert into destination column
    const newDestinationColumn = {
      ...destinationColumn,
      items: [...destinationColumn.items]
    };
    // in line modification of items
    // newDestinationColumn.items.splice(result.destination.index, 0, item);
    newDestinationColumn.items.splice(0, 0, item);   // kim order 0

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newSourceColumn.id]: newSourceColumn,
        [newDestinationColumn.id]: newDestinationColumn
      }
    };

    setState(newState);
  }

  // kim2 vibro
  const onDragStart = () => {
    if (window.navigator.vibrate) {
      window.navigator.vibrate(100);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart} >
      <div className="app">
        <Droppable
          droppableId="all-droppables"
          // direction="horizontal"
          // direction="vertical"

          type="column"
        >
          {provided => (
            <div
              className="columns"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {state.columnOrder.map((columnId, index) => (
                <Column
                  key={columnId}
                  column={state.columns[columnId]}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}
export default App;