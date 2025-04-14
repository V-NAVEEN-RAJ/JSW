<!--To run Node.js server, follow the below steps:-->
1. Open command prompt and navigate to the directory where the app.js file is located.
2. Type "node app.js" and press enter.
3. The server will start running on http://localhost:3001/api.
4. Open a web browser and navigate to http://localhost:3001/api.
5. The server will respond with a message indicating that the server is running.

<!--To check database connection, follow the below steps:-->
1. Open command prompt and navigate to the directory where the app.js file is located.
2. Type "node app.js" and press enter.
3. The server will start running on http://localhost:3001/api.
4. Open a web browser and navigate to http://localhost:3001/api/admin/getAdmin.
5. The server will respond with a JSON object containing the details of the admin user.


<!--End points and types of methods used in Admin API File-->

http://localhost:3001/admin/getAdmin - GET
http://localhost:3001/admin/addadmin - POST
http://localhost:3001/admin/editAdmin - PATCH

 
<!--End points and types of methods used in Customer API File-->


http://localhost:3001/customer/addcustomer - POST
http://localhost:3001/customer/getcustomer/:id - GET
http://localhost:3001/customer/mysurveyinbox/:dep - GET
http://localhost:3001/customer/mysurveyquestion/:id - GET
http://localhost:3001/customer/mysurveyresponse - PATCH
http://localhost:3001/customer/getCustomerActionPlan/:customer - GET
http://localhost:3001/customer/customerRejectedActionPlan - PATCH
http://localhost:3001/customer/customerAcceptedActionPlan - PATCH
http://localhost:3001/customer/getsuppliername/:id - GET
http://localhost:3001/customer/getsupplierid/:dept - GET


<!--End points and types of methods used in employee API File-->


http://localhost:3001/employee/addemployee - POST
http://localhost:3001/employee/getemployee - GET
http://localhost:3001/employee/editemployee - PATCH
http://localhost:3001/employee/deleteemployee/:id - DELETE
http://localhost:3001/employee/addCustomerSupplierMap - POST
http://localhost:3001/employee/deleteCustomerSupplierMap/:supplierID/:customerName - DELETE


<!--End points and types of methods used in question API File-->


http://localhost:3001/question/addquestionaries - POST
http://localhost:3001/question/getquestionaries - POST
http://localhost:3001/question/deletequestionaries - DELETE
http://localhost:3001/question/editquestionaries - PATCH
http://localhost:3001/question/newsurvey - POST


<!--End points and types of methods used in Supplier API File-->


http://localhost:3001/supplier/addsupplier - POST
http://localhost:3001/supplier/getsupplier - GET
http://localhost:3001/supplier/mycustomerresponse/:id - GET
http://localhost:3001/supplier/rejectcustomerresponse - PATCH
http://localhost:3001/supplier/resendActionPlanToCustomer/:id - PATCH
http://localhost:3001/supplier/getSupplierActionPlan/:supplierID - GET
http://localhost:3001/supplier/acceptcustomerresponse/:id - PATCH
http://localhost:3001/supplier/getallsurveyresponse - GET
http://localhost:3001/supplier/supplierToCustomerActionPlan - POST
http://localhost:3001/supplier/action_plan/:id - PATCH
http://localhost:3001/supplier/editActionPlan/:id - PATCH
http://localhost:3001/supplier/action_plan/:id - GET
http://localhost:3001/supplier/action_plan/ - GET
http://localhost:3001/supplier/action_plan/:id/document - GET
http://localhost:3001/supplier/remainderMail - POST

<!--Dependencies used in the project-->
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "http": "^0.0.1-security",
    "multer": "^1.4.5-lts.1",
    "mysql": "^2.18.1",
    "mysql2": "^3.11.2",
    "nodemailer": "^6.9.16",
    "nodemon": "^3.1.7"

<!--Reference of code-->

https://nodejs.org/en/learn/getting-started/introduction-to-nodejs


<!--Changes to be made in the code While deploying the project-->

1. Change the database credentials in the .env file.
2. Change the email credentials in the .env file.
3. Change the port number in the app.js file.
4. Change the host name in the app.js file.
5. Change the secret key in the app.js file.
6. Use app.listen(); 
insted of
            app.listen(3001, () => {
            console.log("Server Connected SuccessFully  " + process.env.APP_PORT);
            });