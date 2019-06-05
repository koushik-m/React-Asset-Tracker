/* eslint-disable no-unused-vars */
class AuthStore {
  user;
  authService = new AuthService();

  async login() {
    try {
      const user = await authService.login('', '');
      this.user = user;
    } catch (ex) {
      this.user = undefined;
    }
  }

  logout() {}
}
