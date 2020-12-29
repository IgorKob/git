import React, {useState} from 'react'
import classes from "../../FindUsers/FindUser.module.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';

type PropsType = {
  totalItemsCount: number, 
  pageSize: number, 
  currentPage: number, 
  onPageChanged: (el: number) => void, 
  portionSize?: number
}

const Paginator: React.FC<PropsType> = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

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

      {portionNumber > 1 && <Button
                              variant="contained"
                              color="primary"
                              className={classes.button}
                              startIcon={<ArrowBackIosIcon />}
                              onClick={() => setPortionNumber(portionNumber - 1)}
                            >
                              Prev
                            </Button>
      }


      {pages.filter(el => el >= leftPortionPageNumber && el <= rightPortionPageNumber)
        .map(el => {
          return (
            <Button key={el} onClick={() => {onPageChanged(el)}}>
              {currentPage === el ?  (<span className={classes.selectedPage}>{el}</span>) : (<span>{el}</span>) }
            </Button>
          )
        })}


{portionNumber < portionCount && <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    endIcon={<ArrowForwardIosIcon />}
                                    onClick={() => setPortionNumber(portionNumber + 1)}
                                  >
                                    Next
                                  </Button>
}

    </div>
  )
}

export default Paginator;