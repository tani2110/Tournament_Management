import uid from "uid";

class Team {
  constructor(name, url) {
    this.id = uid;
    this.name = name;
  }
}

export default Team;