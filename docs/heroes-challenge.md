# Heroes Challenge

```bash
cd ./heroes
npm i
npm start
```

## Part 1

Open <http://localhost:9000/heroes> in a browser.

Open <http://localhost:9000/heroes/1> in a browser.

That wasn't expected... let's see if we can find and fix the problem in [the routes file](../heroes/routes/routes.js).

## Part 2

Oh no! it turns out the API is sending more data back than we need. Let's change up the get all endpoint to match our needs.

We need to show the heroes that match the following criteria:

- only include heroes from the Marvel organization
- hero last names should be unique (no duplicate last names)
- heroes should be sorted by id (ascending)
- each hero should have an added `fullName` property that is a combination of firstName and lastName

If time allows, can you make parameters for the first three?
