import Cookies from 'js-cookie';

const isAuthenticated = () => {
  const accessToken = Cookies.get('access_token');

  if (!accessToken) {
    // Токен отсутствует, пользователь не авторизован
    return false;
  }

  // Ваш код для проверки валидности токена, например, отправка запроса к серверу

  // Вернуть true, если токен валиден, иначе false
  return true;
};

export default isAuthenticated;