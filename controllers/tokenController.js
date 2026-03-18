const Token = require("../models/Token");

exports.generateToken = async (req, res) => {
  const { service_type, user_id } = req.body;

  const lastToken = await Token.findOne({ service_type }).sort({ token_number: -1 });
  const newTokenNo = lastToken ? lastToken.token_number + 1 : 1;

  const queueCount = await Token.countDocuments({ service_type, status: "waiting" });

  const estimated_wait = queueCount * 2; // 2 minutes per person example

  const token = await Token.create({
    token_number: newTokenNo,
    user_id,
    service_type,
    estimated_wait_time: estimated_wait,
  });

  res.json({
    message: "Token Generated",
    token_number: newTokenNo,
    estimated_wait,
  });
};