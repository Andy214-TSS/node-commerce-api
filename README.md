# E-COMMERCE API

This project is for training and educational purpose, for anyone interested to learn step by step how to build an e-commerce API incrementally. The idea is to introduce small changes to learn and understand why each changes is introduced, also to question why, whether is it necessary or is there a better alternative.

Please feel free to discuss, provide suggestion or corrections; The idea is to contribute and learn together.

## Setup

### Requirements

1. Node (ideally v20.6 and above)
    > Recommended to install NVM (Node Version Manager) to manage your node version
2. sqlite3 (comes preinstalled with MacOS)
   
### Setup Database

1. Run below command to initialize the database
    ``sqlite3 database.db < src/database/schema.sql``


#### ToDo

1. create ``.env`` file based on provided ``.env.example`` on the root folder


### The First Setup

1. ``npm init -y`` in project folder, which will generate a package.json.
2. Created README.md file
3. ``git init`` in project folder
4. Commit and push to github

## Running the API Server

1. ``pnpm start`` 
   - This command will include:
     - a ``watch`` flag to watch for changes on index.js and restart the server 
     - an ``env-file`` flag to read configs from env file

### Products API

1. Get all products:
   ``curl -X GET http://localhost:3000/api/products``

## Running TEST

1. ``pnpm test``
