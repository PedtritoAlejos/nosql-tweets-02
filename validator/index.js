exports.userSignupValidator = (req,res,next) => {
   
    req.check("name","Name is required").notEmpty();
    req.check("surnames","Surname is required").notEmpty();
    req.check("email","Email is required").notEmpty();
    req.check("email","Email must be between 3 to 32 characters")
        .matches(/.+\@.+\..+/).withMessage("Email must contain @")
        .isLength({min:3,max:32});

    req.check("password","Password is required").notEmpty();
    req.check("password","Password must be between 10 to 50").isLength({min:10,max:50});      

    const errors = req.validationErrors();

    if(errors){
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({error:firstError});
    }
  
    next();
};

exports.loginValidator = (req,res,next) => {

    req.check("password","Password is required").notEmpty();
    req.check("email","Email must be between 3 to 32 characters")
        .matches(/.+\@.+\..+/).withMessage("Email must contain @")
        .isLength({min:3,max:32});

    const errors = req.validationErrors();
    
    if(errors){
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({error:firstError});
    }
    next();
};

exports.createTweetValidator = (req,res,next) => {

    req.check("message","Message is required").notEmpty();
    req.check("message","Message must be between 1 to 100 characters").isLength({min:1,max:100});

    const errors = req.validationErrors();
    
    if(errors){
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({error:firstError});
    }
    next();
};