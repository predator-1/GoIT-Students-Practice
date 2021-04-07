/**
 * Merge two list in one
 * without dublicates
 */


// Решить задачу за list1.length + list2.length O(n+k) итераций;
// Сейчас работает за list1.length*list2.length O(n`2)
const lists = document.querySelectorAll('ol');

const list1 = lists[0];
const list2 = lists[1];

for(const itemList2 of list2.querySelectorAll('li')) {
    let hasDubl = false;
    for(const itemList1 of list1.querySelectorAll('li')) {
        if(itemList2.firstElementChild.getAttribute('src') === 
            itemList1.firstElementChild.getAttribute('src')) {
                hasDubl = true;
                break;
            }
    }
    if(!hasDubl) list1.appendChild(itemList2.cloneNode(true));
}