Name - Anandu Raveendran

Applied for - Junior Software Developer

Contact Number - 7907741887

email ID - anandhuraveendrank@gmail.com

GitRepo Link - https://github.com/anandhuRaveendran/NagaED-Tasks.git

# ContactUs page
ReactJs used for frontend

NodeJs and ExpressJs for backend

MongoDB for database

Postman for API check

## TASK1
### Needs before Install
1.NodeJs 

2.MongoDB

# Instructions
1. copy the git repo and open a terminal and pull the repo
   ```
   git pull https://github.com/anandhuRaveendran/NagaED-Tasks.git
   ```
2.to run the contactus front-end , open terminal from the NagaED-Tasks folder and then
   ```
   cd NagaEDContactUs
   npm install
   npm run dev
   ```
   
   and then open another terminal then
   ```
   cd backend
   npm install
   node server.js
   ```
## TASK2
1. open terminal from the NagaED-Tasks folder and then
2. ```
   cd backend
   node course.js
   ```
3. * In the postman use get method for list all course
   * use post method for add new course
   * use put methode to update course
   * use delete methode for delete course
     Eg:
     In POST methode
     Body -> raw -> JSON
     
     {
    "title":"english",
    "description":"testing",
    "duration":"12 hours"
      }
     
     then send request
   
     http://127.0.0.1:5000/api/courses
     
   To check list

   in GET methode

        http://127.0.0.1:5000/api/courses

