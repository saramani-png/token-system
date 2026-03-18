const Token = require("../models/Token");

exports.callNext = async (req, res) => {
  const { service_type, counter_no } = req.body;

  const nextToken = await Token.findOne({ service_type, status: "waiting" }).sort({
    token_number: 1,
  });

  if (!nextToken) return res.json({ message: "No tokens left" });

  nextToken.status = "called";
  nextToken.counter_no = counter_no;
  await nextToken.save();

  res.json({ message: "Next token called", token: nextToken });
};

exports.skipToken = async (req, res) => {
  const { token_id } = req.body;

  await Token.findByIdAndUpdate(token_id, { status: "skipped" });

  res.json({ message: "Token skipped" });
};