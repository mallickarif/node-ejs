const User = require("../Model/user");

exports.userList= async(req, res, next) => {
    const userList = await User.find({});
    res.send(
    {
        isSuccess: true,
        message: "Welcome to the home page controller",
        data: userList,
    });
};