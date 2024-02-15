const checkRole = (sysRole) => {
  return (req, res, next) => {
    const userRole = [req.headers.role] || [];
    const isValidRole = sysRole.some((role) => userRole.includes(role));
    if (!isValidRole) throw new Error("Permission denied");
    next();
  };
};

module.exports = { checkRole };
