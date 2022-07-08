app.post("/visitor/detect/1", (req, res) => {
  console.log(req.body);
  res.json({ redirectRoute: "/visitor/login" });
});
