//with class

class Place {
  constructor(name, classs) {
    this.name = name;
    this.classs = classs;
  }

  getinfo() {
    console.log(`${this.name}, ${this.classs}`);
  }
}

const np = new Place("Delhi", "A");
np.getinfo();

//wihtout class

const Place = {
  name: "Delhi",
  classs: "A",

  getinfo() {
    console.log(`${this.name}, ${this.classs}`);
  }
};

Place.getinfo();

