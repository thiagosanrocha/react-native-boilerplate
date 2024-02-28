import {fakeRequest} from '../../../utils/fakeRequest';

export async function getProfileById(id: string) {
  const profile = await fakeRequest({
    name: 'User Fake',
    email: 'email@mail.com',
  });

  return profile;
}
