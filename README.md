# SemanticBits Interview API JS

This repo contains two express APIs that can be used for JS based interviews at SemanticBits. The `heroes` API uses static data and is more focused on JS problem solving. The `patients` API relies on a data source (either sqlite or mongo) and can be used for more backend centered interviews. Use the markdown files in the `docs` directory as a framework for the interview challenge.

[Full Stack/Frontend Interviews](./docs/full-stack-criteria.md)
[Backend Interviews](./docs/backend-criteria.md)

## Tips

sqlite3 v5 works for node >=v11, if the candidate is using node v10 or below, please change the sqlite3 version in `package.json` to "^4.2.0". If you are not planning on working on the pagination challenge, you may also just remove sqlite3 from the dependencies.
    - For windows if you still get an error on installing sqlite3 make sure the candidate has python and visual studio build tools installed, these are requried for node-gyp <https://github.com/nodejs/node-gyp#on-windows>
    - If you still get an error related to the sqlite install, try running `npm cache clean sqlite3` (which will clear any previously cached instances of the `sqlite` library you may have installed that conflict with the necesary version).

For frontend interviews be aware that creating the frontend project inside of this code base may result in some odd build or runtime issues including possible connection issues when making http requests.

If creating a frontend is an issue due to time/connection constraints, consider using a tool like <https://stackblitz.com/> to quickly stand up a frontend using a popular framework.

If starting up the backend is an issue, consider using <https://swapi.dev/> for a quick and easy to use API.
