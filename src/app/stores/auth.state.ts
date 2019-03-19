// authentication state example
// https://ngxs.gitbook.io/ngxs/recipes/authentication

import { State, Action, StateContext, Selector } from '@ngxs/store';
import { throwError } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { Login, Logout } from './auth.actions';

interface AuthStateModel {
  authenticated: boolean;
  error: Error;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    authenticated: false,
    error: null,
  },
})
export class AuthState {

  constructor(private authService: AuthService) {}

  @Selector()
  static authenticated(state: AuthStateModel) {
    return state.authenticated;
  }

  @Action(Login)
  login({ setState }: StateContext<AuthStateModel>,  { username, password }: Login) {
    const onLogin = () => { setState({ authenticated: true, error: null }); };
    const onError = (error: Error) => {
      setState({
        authenticated: false,
        error,
      });
      return throwError(error);
    };
    this.authService.login(username, password).subscribe(
      onLogin,
      onError,
    );
  }

  @Action(Logout)
  Logout({ setState }: StateContext<AuthStateModel>) {
    setState({
      authenticated: false,
      error: null,
    });
  }
}
