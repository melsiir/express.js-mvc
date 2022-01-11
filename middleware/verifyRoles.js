/*
const verifyRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req?.roles) return res.sendStatus(401)
    const rollesArray = [...allowedRoles]
    console.log(allowedRoles);
    console.log((req.roles));
    const results = req.roles.map(role => rollesArray.includes(role)).find(value => value === true)
    if (!results) return res.sendStatus(401)
    next()
  }
}

module.exports = verifyRoles

*/

const verifyRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req?.roles) return res.sendStatus(401);
        const rolesArray = [...allowedRoles];
        const result = req.roles.map(role => rolesArray.includes(role)).find(val => val === true);
        if (!result) return res.sendStatus(401);
        next();
    }
}

module.exports = verifyRoles