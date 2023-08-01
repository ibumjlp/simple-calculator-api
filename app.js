const restify = require('restify');
const errs = require('restify-errors');
const cal = require('./cal.js');

const server = restify.createServer();

server.use(restify.plugins.bodyParser());

server.post('/calculator', function (req, res, next) {
    let cal_res = cal(req.body.operator, req.body.x, req.body.y);

    if(cal_res == "Divide by zero") {
        return next(new errs.BadRequestError("Divide by zero"));
    } else if (cal_res == "Invalid Operator") {
        return next(new errs.BadRequestError("Invalid operator"));
    } else {
        const obj = { value:cal_res }
        res.send(obj);
        return next();
    }
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});