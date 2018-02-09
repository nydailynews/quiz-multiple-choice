# Quiz (multiple choice)

## Usage

### How to produce a new multiple-choice quiz

Odds are you're starting out with a spreadsheet and four or five images. Here's how to turn that into a functioning quiz in as little time as possible.

1. Make a spreadsheet with the required data. [The spreadsheet should look something like this](https://docs.google.com/spreadsheets/d/11hwR56-4DtTJ4zxj8drgj_kdUdVBKpfdXEEHhavDYC4/edit?usp=sharing).
2. Export that quiz to a CSV, or just copy and paste its contents into a CSV to JSON conversion tool ([such as this one](http://www.convertcsv.com/csv-to-json.htm)).
3. Copy the [_blank](www/_blank) directory and its contents into a new directory named after your quiz.
4. Paste the JSON you created in step two into the quiz_content.json file. Replace everything that's in there.
5. Edit the index.html file
    1. Search and replace the document for these strings: TITLE, DESCRIPTION, CANONICALURL, KEYWORDS, BYLINE, DATE. TITLE should be the name of your quiz, DESCRIPTION should be a one-sentence description, CANONICALURL is the URL you will eventually publish this quiz at, KEYWORDS is a comma-separated list of words that describe your quiz, BYLINE is the name of the quiz author and DATE is the date (YYYY-MM-DDD) you intend to publish it.

### How to work the results / scoring

#### With three possible results
Say a = 5, b = 10 and c = 15 on a 15-question quiz (these values are set in the config.js file)
* The best answer is delivered to those who got 10 to 15 correct (i.e. greater than or equal to b's value).
* The worst answer is delivered to those who got 0-5 correct (i.e. less than or equal to a's value).
* The middle answer goes to people who got 6-9 correct (i.e. greater than a and less than b).

### How to update the quiz index

