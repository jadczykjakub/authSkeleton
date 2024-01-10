export const mockContent = async (req, res) => {
  try {
    return res.status(200).send({ text: "hello world" });
  } catch (err) {
    res.status(500).send({ response: err.message });
  }
};
