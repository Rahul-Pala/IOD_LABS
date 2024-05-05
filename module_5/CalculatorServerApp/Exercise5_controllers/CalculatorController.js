function Add(req, res) {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2
    res.status(200)
    res.json({result:sum})   //Calculator add method is added on the server side, not client side
}

function Substract(req, res) {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let subtraction = number1 - number2
    res.status(200)
    res.json({result:subtraction})
}

function Multiply(req, res) {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let multiplication = number1 * number2
    res.status(200)
    res.json({result:multiplication})
}

function Divide(req, res) {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let division = number1 / number2
    res.status(200)
    res.json({result:division})
}

module.exports = {Add, Multiply, Divide, Substract}