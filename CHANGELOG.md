# Change Log

- 20240113 -- 1.0.1
    *No feature changes in this version*
  - Install sqlite3
    - encounter dependency issue with pnpm
        > The following dependencies have build scripts that were ignored: sqlite3
To allow the execution of build scripts for these packages, add their names to "pnpm.onlyBuiltDependencies" in your "package.json", then run "pnpm rebuild"
    - updated package.json and run ``pnpm rebuild``
- 20240113 -- 1.0.0
  - Install and configure ESLint with below command:
  ``npm init @eslint/config@latest --save-dev``
    - selected pnpm as package manager during installation configuration
    - installed globals, eslint and eslintjs as part of the installation options
  - update readme with pnpm command
  - updated eslint.config.mjs to include "globals.jest"
  - started CHANGELOG file
- No Change Log :(