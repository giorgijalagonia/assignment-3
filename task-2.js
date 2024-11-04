function findCity(user) {
  if (
    user &&
    user.banks &&
    user.banks[2] &&
    user.banks[2].address &&
    user.banks[2].address.city
  ) {
    return user.banks[2].address.city;
  }
  return undefined;
}
