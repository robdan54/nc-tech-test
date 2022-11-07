Please add any additional notes here…

I changed some of the import statements to require during setup as a trouble shooting step.

wrote each test before attempting to solve the test to make sure that the test was able to fail

each endpoint was worked on in it's own git branch to allow work to be done without fear of introducing errors to the main branch, would normally have deleted branches when complete, but thought I would leave them incase you wanted to see the workflow

if given more time i would have like to have edited the test for the get cards by id endpoint to check that the returned pages have a valid template id

The sizes data json is identical to the cards json, if given more time i would have fixed to match up the size ids with a title

I would also have like to include more error paths i.e to check if the Card id is valid but not found, or just completely invalid

Ran out of time whilst completing the post cards endpoint, if given more time I would have generated an id based on the previous card id, in an ideal world I would probably have used an SQL based database as this simplifies this step and more easily ensures that no cards can have the same id. The use of SQL also allows much easier matching of the different data types and would have sped up the process of matching the templates and urls to the cards