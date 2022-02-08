---
title: 'Making a calculator in React!'
date: '2 Dec, 2021'
excerpt: 'Using the useReducer hook to create a calculator with a twist.'
---

![preview](/calcusearch.png)

A calculator app made with React that also queries the Wikipedia API to display some pages relevant to the current operand.

The calculator functionalities are achieved with the useReducer hook from React. I had initially thought of using Redux as I had experience using it in the [Dev Blogs](https://www.tomaszgasek.com/posts/dev-blogs) app I previously developed.

However, this seemed like a lot of dependencies just for a calculator app, so I decided to use the built in useReducer hook which shares general functionality with Redux.

## Technologies used:

- React
- Next.js
- Tailwind CSSS

# Challenges

## Formatting numbers

Without any formatting, the numbers would come out simply as a long steam of digits, without any commas to seperate thousands and millions, etc. This is something that's present in most calculators as it helps greatly with readability.

The solution was to use [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) which formats numbers based on the languages. Using this object, I created a formatOperand function which take in an operand and returns the operand properly formatted, taking into account if it is a decimal or not.

```js
const INTEGER_FORMATTER = new Intl.NumberFormat('eng-GB', {
  maximumFractionDigits: 0,
});

export function formatOperand(operand) {
  if (!operand) return null;
  if (operand == '-') return '-';
  const [integer, decimal] = operand.split('.');
  if (!decimal) return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}
```

## Wikipedia search

I first implemented a useEffect hook that runs every time the current Operand changes and queries wikipedia for that operand. However, I quickly realised that this led to constant request being sent on every single keystroke, which is not performant at all. The app should either have a submit button for the query to be performed, or wait some time after the user stopped typing and then performed the query.

I went with the second option of creating a debounced search. I created a new piece of state called debouncedNum which is set to be the currentOperand after a second passed without the currentOperand changing. The search is then performed on that debouncedNum.

```js
const [debouncedNum, setDebouncedNum] = useState(0);

useEffect(() => {
  const queryApi = async () => {
    //...
  };

  queryApi();
}, [debouncedNum]);

useEffect(() => {
  const timeoutId = setTimeout(() => {
    setDebouncedNum(currOperand);
  }, 1000);

  return () => {
    clearTimeout(timeoutId);
  };
}, [currOperand]);
```

This meant that Wikipedia wasn't getting constantly spammed with requests every time the current operand changed.
