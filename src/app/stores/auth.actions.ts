export class Login {
  static readonly type = '[Auth] Login';
  constructor(public login: string, public password: string) { }
}

export class Logout {
  static readonly type = '[Auth] Logout';
}

export class SetState {
  static readonly type = '[Auth] SetState';
  constructor(public authenticated: boolean, public error: Error = null) { }
}
