import React, {useState} from 'react'
import classes from "../../FindUsers/FindUser.module.css";

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 20}) => {

  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div>
      {portionNumber > 1 &&
        <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>
      }

      {pages.filter(el => el >= leftPortionPageNumber && el <= rightPortionPageNumber)
        .map(el => {
          return (
            <span className={currentPage === el && classes.selectedPage}
                  key={el}
                  onClick={() => {onPageChanged(el)}}

            >{el}</span>
          )
        })}

      {portionNumber < portionCount &&
      <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>
      }

    </div>
  )
}

export default Paginator;