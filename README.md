# Points Challenge - Robert Neyrinck

Thank you for giving me the opportunity to showcase some of my backend skills!

This backend challenge uses Express, MongoDB, and NodeJs to accomplish the requested task.

#### Required tools/Preparation for testing

1. Postman(The desktop client is needed to test on local machines)
   - [download here](https://www.postman.com/downloads/)
2. Git to clone repository
   - [download here](http://git-scm.com/)
3. NodeJs with NPM to install dependencies and run code
   - [download here](http://nodejs.org/)
4. MongoDb desktop client
    - [download here](https://www.mongodb.com/try/download/community)

## Instructions for use

1.  Clone this repo and download to local machine

    - open gitbash(or any terminal)
    - run the below code line for line to download a copy of the files

    ```
    git clone https://github.com/rneyrinck/FetchRewardsPointsChallenge.git
     cd FetchRewardsPointsChallenge
     npm install
    ```

    Once the above command runs you should be ready to test the application(if all the previous steps were followed)

2.  Start the application

    - in the terminal run
      ```
      node db/seed.js
      ```
      this will add three preloaded payments into the database
    - Then, in the terminal, run
      ```
      node index.js
      ```
    - If server runs it will display message:
      ```
      listening in on port: 3000
      ```
    - If this doesnt occur, ensure you've installed the prerequisites, or reach out and I can demonstrate the application on my server

3.  Setting up the backend interface tool

    - Open Postman
    - From the homepage press the "Workspaces" tab
    - Select "Create Workspace"
      - name it "Test Rneyrinck"
      - press "create workspace" at the bottom
      - after loading, press "Go to Workspace"
    - In workspace(Test Rneyrinck) open a new tab(right above the bold "Test Rneyrinck at the top")

      - Copy this url to your clipboard
        ```
        localhost:3000/payments
        ```
      - in new tab click the gray browser bar(It has a placeholder text of "Enter request URL") and then paste the above url
      - Press the "Send" button
        - this should display the three items we added when we ran the seed.js file earlier

      If the request returns the list of items then you have successfully installed all dependencies and are ready to dig into the test!

4.  Testing the application
    - Posting new payment:
      - press the "GET" dropdown to the left of where we entered the url
      - select "POST"
      - underneath the url browser bar press the tab that says "Body"
      - select the dropdown that says "none" and select "raw"
      - to the right of the "raw" dropdown select the "Text" dropdown and select JSON from the options
      - use the following format to enter in new payments, keeping in mind that JSON requires strings(non number characters) to be wrapped in double quotes, but numbers do not need quotes.
        ```
        {
            "payer":"enter payer name here",
            "points: enter and integer here
        }
        ```
      - once body(what were sending in the request) is complete, press the "send" button. This will return the updated list of payments
    - Making a points spend request:
      - follow the instructions for "posting new payment" above and instead select "PATCH" from the request dropdown.
      - delete the body line that contains "payer"
      - your body should now look similar to this
        ```
        {
            "points": some number
        }
        ```
      - feel free to change the value of points and then press the "send" button
      - In your terminal you should see a list of the payments printed out with updated values
      - in the terminal press "ctrl + C" to stop the server.
      - press the up arrow while in the terminal to reselect `node index.js` and hit enter
      - in Postman change the "POST" request to "GET" and hit the "send" button
      - this will return the updated list

## Comments on the challenge
This was a really enjoyable experience! It was the first time I've manipulated a data set using a map function inside of a CRUD operation. 

The hardest part was trying to write this readme! I had to really go back to the basics and learn how I would set up a development environment if i didn't have any experience in it. After extensive testing on my partners computer(which I will have to clean up after all the installs I set up) I've made this set up as lean as I can.

Thank you again for the opportunity to showcase what I can do and i'm looking forward to discussing the challenge with the engineering team!