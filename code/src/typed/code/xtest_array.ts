

type remove = (word: string) => (list: string[]) => string[];
const remove: remove =
    word => list =>
        list.flatMap(
            a =>
                a === word
                    ? []  // remove the target word
                    : [a] // preserve the exisiting word
        );

const list1 = ["apple", "orange", "banana"];
const list2 = remove("orange")(list1);

console.log(list1); // [ 'apple', 'orange', 'banana' ]
console.log(list2); // [ 'apple', 'banana' ]