// Собрать в allTopics массив всех предметов всех курсов используя flatMap.
// Используя filter выполнить фильтрацию, оставив в uniqueTopics
//  только уникальные элементы.
const courses = [
  {
    name: 'Basic HTML+CSS',
    topics: ['VSCode', 'HTML', 'CSS', 'GitHub Desktop', 'GitHub'],
  },
  {
    name: 'Intermediate HTML+CSS',
    topics: ['VSCode', 'Terminal', 'Git', 'GitHub', 'HTML', 'CSS'],
  },
  {
    name: 'Basic JavaScript',
    topics: [
      'VSCode',
      'Type system',
      'Loops',
      'Functions',
      'Conditions',
      'Classes',
      'DOM',
      'Git',
      'GitHub',
    ],
  },
  {
    name: 'Intermediate JavaScript',
    topics: [
      'VSCode',
      'NPM',
      'Bundlers',
      'Transpiling',
      'Promises',
      'AJAX',
      'Git',
      'GitHub',
    ],
  },
];

const alltopics = courses.flatMap(item => item.topics);
console.log(alltopics);
const uniqueTopics = alltopics.filter(
  (item, index, array) => array.indexOf(item) === index,
);
console.log(uniqueTopics);

const nonWords = uniqueTopics.flatMap(item => item.split(' '));
console.log(uniqueTopics.map(item => item.split(' ')));
console.log(nonWords);
