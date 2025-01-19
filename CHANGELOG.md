# Change Log

- 20250119 -- 1.0.4
  - update schema.sql to make database create only if exists
  - use environment variable for database name
  - update .env.example to include ``DATABASE_NAME`` config

- 20250119 -- 1.0.3
  - New Products API
    - GET all products
  - Added Integration Test for Product API
  - Updated Integration Test to separate API Health Test vs Products API Test
  - Updated readme for Products API

- 20250118 -- 1.0.2
  *No feature changes in this version*
  - Added connection to the database
    > - Will log error if database is not found
    > - Integration Test will also be connecting to the database.
  - Update CHANGELOG past entry date (year should be 2025)
  - Starting updating app version in package.json

- 20250113 -- 1.0.1
    *No feature changes in this version*
  - Install sqlite3
    - encounter dependency issue with pnpm
        > The following dependencies have build scripts that were ignored: sqlite3
To allow the execution of build scripts for these packages, add their names to "pnpm.onlyBuiltDependencies" in your "package.json", then run "pnpm rebuild"
    - updated package.json and run ``pnpm rebuild``
- 20250113 -- 1.0.0
  - Install and configure ESLint with below command:
  ``npm init @eslint/config@latest --save-dev``
    - selected pnpm as package manager during installation configuration
    - installed globals, eslint and eslintjs as part of the installation options
  - update readme with pnpm command
  - updated eslint.config.mjs to include "globals.jest"
  - started CHANGELOG file
- No Change Log :(