export const postUser = (authUser) =>
  fetch('https://614b503de4cc2900179eb033.mockapi.io/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(authUser),
  }).then((response) => response.json());
export const fetchUser = () =>
  fetch('https://614b503de4cc2900179eb033.mockapi.io/users').then((response) =>
    response.json()
  );
