# Section A - Code Review

## Correctness

1. On initial glance, the first thing that stands out is the indentation of  the `groupAnagrams` function. This will throw an indentation mismatch error.
2. The sorted function is called to return a new sorted list but is not provided with the required/expected argument.
3. Overall the logic is good and does exactly what it is meant to do.

## Efficiency

1. The solution does not need to make use of a class as the solution is based on the groupAnagrams function.
2. Usage of a class and instantiating a new object everytime you need to class the groupAnagrams function is not efficient.
3. I think instead of `x = "".join(sorted(i))` you could have made use the built-in python functions and have it as `x = str(sorted(i))`

## Style

Based on the this [blog post](https://peps.python.org/pep-0008/), there is a certain style guide for python code:
1. Indention: Make use of 4 spaces per indentation level
2. Lists: Line up all 'rows' in a list with the first character/element.
3. Spacing: Surround functions & classes with at least 2 spaces for better readability
4. Naming conventions: There is no standard naming convention but for better consistency and readability I suggest the use of lowercase with underscores, i.e. `groupAnagrams() => group_anagrams()`

## Documentation

1. The function name 'groupAnagrams' specifies exactly what the logic 'inside' of it is achieving which is grouping anagrams.
2. Dictionary variable 'result' could do with a more straightforward name like 'grouped_anagrams'
3. The variables in the loop could do with better naming; `i='string'` and `x='sorted_string'`. It will make for better code readability and maintainability 