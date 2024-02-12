import { RequestHandler } from "express";

export const add: RequestHandler = async (req, res, next) => {
  const val1: number = 10;
  const val2: number = 20;
  const result: number = val1 + val2;
  res.send({ message: "Addition", data: result });
};

export const subs: RequestHandler = async (req, res, next) => {
  const { num1, num2 } = req.body;
  const result: number = num1 - num2;
  res.send({ message: "Substraction", data: result });
};

export const division: RequestHandler = async (req, res, next) => {
  const { num1, num2 } = req.body;
  const result: number = num1 / num2;
  res.send({ message: "Division", data: result });
};

export const multiplication: RequestHandler = async (req, res, next) => {
  const { num1, num2 } = req.body;
  const result: number = num1 * num2;
  res.send({ message: "Multiplication", data: result });
};

export const percentage: RequestHandler = async (req, res, next) => {
  const val1: number = 30;
  const percentage: number = 50;
  const result: number = (val1 * percentage) / 100;
  res.send({ message: "Percentage", data: result });
};
