import {startProducts} from './data'
import {startGroups} from './data'

const getItems = (id) => {
  const arr = startProducts.filter(el => el.groupId === id).map(el => {
    if (el.groupId === id) {
      return {id: `${el.id}`, name: el.name, groupId: el.groupId, groupName: el.groupName}
    }
  });
  return arr;
}

const getGroups = () => {
  const obj = {};
  startGroups.forEach((el) => {
    obj[`${el.name}`] = {id: `${el.name}`, id0: el.id, name: el.name, img: el.img, items: getItems(el.id)} 
  })
  return obj;
}

const initial = {
  columns: getGroups(),                            
  columnOrder: startGroups.map(el => el.name)      // ["column-0", "column-1"]
};

export default function getInitialData() {
  return initial;
}