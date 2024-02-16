const checkRole = (sysRole) => {
  return (req, res, next) => {
    const userRole = req.headers?.role ? req.headers.role.split(",") : [];
    const isValidRole = sysRole.some((role) => userRole.includes(role));
    if (!isValidRole) throw new Error("Permission denied");
    next();
  };
};
//RBAC(role based access control) vs ABAC(attribute) vs pBAC(permission)
module.exports = { checkRole };
