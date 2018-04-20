// Cross-Origin Resource Sharing

module.exports = function cors(req, res, next){

    // add headers to enable CORES
    // allow access from any location
    res.header("Access-Control-Allow-Origin", "*");
    // allow content-type and authorization type headers
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
}