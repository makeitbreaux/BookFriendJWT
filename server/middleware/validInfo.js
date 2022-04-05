//CHECKS THAT INFO INPUT INTO REGISTER & LOGIN IS VALID

module.exports = (req, res, next) => {
    const { email, user_first_name, user_last_name, password } = req.body;
    //REGEX CHECKS TO MAKE SURE EMAIL IS VALID EMAIL FORM
    function validEmail(userEmail) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    }
    //LOOP THROUGH ARRAY, CHECK IF EMPTY: IF SO THROW ERROR
    if (req.path === "/register") {
      console.log(!email.length);
      if (![email, user_first_name, user_last_name, password].every(Boolean)) {
        return res.status(401).json("Missing Credentials");
      } //CHECK IF EMAIL IS VALID, IF NOT THROW ERROR
      else if (!validEmail(email)) {
        return res.status(401).json("Invalid Email");
      }
    } //LOOP THROUGH ARRAY, CHECK IF EMPTY: IF SO THROW ERROR
    else if (req.path === "/login") {
      if (![email, password].every(Boolean)) {
        return res.status(401).json("Missing Credentials");
      } //CHECK IF EMAIL IS VALID, IF NOT THROW ERROR
      else if (!validEmail(email)) {
        return res.status(401).json("Invalid Email");
      }
    }
    //ONCE EVERYTHING IS CHECKED & OK, WILL CONTINUE ON WITH ROUTE
    next();
  };