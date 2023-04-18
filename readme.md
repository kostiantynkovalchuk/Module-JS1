# Coursework

Like learning a musical instrument, programming requires daily practice.

## Setting up your code editor

There are some tools that will help you to write code. One of these, [Prettier](https://prettier.io/), formats your code, making it easier for you and others to read.

### 1. Using prettier

- In Visual Studio open the extensions panel (see https://code.visualstudio.com/docs/editor/extension-gallery#_browse-and-install-extensions)
- Search for `Prettier - Code formatter`
- Click install on the top result

### 2. Enable formatting on save

- In Visual Studio open the settings file (see https://code.visualstudio.com/docs/getstarted/settings#_creating-user-and-workspace-settings)
- Search for `editor format`
- Set `editor.formatOnSave` and `editor.formatOnPaste` to true

## Running the code/tests

The files for the mandatory/extra exercises are intended to be run as jest tests.

- Once you have cloned the repository, run `npm install` once in the terminal to install necessary dependencies.
- To run the all tests, run `npm test`
- To run the tests in a specific file (for example `writer.js`), run `"npm test -- --testPathPattern=writer"`
 (Remember, you can use tab-completion to get files relative to the current directory, so m`Tab ↹`/1-`Tab ↹` will autocomplete get you the test file starting with 1-)

For more information about tests, look here:

https://syllabus.codeyourfuture.io/guides/intro-to-tests


## Instructions for submission

For your homework, we'll be using tests to check your answers. The tests will assert that your functions behave in the correct way. A **failing test** ❌ indicates that a function _is not_ behaving correctly; a **passing test** ✅ indicates that your function is behaving correctly.

1. Complete the challenges in each file and save it once you're happy with your changes
2. Run the script to check the results against the tests - all tests should read PASSED if you completed the challenges correctly. If a test reads FAILED, find the associated test to identify which function failed and fix it.
3. Raise a PR once you're happy with the quality of your code

## Tasks

- [ ] Set up example board
- [ ] Populate repo with coursework issues from Google Classroom Boilerplate
- [ ] Add core Actions from org store https://docs.github.com/en/actions/creating-actions/sharing-actions-and-workflows-with-your-organization
