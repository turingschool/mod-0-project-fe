# Section 2 - GROWTH MINDSET, Conditionals and Functions

Section 2 is estimated to take a total of 6-8 hours to complete. Similar to Section 1, this section of the project involves reading (both from this document as well as the 📒John Duckett book), 👨🏽‍💻exercises, and 📝reflection questions. Make sure to manage your time well so that should you get stuck and need help, you have plenty of time to do so and meet the deadline.

- [Vocabulary](#vocabulary)
- [Get Set Up](#get-set-up)
- [Part A: Growth Mindset](#part-a-growth-mindset)
- [Part B: Conditionals](#part-b-conditionals)
- [Reflections](#reflections)
- [Commit Your Work in Git](#commit-your-work-in-git)
- [Push to GitHub](#push-to-github)
- [Vocabulary From Book](#vocabulary-from-book)

## Vocabulary

This section will introduce a number of new terms, that may feel a bit more complex. Write these terms and reserved keywords in that special spot in your notebook now. Work to hold yourself accountable to updating definitions _as you work through this section_.

### Vocabulary Terms

- comparison operators
- logical operators
- condition
- conditionals
- if statements

### JavaScript Reserved Keywords

- `if`
- `else if`
- `else`

## Get Set Up

Using the Terminal, open the local copy of the repository that you created during setup.  To do this, you will need to use the terminal command `cd` to change into the directory that holds the repository. Once you are in the correct directory, use the terminal command `atom .` to open the project repository. If you are having trouble with this, see the `section1` instructions.

## Part A: Growth Mindset

Read/watch one or both of the following:

- This [2-part blog post series](https://blog.mindsetworks.com/entry/how-having-a-growth-mindset-can-help-you-learn-to-code) discusses how having a growth mindset is helpful when learning to code, and how coding promotes a growth mindset!
- This [video interview](https://dev.to/hackflix_dev/how-to-hack-a-growth-mindset-b1g) where an experienced Front End engineer discusses learning about the concept of Growth Mindset and how that's changed how she sees her work and career. (The first 7 minutes are intros and a discussion on Developer Relations. After that, the conversation about Growth Midnset begins.)

Then, consider on the following questions. We will ask you to share some of these responses at the end of this section.

- What are two points from the article or video that either resonated with you, or were brand new to you?
* Something that was newer to me was the idea that "problem solving takes place within reach of one's capabilities". I don't need to worry about problems outside of my scope. There will be challenges, but not something like attempting an open heart surgery (something I have no knowledge on). Instead, the problems I will be facing as a programmer will be just beyond what I already know, so I can apply past experience to reach up, learn, and solve the problem. This idea along with the growth mindset will help me to grow my experience.
* Another point from the article I found interesting was S.M.A.R.T., or Specific, Measurable, Achievable, Relevant, and Time-Bound goals. I've followed a similar method of goal setting in the past but never applied an acronym to it. There is always the greater project to be completed, but breaking that down into smaller achievable components makes it manageable and increases the quality of the output.
- In which ways do you currently demonstrate a Growth Mindset? In which ways do you _not_?
* One way that I believe I already demonstrate a Growth Mindset is by seeking out challenges. I'm constantly asking myself, "how do I do that?", and pushing myself to create something better even if its new or challenging. However, an area that I lack in is seeking help. I know with past problems I have spent way too much time trying to problem solve on my own before reaching out for help. I enjoy finding the solution for myself, but am working to approach my new career path with an open mindset and the questions things more easily (and quickly).
- What is something you are good at or knowledgeable at now, that you once weren't? How did you get those skills/knowledge? Was it hard at some point?
* Something I'm constantly learning and teaching myself is graphic design. When I first learned about Illustrator and Photoshop I was fascinated with all the things I could make. I threw myself at it years ago knowing nothing, and since then have slowly acquired more and more knowledge. There have been some points in the learning process that have been difficult. I often have a vision in my head of what the end product should look like, but achieving it is not always so easy. I've also worked along other brilliant designers and realized my methods aren't always the best.

## Part B: Conditionals

One of the most important concepts in programming is knowing when and how to tell the computer to do either _one_ thing or _another_ thing based on a set of simple criteria.  We can accomplish this with if statements, which you will learn about in this section.

When you are all done with the lessons, exercises, and reflection for this section, you will once again use Git to save your work, and then put it in the cloud on GitHub.

### Operators

When you learned about Booleans in Section 1, you briefly read about and practiced using some comparison operators.

The conditional operators we touched on earlier are critical in the set up of if statements. Conditional statements (conditions) evaluate to `true` or `false`. The most common operators used for conditions are comparison operators:

* `===` (strictly equal)
* `!==` (not equal)
* `>` (greater than)
* `>=` (greater than or equal to)
* `<` (less than)
* `<=` (less than or equal to)

Some data types also have functions which return a `true` or `false`, so they’re used in conditional statements. We will touch on those later in the project and when you get into Mod 1.

- Read more about [comparison operators here](https://javascript.info/comparison)
- Read about [logical operators here](https://mariusschulz.com/blog/the-and-and-or-operators-in-javascript). You really just need to read the top first paragraph and code snippet in this post. You'll go deeper in Mods 1-2.

> 👨🏽‍💻 PAUSE here, and complete the exercises in `comparisons.js`

### If Statements

📒 Read pages 148-149 and 160-163 from the `JAVASCRIPT & JQUERY: Interactive Front-End Web Development` book. If you are unsure of some vocabulary you encounter, refer to the [vocabulary list](#Vocabulary-From-Book) at the end of this README.

In addition to **`if`** and **`else`**, **`else if`** can help us create more complex statements. `else if` statements execute a block of code when their condition **evaluates** to `true`. However, they must be chained to a previous `if` statement, like so:

```javascript     
if (condition1) {
    //block of code executes if condition1 evaluates to true
} else if (condition2) {
    //block of code executes if condition1 evaluates to false and condition2 evaluates to true.
} else if (condition3) {
    //block of code executes if condition1 and condition2 evaluate to false
    //and condition3 evaluates to true.
} else {
    //block of code executes if none of the conditions above evaluate to true.
};
```

### If/Else Statements

Why do we have conditional statements? Most often it’s to control conditional instructions, especially *if/else if/else* structures. Read the following code snippet, then the accompanying explanation that follows it.

```javascript
var minutesToHeatWater = 7;

if (minutesToHeatWater < 7) {
    console.log("The water is not boiling yet.");
} else if (minutesToHeatWater === 7) {
    console.log("It's just barely boiling");
} else if (minutesToHeatWater === 8) {
    console.log("It's boiling!");
} else {
    console.log("Hot! Hot! Hot!");
};
```

What would be logged when `minutesToHeatWater` is 7? What if we changed it to 5? Or 8? Or 9?

- When the `minutesToHeatWater` is 5, here is how the execution goes: "Is it true that 5 is less than 7? Yes, it is, so print out the line The water is not boiling yet.".
- When the `minutesToHeatWater` is 7, it goes like this: "Is it true that 7 is less than 7? No. Next, is it true that 7 is equal to 7? Yes, it is, so print out the line It's just barely boiling".
- When the `minutesToHeatWater` is 8, it goes like this: "Is it true that 8 is less than 7? No. Next, is it true that 8 is equal to 7? No. Next, is it true that 8 is equal to 8? Yes, it is, so print out the line It's boiling!".
- Lastly, when `minutesToHeatWater` is 9 or greater, it goes: "Is it true that 9 is less than 7? No. Next, is it true that 9 is equal to 7? No. Next, is it true that 9 is equal to 8? No. Since none of those are true, execute the else and print the line Hot! Hot! Hot!".

Only one section of the *if/else if/else* structure can have its instructions run. If the *if* is true, for instance, JavaScript will not bother to look at the *else if* or *else*. Once one block executes, that’s it.

### Equality vs. Assignment

The **number one mistake** people encounter when writing conditional statements is the difference between `=` and `===`.

* `=` is an assignment. It means "take the value on the right side and store it into whatever is on the left side" – it’s telling, not asking.

* `===` is a question. It means "is the value on the right the exact same as the value on the left?" – it’s asking, not telling.

> 👨🏽 ‍💻PAUSE here, and complete the exercises in `decision-making.js` and `if-statements.js`

## Reflections

📝 Answer the prompts in the `reflection.md` file in the `section2` directory. If you need a reminder on how to format your markdown, [this is the Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)!

## Commit Your Work in Git

When you are finished with all of the `section2` activities, use the Terminal to run the following commands in order to save your work to your local Git repository.

1. `git add section2/exercises`
2. `git add section2/reflection.md`
3. `git status` - you should see only green filenames - if you see any that are red, continue to `git add` those files until `git status` shows all green files.
4. `git commit -m "Add Section 2 work"`

## Push to GitHub

You've saved your work to Git on your local machine, but your repository on GitHub doesn't reflect it yet. You update the remote GitHub repository with your new local commits when you `push` your changes.

Run:


```
git push origin main
```

You should now be able to log in to GitHub, navigate to your remote project repository and see all the work you did in this section!

## Vocabulary From Book
The readings in the `JAVASCRIPT & JQUERY: Interactive Front-End Web Development` book use JavaScript in a way that is likely unfamiliar to you. The book uses specific JavaScript properties and functions to interact with HTML elements on a webpage, like changing or adding text on a webpage. Initially, we will be using JavaScript without HTML. That's why you haven't seen these techniques before! We will address these techniques thoroughly during Mod 1, however, here are some quick definitions to help you become familiar with them.

* `document.getElementById()`: a method used to retrieve an element from a web page. Here is the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
* `document.write()`: a method used to write data to a webpage. Here is the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document/write)
* `el.innerHTML()`: a method used to change the text of an element *(defined as the variable el)* from a web page. Here is the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
* `el.textContent()`: a method used to change the text of an element *(defined as the variable el)* from a web page. Here is the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

***

🚀 [Go to Section 3](../section3)
