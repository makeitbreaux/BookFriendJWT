// const express = require("express");
// const { BadRequestError } = require("../expressError");

// const router = new express.Router();

// router.get("/", async function (req, res, next) {
//     const q = req.query;
//     // arrive as strings from querystring, but we want as ints
//     if (q.minEmployees !== undefined) q.minEmployees = +q.minEmployees;
//     if (q.maxEmployees !== undefined) q.maxEmployees = +q.maxEmployees;
  
//     try {
//       const validator = jsonschema.validate(q, companySearchSchema);
//       if (!validator.valid) {
//         const errs = validator.errors.map(e => e.stack);
//         throw new BadRequestError(errs);
//       }
  
//       const companies = await Company.findAll(q);
//       return res.json({ companies });
//     } catch (err) {
//       return next(err);
//     }
//   });

//   module.exports = router;