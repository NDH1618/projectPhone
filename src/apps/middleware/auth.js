const checklogin = (req, res, next) => {
    if(req.session.email && req.session.password){
        res.redirect("/admin/dashboard")
    }
    next();
};
const checkadmin = (req, res, next) => {
    if(!req.session.email || !req.session.password){
        res.redirect("/admin/login")
    }
    next();
};

const deletesession = (req, res) => {
    
}

module.exports = {
    checklogin,
    checkadmin,
    deletesession,

}