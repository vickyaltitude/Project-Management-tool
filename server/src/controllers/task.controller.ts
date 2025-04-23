import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTasks = async (
  request: Request,
  response: Response
): Promise<void> => {
  try {
    const { projectId } = request.query;
    const tasks = await prisma.task.findMany({
      where: {
        projectId: Number(projectId),
      },
      include: {
        author: true,
        attachments: true,
        comments: true,
        assignee: true,
      },
    });
    response.status(200).json(tasks);
  } catch (err) {
    console.log("Error in getTasks controller", err);
    response.status(500).json({ Message: "Internal server error" });
  }
};

export const createTask = async (
  request: Request,
  response: Response
): Promise<void> => {
  try {
    const {
      title,
      description,
      status,
      priority,
      tags,
      startDate,
      dueDate,
      points,
      projectId,
      authorUserId,
      assignedUserId,
    } = request.body;
    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        status,
        priority,
        tags,
        startDate,
        dueDate,
        points,
        projectId,
        authorUserId,
        assignedUserId,
      },
    });
    response.status(201).json(newTask);
  } catch (err) {
    console.log("Error in createTask controller", err);
    response.status(500).json({ Message: "Internal server error" });
  }
};

export const updateTask = async (
  request: Request,
  response: Response
): Promise<void> => {
  try {
    const { taskId } = request.params;
    const { status } = request.body;
    const updatedTask = await prisma.task.update({
      where: {
        id: Number(taskId),
      },
      data: {
        status: status,
      },
    });
    response.status(200).json(updatedTask);
  } catch (err) {
    console.log("Error in updateTask controller", err);
    response.status(500).json({ Message: "Internal server error" });
  }
};
