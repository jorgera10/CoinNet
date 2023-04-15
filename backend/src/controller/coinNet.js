import { database } from "../database";
import coinNet from "../model/coinNet";

export const getCapital = async (req, res) => {
  try {
    const data = await coinNet.find();
    res.json(data);
  } catch (error) {
    console.error(error);
  }
};

export const postCapital = async (req, res) => {
  try {
    const data = coinNet(req.body)
    await data.save();
    res.json(data);
  } catch (error) {
    res.data({ message: error });
  }
};

export const putCapital = async (req, res) => {
  const { id } = req.params;
  const { capital, description, lastMovements } = req.body;
  try {
    const data = await coinNet.updateOne(
      { _id: id },
      { $set: { capital, description, lastMovements } }
    );
    res.json(data);
  } catch (error) {
    res.data({ message: error });
  }
};

export const deleteCapital = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await coinNet.deleteOne({ _id: id });
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  }
};
