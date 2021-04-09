/**
 * Merge two list in one
 * without dublicates
 */

// Решить задачу за list1.length + list2.length O(n+k) итераций;
// Сейчас работает за list1.length*list2.length O(n*k)
const lists = document.querySelectorAll('ol');

const list1 = lists[0];
const list2 = lists[1];

const uniquelist = new Set(); // O(1)
list1.querySelectorAll('li').forEach(el => {
  uniquelist.add(el.firstElementChild.getAttribute('src'));
});

list2.querySelectorAll('li').forEach(el => {
  if (!uniquelist.has(el.firstElementChild.getAttribute('src'))) {
    list1.appendChild(el.cloneNode(true));
  }
});

// for(const itemList2 of list2.querySelectorAll('li')) {
//     let hasDubl = false;
//     for(const itemList1 of list1.querySelectorAll('li')) {
//         if(itemList2.firstElementChild.getAttribute('src') ===
//             itemList1.firstElementChild.getAttribute('src')) {
//                 hasDubl = true;
//                 break;
//             }
//     }
//     if(!hasDubl) list1.appendChild(itemList2.cloneNode(true));
// }
