This is a cool directive I created, for practice, that selects random words from the parent element and changes each to have an individual, randomized hexadecimal color.

It also includes a jQuery version.

You'll note that in the for loop to select which words to colorize, I limited iterator increases to less than 5. This is so that **at least** every fifth word is colorized. We could just do any random iteration less than the total length of the string in question, but that would be boring, since chances are that the random iteration would be rather large and therefore limit the number of times our for loop occurs, which would in turn limit the number of words to be colorized.
