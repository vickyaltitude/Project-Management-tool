import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllProjects = async (
  request: Request,
  response: Response
): Promise<void> => {
  try {
    const projects = await prisma.project.findMany();
    response.status(200).json(projects);
  } catch (err) {
    console.log("Error in getAllProjects controller", err);
    response.status(500).json({ Message: "Internal server error" });
  }
};

export const createProject = async (
  request: Request,
  response: Response
): Promise<void> => {
  try {
    const { name, description, startDate, endDate } = request.body;
    const newProject = await prisma.project.create({
      data: {
        name,
        description,
        startDate,
        endDate,
      },
    });
    response.status(201).json(newProject);
  } catch (err) {
    console.log("Error in createProject controller", err);
    response.status(500).json({ Message: "Internal server error" });
  }
};
