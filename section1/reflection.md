## Section 1 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?
* I tend to shy away from asking too many questions.  I can relate to the blog post about spending too much time on Google searching for solutions.
  - 20-30 minutes maximum on Google search, then ask!
* I also like the 'rubber duck' example and talking through your thoughts out loud
  - ask one, clear question (on Slack) at a time

2. What are the data types you learned about in this section? In your own words, define each.
* Primitive data types in JavaScript are as follows:
  - String: letters and other characters, wrapped within quotes ('' or " ")
      - Even so-called numbers can be strings using quotes
  - Number:  Includes all numbers (-47, 0.25, 3092)
      - floating point is like a decimal and exclude commas
  - Boolean: Evaluates as true or false (logic)
      - 3 == '3' would return true while 3 === '3' would return false because the latter is using strict equality and sees the other 3 as a string

3. How would you log the string `"Hello World!"` to the console?

* Requires variable declaration
* var practice = "Hello World!";
  console.log(practice);

4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?
* You can use // for a single line or /* before and */ for multiple lines
* Code comments allow for proper annotation so other developers know what you are doing - be concise

5. In your own words, what is a variable? How would you explain it to a 5 year old?
* Variable is a name that holds something
* Variable can be used many times

6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?
* Spotify
  1. String- number of monthly users (i.e., 1,921,521 for the artist San Holo)
  2. Number- personal data of a user such as postal code
  3. Boolean- whether you like a song/artist/playlist

7. In your own words, explain what concatenation is.
* Concatenation is where you join together variables and strings using a + sign operator

8. Think of a site or app you use frequently. Where do you think the developers used concatenation?
* Maybe for a playlist on Spotify where you join together three different artist names

9. What questions do you still have about the work we've done so far? (not having a question is not an option)
* Besides the primitive data types we've learned, what other important data types are there in JavaScript?  Is a NaN considered another data type?  What is its purpose? 
