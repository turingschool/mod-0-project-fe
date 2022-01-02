# Section 1: ASKING QUESTIONS, Terminal and JavaScript Foundations

Section 1 is estimated to take a total of 6-10 hours to complete. Part C is the longest and most time intensive. This section of the project involves reading (both from this document as well as the 📒John Duckett book), 👩‍💻exercises, and 📝reflection questions. Make sure to manage your time well so that should you get stuck and need help, you have plenty of time to do so and meet the deadline.

- [Vocabulary](#vocabulary)
- [Part A: Asking Questions](#part-a-asking-questions)
- [Part B: Terminal](#part-b-terminal)
- [Part C: JavaScript Foundations](#part-c-javascript-foundations)
- [Exercises](#exercises)
- [Vocabulary](#vocabulary-1)
- [Reflections](#reflections)
- [Commit Your Work in Git](#commit-your-work-in-git)

## Vocabulary

If you've talked to any alum or near-alum of Turing, one thing they likely shared is "Turing teaches you how to learn". For creators of tech, the learning never ends. Not after graduating a program, not after 20 years of experience. We will provide more support as you are starting out, then release some of that support so you are equipped to learn on your own once you graduate. While we provide more support at the beginning, we also intentionally support you in building skills and habits that will help you do that successfully.

One of those pieces is in how developers approach vocabulary. Knowing technical vocabulary will allow you to get more out of reading documentation and tutorials, and will allow you to communicate well with teams and ask good questions when you need help. Each section of your project (and each lesson once you start Mod 1) will start with a vocabulary section. We don't always give you the definitions - this is intentional. You will create your own definition after having several opportunities to read definitions and see examples.

Here's what we ask you do:
- Find a special spot in your notebook for vocabulary and JavaScript reserved keywords. Mark it with a post-it or bookmark, so it's easy to find and come back to
- When you start a new section of the project, write down each term. Leave plenty of space for (future) notes
- As you read and work through the material you will come across definitions and build an understanding of these terms. Write in definitions, draw diagrams, write out relevant code snippets, etc. If you complete a section and don't have a grasp on a term, that's when it's time to reach out to your Mod 0 cohort and collaborate!

### Vocabulary Terms

- command
- directory
- code comments
- primitive data types
- String
- Number
- Boolean
- variable
- assignment operator
- re-assignment (of a variable)
- concatenation

### JavaScript Reserved Keywords

- `console.log()`
- `var`
- `true`
- `false`

## Part A: Asking Questions

If you've made it into Section 2 of the project, we hope that you've heard us say loud and clear, that asking questions is a good and important thing to do! That doesn't mean it's easy, though. Some of us have educational experiences that tell us otherwise, some of us have had bad experiences when being vulnerable and asking questions, and sometimes it's just hard to determine which words to use to formulate the question itself!

Read the three blog posts that follow:
* [It's okay to ask questions](https://dev.to/mporam/its-okay-to-ask-questions-43hf)
* [Asking better questions](https://dev.to/josefine/asking-better-questions-2e2k)
* [Your Questions Are Dumb; Ask Them Anyway](https://dev.to/kathryngrayson/your-questions-are-dumb-ask-them-anyway-3cm6)

Reflect on these posts, and how you feel about asking questions (specifically, technical questions as you enter your technical work at Turing). How might this positively or negatively impact your growth? 

It's going to take some time to find that balance between googling and pushing yourself to solve a problem without hand-holding, and reaching out for help. That's ok! be patient with yourself. The way you will find that balance is by being cognizant and aware of how you currently operate. Keep this on your mind as you work through this section, and... there is no time like the present to start asking questions!

Now that you understand the importance of asking questions, read the [Turing guide on asking questions](https://gist.github.com/ericweissman/fb0241e226227867b6bc70a4d49227f5) to ensure that you know the best way to ask the questions you may have!

## Part B: Terminal

You will likely spend the majority of your time in Module 1 in either the Terminal or your text editor (Atom). When you're new to programming, the terminal can seem like a scary place, but it has some advantages over other means of interacting with your computer. Perhaps the greatest advantage is that it allows programmers to build tools that they can share with each other without going through the process of creating a graphical user interface. This makes it easy to share code quickly so that it can be used in multiple projects.

You already have had some exposure to the terminal in [Mod 0, Session 2: Terminal and Command Line](http://mod0.turing.io/session2/#terminal-and-command-line). Let's get a little more practice!

### Explore and Practice

Visit the [Turing Terminal](http://learn-terminal.turing.io/) and read through the Learn section as needed. Explore the Playground as needed.

👩‍💻 Complete all three Challenges.

### Making Things, Navigating

#### Commands

In the following section, you will get a little practice using `touch` and `mkdir` to create files and directories, and `ls` and `cd` to navigate the directory structure and check-in.

#### Terminal Practice

👩‍💻 Use `mkdir` and `touch` to create the directories/files in the structure illustrated below:

```sh
|--secretLibraryProject
    |
    |--README.md
    |--package.json
    |
    |--lib
    |  |
    |  |--secretLibrary.js
    |  |--secretBook.js
    |  |--secretLibrarian.js
    |  |--patron.js
    |  |--librarySystem.js
    |
    |--test
       |
       |--secretLibrary.js
       |--secretBook.js
       |--secretLibrarian.js
       |--patron.js
       |--librarySystem.js
```     

Don't worry about putting any text or content into these files. For now, create this structure with empty files.

Your first command should be:

```bash
mkdir secretLibraryProject
```

Note that in the command provided above, the dashes preceding the directory name were not used in the actual directory name. The dashes are just used as a diagram aide, and is a common pattern you will see in other documentation.

### Deleting Things

#### Commands

* `rm`: This will remove a file from your system. Be careful with this! The terminal assumes you're a little more of an expert than the system does. This doesn't move the file to the Trash, it removes it completely from your system. It's a little like moving the file to the trash and then deleting it immediately.

* `rm -rf`: Passing the `-r` and `-f` options together to the `rm` command will allow you to delete directories even if they have other files and/or directories inside of them.

* For more information on each of these options run `man rm` in the Terminal. A manual page for the `rm` command will open.

* When viewing a `man` page, the Terminal is "taken over" by an interactive file-reading program called `less`.
  * While looking at the `man rm` page, read about the `-f` option (use the arrow keys to scroll if needed).
  * Next, scroll down and read this entry about `-R` (which, you'll learn, is the same as `-r`!)

* To exit the `less` program, hit the `q` key. This will take you back to the Terminal prompt.

* `man` pages can be super technical reading. You won't understand every detail of these pages and that's ok. It's still great practice!

#### Terminal Practice

👩‍💻 Use `rm` and `rm -rf` to delete each of the files and directories you created in the `Making Things` section above.

Note that it would be possible to delete the entire directory that you created with just `rm -rf secretLibraryProject`. **Don't do this!** At this point it's better for you to delete each of the files and directories individually so that you get some practice with these commands, which will help you remember them better in the long run. The goal here (for this particular exercise) isn't to be efficient and creating and deleting files and directories, it's to *get practice* creating and deleting files and directories. Ultimately this practice will allow you to be more efficient in the future.

## Part C: JavaScript Foundations

In this section, you will begin to learn the basics of JavaScript. You will work through several exercises which will help you get comfortable running files and seeing output. You will learn about ways to represent data in JavaScript as Strings, Numbers, and Booleans, as well as begin to explore how to capture and work with that data.

At the end of the section, you will use several Git commands to save your work to your local Git repository. Then you will push your updates to your remote GitHub repository. For now, we are building muscle memory with git commands and getting used to seeing what output they produce. We will dive deeper into the inner workings of Git later. For now, all you need to do is follow along and know that we are using Git to save our work, and GitHub to put it on the internet.

### Open your local copy of this repo in Atom

Using the Terminal, open the local copy of this repository. To do this, enter these commands into the Terminal (this may vary depending on the names of your directories):

```
cd ~
ls
cd turing
ls
cd 0module
ls
cd <name-of-this-repo>
ls
cd section1
ls
atom .
```

This will open the `section1` directory in Atom. You should be able to see the directory and its contents in the file explorer on the left side of your Atom window.

### Introduction to JavaScript

📒 To give you more context for what JavaScript is and how we use it, please read Chapter 1 (pages 13 - 21) of the `JAVASCRIPT & JQUERY: Interactive Front-End Web Development` book.

### Comments in Code

**Code comments** can be a very useful part of your programs. While we work to write code that is as legible and clear for other developers to read as possible, there are times when we need to be a bit more explicit about our intentions and reasoning. Comments allow us to add information for other developers in our code in our written/spoken language, as well as let us de-activate parts of our code that we want to temporarily keep from running.

```JavaScript
// Text after two backslashes is a single line comment.
// Anything that follows two backslashes
// will be ignored by the JavaScript interpreter.
```

📒 For additional context about code comments, read page 57 of the `JAVASCRIPT & JQUERY: Interactive Front-End Web Development` book.

```JavaScript
// Anything after the // is ignored by the JavaScript interpreter.
/* This is another way to write a code comment */

console.log("I could have code like this."); // and the comment after is ignored

// You can also use a comment to "de-activate" or comment out a piece of code:
// console.log("This won't run.");
console.log("Hello, World" /*"This part won't run either"*/)

console.log("This will run.");
```

### Data Types

JavaScript distinguishes between different kinds of data that programmers may need to use. We'll talk about three of the **primitive**, or most fundamental, data types in this section: Numbers, Strings, and Booleans.

#### Number

The **Number** data type handles all numbers, including negative numbers (such as `-27`) and decimals, which are referred to as floating point numbers (one quarter would be written as `0.25`). Large numbers are written without commas, so three thousand forty five would be written as `3045`.

_These are all examples of a `Number` data type in JavaScript:_

```javascript
47

-3

16.25
```

#### String

The **String** data type consists of letter and other characters, all wrapped within quotes. You can use single or double quotes, but the opening quote and the closing quote must be the same.

_These are all examples of a `String` data type in JavaScript:_

```javascript
"I am a string!"

'I am also a string!'
```

Strings can be used to work with any kind of text - number, letter, special character, etc.

```javascript
"&*$%@ ~~~"

"🦄Hello, World🌈"

"7835"
```

The last String in the previous example is interpreted as a String even though it only contains numbers. This is because the numbers are wrapped in quotes.

#### Boolean

The **Boolean** data types evaluates to one of two values: `true` or `false`. This data type can seem a little abstract, but Booleans are very helpful in helping us determine which script should run.

There are many cases in while we want to ask a program a question, such as "Does the username and password typed in match what we have in the database?". This is a yes/no question. We will ask the program the question in a way that it will respond with `true` or `false`. Here are a couple of examples:

_These are all examples of statements that evaluate to a `Boolean` data type in JavaScript:_

```javascript
3 === 6
//=> false, because 3 and 6 are not the exact same

2 === 2
//=> true, because 2 and 2 are the exact same

9 > 12
//=> false, because 9 is less than 12
```

Read more about comparison operators [here](https://javascript.info/comparison)!

> 👩‍💻 PAUSE here, and complete the exercises in `dataTypes.js`

### Variables and Assignment

📒 Read pages 58 - 61 of the `JAVASCRIPT & JQUERY: Interactive Front-End Web Development` book.

In code, **variables** allow us to store a value and re-use that value in multiple places. This gives us the ability to store complex information and easily use it more than once in our codebase.

A variable declaration is made up of three parts: the variable keyword, the variable name, and the value to be assigned to the variable with the assignment operator. Let's see what that looks like in code:

```javascript
var age = 8;
```

In the line above: `var` is the variable keyword, `age` is the variable name, and the number `8` is the value. A single equals sign (`=`) is the **assignment operator**. It assigns, or stores, the value to the variable name.

In JavaScript, there are certain words that are used for very specific tasks. The variable keyword `var` is one of those words -- it lets the JavaScript interpreter know that a variable is being created. _A note about variable keywords: As you learn more about JavaScript and as you read through documentation, you'll see the keywords `let` and `const` used to declare variables. The rules around how to use `let` and `const` are more nuanced, so for now, we'll stick with `var`._

Variables in JavaScript can be declared, or created, before they have a value assigned to them:

```javascript
var pets;  // declare variable `pets`
```

Declaring a variable means we now can reference it within our codebase, but without a value we can't do too much with it. Until you have assigned a value to a variable, programmers say the value is `undefined`. Fortunately, assigning a value is straightforward and can be done one of two ways:

You can declare a variable and assign a value at the same time:

```javascript
var kids = 2;
```

You can also re-assign a value to an existing variable:

```javascript
kids = 3;  // change variable `kids`
```

#### Rules for Naming Variables

It is important to note that JavaScript has a particular set of conventions on what makes a valid variable name.

* Names must begin with a letter, dollar sign, or an underscore. They _cannot_ begin with a number
* Names can contain any of the above characters plus a number, but you cannot use a dash (`-`) or a period (`.`) within the name
* You cannot use keywords or reserved words (such as `var` or `for`)
* All variables are case sensitive
* Use names that describe the kind of information you plan to assign the variable
* If your variable is made up of more than one word, then use [camelCase](https://en.wikipedia.org/wiki/Camel_case) i.e., `thisIsMyVariableName`

> 👩‍💻 PAUSE here, and complete the exercises in `variables.js`

### Concatenation

"Concatenate" is a programming term that means "join together". We join together strings in JavaScript using the plus (`+`) operator, the same one we would use to add numbers together, but in this context it does something different. An example follows:

```JavaScript
var name = "Sam";

console.log("Hello, my name is " + name);
// this will log the string "Hello, my name is Sam"
```

In the example above, we joined together a string and a variable with a value of a string assigned to it in order to create a complete sentence. We can also concatenate using variable that store Numbers, as modeled in the following example.

```JavaScript
var quantity = 12;
var snacks = " doughnuts";
var snackCount = "I have " + quantity + " " + snacks;

console.log(snackCount);
// this will log the string "I have 12 doughnuts"
```

Let's take a look at why that resulted in a string. We have a variable called `snackCount` and have assigned the value as our `quantity` and our `snacks`. Looking at `snackCount`, we’ll notice the value is "I have 12 doughnuts". The reason this works even though the first value is a number and the second is a string, is a result of _type coercion_. JavaScript is essentially trying to help us by converting the number into a string so we can combine the two together.

> 👩‍💻 PAUSE here, and complete the exercises in `concatenation.js`

### Interpolation

In addition to concatenation, you may have also seen interpolation used to inject values into strings! One benefit of interpolation is that it can be easier to read in longer strings and don't require concatenating separate strings together. 

Interpolation requires slightly different syntax to inject values into a string. Follow the below formula to utilize interpolation:
1. Use the back-tick (same key as the `~`, or the key to the left of the `1` key on a Mac keyboard) to wrap your entire string
2. Any values that you want to add in, use the following syntax - `${variable_name}` to properly wrap these values

Take a look at these two sentences, one using concatenation, the other using interpolation.

```JavaScript
var quantity = 12;
var snacks = " doughnuts";

//this uses concatenation
var snackCountConcat = "I have " + quantity + " " + snacks + "!";

console.log(snackCountConcat);
// this will log the string "I have 12 doughnuts!"

//this uses interpolation
var snackCountInterpolate = `I have ${quantity} ${snacks}!`

console.log(snackCountInterpolate);
// this will log the string "I have 12 doughnuts!"
```

> 👩‍💻 PAUSE here, and complete the exercises in `interpolation.js`

## Exercises

At this point, you should have worked through all three files in the `exercises` directory.

## Vocabulary

Look back at that special spot in your notebook for vocabulary. Have you updated with with definitions, diagrams, and code samples? If not, do so now!

## Reflections

📝 Answer the prompts in the `reflection.md` file in the `section1` directory. The `.md` file extension for this file refers to markdown formatting. Markdown is a markup language to help format your text. [This article](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) shows everything you need for basic Markdown formatting.

## Commit Your Work in Git

When you are finished with all of the `section1` exercises and reflections, follow these steps in order to save your work to your local git repository.

1. Make sure you are in your `section1` directory. When you run `ls` in the Terminal, you should see the `exercises` directory listed, as well as `README.md`, `reflection.md`, etc.
2. In the Terminal, run `git status`. You should see output like this:

```
On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   exercises/concatenation.js
	modified:   exercises/dataTypes.js
	modified:   exercises/interpolation.js
	modified:   exercises/variables.js
	modified:   reflection.md

no changes added to commit (use "git add" and/or "git commit -a")
```

The command `git status` shows us information about files we changed. Don't worry too much about understanding what this all means just yet. What's important is that you get comfortable typing `git status` often.

3. Run `git add reflection.md`.
4. Run `git status`. Your status should now look a little different:

```On branch main
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   reflection.md

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

   modified:   exercises/concatenation.js
   modified:   exercises/dataTypes.js
   modified:   exercises/variables.js
```

Under "Changes to be committed", It now lists "reflection.md". This means that git is getting ready to save this file. We want to do this for each file.

5. Run `git add exercises`.
6. Run `git status`. You should now see all those exercises files listed under "Changes to be committed". We just used `git add <directory name>` to add all the files located in a directory.
7. Run `git status`. You should now see all your files listed under "Changes to be committed". If there are any files listed under "Untracked files" or "Changes not staged for commit", add them using `git add filename_here`
8. Run `git commit -m "Add Section 1"`.
9. Run `git status`. You should see this output:

```
On branch main
nothing to commit, working tree clean
```

Congratulations! You just saved your work to Git!

### Push to GitHub

You've saved your work to Git on your local machine, but your repository on GitHub doesn't reflect it yet. You update the remote GitHub repository with your new local commits when you `push` your changes.

Run:

```
git push origin main
```

You should see output _similar_ to this:

```
Counting objects: 9, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (8/8), done.
Writing objects: 100% (9/9), 1.03 KiB | 1.03 MiB/s, done.
Total 9 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 1 local object.
To github.com:your-username/mod-0-project-fe.git
   e8ebd7a..32c0ed3  main -> maij
```

You should now be able to log in to GitHub, navigate to your remote project repository and see all the work you did in this section!

***

🚀 [Go to Section 2](../section2)
