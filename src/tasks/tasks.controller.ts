import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post('/create')
  @UseGuards(AuthGuard) // Применяем Auth Guard к этому маршруту
  async createTask(@Body() createTaskDto: CreateTaskDto, @Request() req) {
    const userId = req.user.id;
    console.log(req.user)
    return this.tasksService.createTask(createTaskDto, userId);
  }
}
