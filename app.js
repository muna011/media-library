class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
    set isCheckedOut(newIsCheckedOut) {
      this._isCheckedOut = newIsCheckedOut;
    }
  
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut
    }
    getAverageRating() {
      let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
      let lengthOfArray = this._ratings.length;
      return ratingsSum/lengthOfArray;
    }
    addRating(rating) {
      this._ratings.push(rating);
    }
  
  }
  
  //Book Class 
  class Book extends Media {
    constructor(title, author, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
  }
  
  //Movie Class 
  class Movie extends Media {
    constructor(title, director, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
  }
  
  const anElementalThing = new Book("An Elemental Thing", "Eliot Weinberger", 194);
  
  anElementalThing.toggleCheckOutStatus();
  console.log(anElementalThing.isCheckedOut);
  
  anElementalThing.addRating(4);
  anElementalThing.addRating(5);
  anElementalThing.addRating(5);
  console.log(anElementalThing.getAverageRating());
  
  const holyMotors = new Movie("Holy Motors", "Leos Carax", 116);
  
  holyMotors.toggleCheckOutStatus();
  console.log(holyMotors.isCheckedOut);
  
  holyMotors.addRating(5);
  holyMotors.addRating(3);
  holyMotors.addRating(4);
  console.log(holyMotors.getAverageRating());