import React, { useLayoutEffect, useRef } from "react";
import { FixedSizeList } from "react-window";
import { Droppable } from "react-beautiful-dnd";
import Item from './Item';
import Row from './Row';

const ItemListApp = React.memo(function ItemList({ column, index, open, titleWrqpRef }) {
    const listRef = useRef();

    useLayoutEffect(() => {
      const list = listRef.current;
      if (list) {
        list.scrollTo(0);
      }
    }, [index]);

    const getListStyle = (isDraggingOver) => {
      
      if (!open && isDraggingOver && titleWrqpRef.current) {
        titleWrqpRef.current.style.backgroundColor = '#bbb';
        titleWrqpRef.current.style.boxShadow = '0px 77px 0px 0px #bbb';
      }
      if (!open && !isDraggingOver && titleWrqpRef.current) {
        titleWrqpRef.current.style.backgroundColor = open ? '#f5f5f5' : '#ddd';
        titleWrqpRef.current.style.boxShadow = 'none';
      }

      return {
        transition: 'background .4s',
        background: open ? isDraggingOver ? '#bbb' : '#f5f5f5' : isDraggingOver ? '#bbb' : 'transparent',  
        width: !open && '.1%',
        left: !open && '40%',
        top: !open && '-50px',
        opacity: !open && '0',
        transition: 'opacity .4s',
      }
    };

    const  listHeight = () => {
      const sizeWindow = window.innerWidth;
      const sizeHeight = window.innerHeight;
      if (sizeWindow > 900) {
        return open ? (sizeHeight-75) : 40;
      }
      return open ? 333 : 40;
    }

    const  listHeight2 = () => {
      const sizeWindow = window.innerWidth;
      if (sizeWindow > 900) {
        return open ? 398 : 40;
      }
      return open ? 333 : 40;
    }

    return (
      <Droppable
        droppableId={column.id}
        mode="virtual"
        renderClone={(provided, snapshot, rubric) => {
          return (<Item
            provided={provided}
            isDragging={snapshot.isDragging}
            item={column.items[rubric.source.index]}
          />
        )}}
      >
        {(provided, snapshot) => {
          const itemCount = snapshot.isUsingPlaceholder
            ? column.items.length + 1
            : column.items.length;
          if (column.id === "разное") {
            return (
            <FixedSizeList
              height={listHeight()}
              itemCount={itemCount}
              itemSize={60}
              outerRef={provided.innerRef}
              itemData={column.items}
              className="task-list"
              style={getListStyle(snapshot.isDraggingOver)}
              ref={listRef}
            >
              {Row}
            </FixedSizeList>
            )
          }
          if (column.id !== "разное") {
            return (
            <FixedSizeList
              height={listHeight2()}
              itemCount={itemCount}
              itemSize={60}
              outerRef={provided.innerRef}
              itemData={column.items}
              className="task-list"
              style={getListStyle(snapshot.isDraggingOver)}
              ref={listRef}
            >
              {Row}
            </FixedSizeList>
            )
          }
        }}
      </Droppable>
    );
  });
  export default ItemListApp;