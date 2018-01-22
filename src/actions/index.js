export function getUser(data) {
  return {
    type: "GET_USER",
    name: data.name,
    horoscopes: data.horoscopes
  };
}
