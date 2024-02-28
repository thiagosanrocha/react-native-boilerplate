import {fakeRequest} from '../../../utils/fakeRequest';
import {AuthCredentials} from '../models/authCredentials';

const mockEmailError = 'emailfail@mail.com';

export async function signInRequest(credentials: AuthCredentials) {
  const data = {
    token: new Date().getTime().toString(),
    refreshToken: new Date().getTime().toString(),
  };

  const response = await fakeRequest(data, {
    hasError: credentials.email === mockEmailError,
  });

  return response;
}
