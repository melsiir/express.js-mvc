const Employee = require('../model/ Employee')


const getallEmployees = async (req, res) => {
  const employees = await Employee.find()
  if (!employees) return res.status(204).json({'message': 'there no employees'})
  res.json(employees)
}

const createNewEmployee = async (req, res) => {
  if (!req?.body?.firstname || !req?.body?.lastname)   {
    return res.status(400).json({'message' : 'first name and last name required !'})
  }
  try {
    const result = await Employee.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname
    })
  res.status(201).json(result)

  } catch (err) {
    console.error(err)
  }
}



const updateEmployee = async (req, res) => {
  if (!req?.body?.id) {
    
    return res.status(400).json({'message': 'the ID field is required!'})
    }
    try {
    const employee = await Employee.findOne({
      _id: req.body.id
    }).exec()
    if (!employee) {
    return res.status(400).json({"message":`sorry we could not find the id : ${req.body.id}`})
  }
  
  if (req.body?.firstname) employee.firstname = req.body.firstname
  if (req.body?.lastname) employee.lastname = req.body.lastname
  const result = await employee.save()
  res.json(result)
    } catch(err) {
      if (err.path === '_id') res.json({'invalid':'please inter valid id'})
    }
  
}


const deleteEmployee = async (req, res) => {
  if (!req.body.id) {
    return res.status(400).json({'message': 'the ID field is required!'})
    }
    const employee = await Employee.findOne({
      _id: req.body.id
    }).exec()
    if (!employee) {
    return res.status(400).json({"message":`sorry we could not find the id : ${req.body.id}`})
  }
  const result = await Employee.deleteOne({
    _id : req.body.id
  })
  res.json(result)
}

const getEmployee = async (req, res) => {
  if (!req?.params?.id) {
    return res.status(400).json({'message': 'the ID field is required!'})
    }
    const employee = await Employee.findOne({
      _id: req.params.id
    }).exec()
    if (!employee) {
    return res.status(400).json({"message":`sorry we could not find the id : ${req.params.id}`})
  }
  
  res.json(employee)
}

module.exports = {
  getallEmployees,
  createNewEmployee,
  updateEmployee,
  getEmployee,
  deleteEmployee,
  
}