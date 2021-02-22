import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { reorderList } from "./components/reorder";
import './App.css';
import Column from './components/Column';
import axios from "axios";
import Progress from './components/Progress';
import { useSnackbar } from 'notistack';
import getInitialData from "./components/get-initial-data";

function App() {
  // const [state, setState] = useState({columns: {}, columnOrder: []});
  const [state, setState] = useState(() => getInitialData());
  const [products, setProducts] = useState(null);
  const [groups, setGroups] = useState(null);
  const [newProductId, setNewProductId] = useState(null);
  const [newGroupId, setNewGroupId] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
      
  const id = (new URLSearchParams(window.location.search)).get("code");
  const apiKey = id ? `?code=${id}` : '';

  const instance = axios.create({
    baseURL: "https://helper-pepper.com/api/",
    withCredentials: false,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
  });

  useEffect(async () => {
    if (!products && !groups) {
      setIsPending(true);
      
      try {
        const responseProducts = await instance.get(`products${apiKey}`);
        
        if (responseProducts.status === 200) {
          setProducts(responseProducts.data);
        }

        const responseGroups = await instance.get(`groups${apiKey}`);

        if (responseGroups.status === 200) {
          setGroups(responseGroups.data);
        }

      } catch (error) {
        enqueueSnackbar("Can't Connect To Server!", {variant: 'error'})
      }
      setIsPending(false);
    }
  }, []);

  useEffect(() => {
    if (products && groups) {
      const getItems = (id) => {
        const arr = products.filter(el => el.groupId === id).map(el => {
          if (el.groupId === id) {
            return {id: `${el.id}`, name: el.name, groupId: el.groupId, groupName: el.groupName}
          }
        });
        return arr;
      }
      
      const getGroups = () => {
        const obj = {};
        groups.forEach((el) => {
          obj[`${el.name}`] = {id: `${el.name}`, id0: el.id, name: el.name, img: el.img, items: getItems(el.id)} 
        })
        return obj;
      }
      
      const initial = {
        columns: getGroups(),                            
        columnOrder: groups.map(el => el.name)      
      };
      
      setState(initial);
    }
  }, [products, groups]);

  useEffect(async () => {
    if (newProductId && newGroupId) {
      try {
        const response = await instance.put(`product/${newProductId}/group/${newGroupId}${apiKey}`);
        if (response.status === 200) {
          enqueueSnackbar('Update success!', {variant: 'success'})         
          setNewProductId(null);
          setNewGroupId(null);
        }
      } catch (error) {
        enqueueSnackbar('Update error!', {variant: 'error'})
      }
    }
  }, [newProductId, newGroupId]);
  
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
        0                       
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

    newDestinationColumn.items.splice(0, 0, item);   

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newSourceColumn.id]: newSourceColumn,
        [newDestinationColumn.id]: newDestinationColumn
      }
    };

    setState(newState);
    setNewProductId(item.id);
    setNewGroupId(newDestinationColumn.id0);
  }

  if (isPending) {
    return <Progress />
  }

  if (state.columnOrder.length === 0) {
    return <h1 className="fake-page">State is empty!</h1>
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="app">
        <div className="columns_wrap">
          <div>
            <Droppable
              droppableId="all-droppables1"
              type="column"
            >
              {(provided) => {
                return (
                <div
                  className="columns"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {state.columnOrder.map((columnId, index) => (<React.Fragment key={columnId}>
                    {columnId === 'разное' && (<Column
                        columnId={columnId}
                        column={state.columns[columnId]}
                        index={index}
                      />)}</React.Fragment>
                    ))}
                  {provided.placeholder}
                </div>
              )}}
            </Droppable>
          </div>
        <Droppable
          droppableId="all-droppables"
          type="column"
        >
          {(provided) => {
            return (
            <div
              className="columns"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {state.columnOrder.map((columnId, index) => (<React.Fragment key={columnId}>
                {columnId !== 'разное' && (<Column
                  column={state.columns[columnId]}
                  index={index}
                />)}</React.Fragment>
              ))}
              {provided.placeholder}
            </div>
          )}}
        </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
}
export default App;