import { Request, Response } from 'express';
import { getExamAllocationData, randomizeAllocation, getAllocationHistory } from './allocation.service';
import { AuthRequest } from '../../middlewares/auth.middleware';

export async function getExamData(req: AuthRequest, res: Response) {
  try {
    const examId = parseInt(req.query.examId as string);
    if (isNaN(examId)) return res.status(400).json({ error: "Invalid examId" });

    const data = await getExamAllocationData(examId);
    res.json(data);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
}

export async function randomize(req: AuthRequest, res: Response) {
  try {
    const { subjectId, shiftId } = req.body;
    const userId = req.user!.id;

    const result = await randomizeAllocation({ subjectId: parseInt(subjectId), shiftId: parseInt(shiftId), userId });
    res.json(result);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
}

export async function getHistory(req: AuthRequest, res: Response) {
  try {
    const history = await getAllocationHistory();
    res.json({ history });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
}
