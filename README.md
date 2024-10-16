
Here is a detailed guide for a new user to set up your project on their system and ensure everything runs smoothly.

Step-by-Step Guide:

Install Node.js: Download and install the latest version of Node.js from Node.js official website. This will also install npm (Node Package Manager).

Install MongoDB: Download and install MongoDB from MongoDB official website. Follow the instructions for your operating system.

Clone the GitHub Repository: Open the terminal and run:

bash
Copy code
<In VS Code Terminal make sure you have Bash installed>git clone https://github.com/Tanishqsingh288/Backend-Comicbooks-API-s-For-the-Internship.git

Navigate to the Project Directory:

bash
Copy code>>

cd Backend-Comicbooks-API-s-For-the-Internship
Install Project Dependencies: Run the following command to install all the required npm packages:


bash
Copy code>>>

npm install


Install Nodemon (Optional): Nodemon is a tool for automatically restarting the server when file changes are detected. To install it globally:

bash
Copy code>>>


npm install -g nodemon
Set Up Environment Variables: Create a .env file in the root directory. Add the following (you’ll need to replace values accordingly):

makefile
Copy code>>>

PORT=5000
MONGO_URI=your_mongo_db_connection_string


Set Up MongoDB: Start MongoDB using the following command (Linux/Mac users may use mongod):

bash
Copy code>>>

mongod
Create MongoDB Database: Use MongoDB Atlas or your local MongoDB to create a database for the comics. No collections are needed upfront; they will be created when the app runs.

Seed the Database (Optional): If you have a database seeder script, run it to populate the database with initial data.

Run the Project:

bash
Copy code>>>

npm start

If you're using nodemon, use:
bash
Copy code>>

nodemon


Test API Endpoints: Use Postman or any API testing tool to check API routes like GET /api/comics, POST /api/comics, etc.

Ensure MongoDB Is Running: Double-check that MongoDB is running properly on your machine (default port: 27017).

Check Project Structure: Verify that the cloned folder contains all necessary directories like controllers, models, routes, etc.

Check Installed Packages: Open the package.json file to see the list of installed packages and ensure they match what’s needed.

Check Logs: Look at the terminal to ensure there are no startup errors. Resolve any issues that show up during the startup process.

Check API Keys/Secrets: Ensure that any necessary API keys or secrets are correctly added to the .env file.

Handle CORS Issues: If accessing APIs via a frontend, ensure CORS is properly configured on the backend.

Update Packages (Optional): If there are outdated packages, use:

bash
Copy code>>>

npm update


Troubleshoot Errors: If you encounter any errors, check the logs or refer to the project documentation for common issues and resolutions.

By following these steps, a new user will have your project fully set up and running on their system.