# Backend Challenge

## Part 1

Start with the [Heroes Challenge](./heroes-challenge.md)

## Part 2

```bash
# First stop the server running from Part 1
cd ./patients
npm i
npm start
```

Open <http://localhost:9000/patients> in a browser.

In the [routes endpoint](../patients/routes/routes.js), the `GET` endpoint for `/patients` is configured to return data from a local object, but you will find the code written to return it from a SQLLite database included with the package that has been commented out, both using the Sequelize ORM, and using raw SQL.

Uncomment the data access method of your choice, and implement pagination on this endpoint. The frontend user should be able to request a page number and a page size, and have the expected data returned.

## Part 3 (time permitting)

In the [routes endpoint](../patients/routes/routes.js), configure the `POST` endpoint for `/patients` to add a patient to the database. The patient object should contain the values `firstName`, `lastName`, and `age`, and should add a numerically-incrementing ID.
