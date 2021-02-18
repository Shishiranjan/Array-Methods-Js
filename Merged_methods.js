//Here actually, we gonna see that we can be able to merge more than one method of array at the same time
//all in one go.
//Here our task is to convert a given sentemce into capitalizing format where we have some exceptions.
//These exceptions are unchanged.

const capitalize = function (title) {
  const exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];
  const capitalizeNew = title
    .toLowerCase()
    .split(" ")
    .map((words) =>
      exceptions.includes(words)
        ? words
        : words[0].toUppercase() + words.slice(1).join(" ")
    );
  return capitalizeNew;
};

console.log(capitalize("write a paragraph about noise pollution"));
console.log(capitalize("you and me both are working in the same company"));
