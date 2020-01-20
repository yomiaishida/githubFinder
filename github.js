class Github {
  constructor() {
    this.client_id = "beeb3d0268b1d10909ab";
    this.client_secret = "5583a8d3ab5a0657191bf70952e623d908af4855";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}  `
    );

    const profileData = await profileResponse.json();

    return {
      profile
    };
  }
}
