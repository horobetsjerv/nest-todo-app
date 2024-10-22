import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service'; // Импортируйте ваш AuthService для валидации токена

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1]; // Извлекаем токен из заголовка

    if (!token) {
      throw new UnauthorizedException('Токен отсутствует'); // Если токен не предоставлен, выбрасываем исключение
    }

    const user = await this.authService.validateToken(token); // Проверяем токен с помощью вашего AuthService

    if (!user) {
      throw new UnauthorizedException('Неверный токен'); // Если токен недействителен, выбрасываем исключение
    }

    request.user = user; // Если токен действителен, добавляем пользователя в объект запроса
    return true; // Разрешаем доступ
  }
}
