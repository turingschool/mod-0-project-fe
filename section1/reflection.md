## Section 1 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?
I think I sometimes ask questions too soon but I think that's more a problem when I'm working independently than in groups where I feel comfortable waiting a second
to see if anybody else has the same question and if they don't going "huh I wonder if there's some obvious thing I'm missing."
2. What are the data types you learned about in this section? In your own words, define each.
Strings- These are sets of characters that sometimes have some limitations but for the most part accept anything between '' or "" marks. Including numbers!
Numbers- Now numbers that aren't inside quotes are treated like, well, numbers. You can do mathematical operations on them and everything.
Booleans- These are logical statements like true or false. The computer can evaluate a statement to set something as true or you can simply set it as true or false immediately
like menUsedToLookBetterInHats = true

3. How would you log the string `"Hello World!"` to the console?
I think this is a trick question? Because you use quotes to define something as a string using them within the string can confuse things so you have to be careful and use \ to mark special characters. So in order to log this exact string you'd use
console.log('\`"Hello World!"\`')
4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?
// to mark off the rest of a line as a comment (everything after the //)
/* to mark off a section of a line */
Comments are useful for collaboration since they give collaborators a sense of what a section of code is supposed to do or what's going wrong with it.
They are also useful for communicating with your future self who has entirely forgotton why you put in this weird line of code.

5. In your own words, what is a variable? How would you explain it to a 5 year old?
A variable is a piece of information for the computer that might change. You mark it as a variable to say "this is 5 now but maybe later it'll be 7 or 3 or even a word like 'apple'"
6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?
I'm using a pomodoro app right now that probably keeps track of variables like (variable names changed to protect the innocent):
pomsCompleted which would be a number variable of my completed pomodoros that day.
pomTask which would be a string that let you specify what this pom was for broadly speaking
pomBreak another number variable keeping seperate track of what break between poms this is for the day since some pom breaks are longer than others.
You could theoretically do everything you'd do with PomBreak by performing mathematical functions on pomsCompleted but I probably wouldn't for various reasons.
7. In your own words, explain what concatenation is.
Shoving different strings and variables into the same spot to put them in one place for the user to read them together.
8. Think of a site or app you use frequently. Where do you think the developers used concatenation?
Every time I log into Twitter lately (a thing I try very hard not to do) it asks if my e-mail address is the same in a format that I bet looks like
"is ${userEmail} still your email address?"
9. What questions do you still have about the work we've done so far? (not having a question is not an option)
In the readings on Git we were doing for our session 2 homework it ended with the guy saying you should always use git from the command line and
not within a IDE because no IDE matches the power of the terminal. Is that...still true? Atom's git interface is so nice and human readable at least for staging changes
and writing commit messages.
