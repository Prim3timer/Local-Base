const express = require('express')
const router = express.Router()
const path = require('path')
const employeeController = require('../../controllers/employeeController')




// const data = {
//     employees: require('../model/employees.json'),
//     setEmployees: function (data) { this.employees = data }
// }




router.route('/').get(employeeController.getAllEmployees)

.post(employeeController.createEmployee)

router.route('/:id').get(employeeController.getAnEmployee)
.delete(employeeController.deleteEmployee)
.put(employeeController.editEmployee)

module.exports = router
