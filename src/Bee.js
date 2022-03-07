class Bee extends Grub{
  // TODO..
  constructor(){
    // super();  //wat? calls a super without para and that's it ?  Man
    //ok so we call super() inside of the constructor, to inherite from Grub
    super()
    this.age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing'
  }

  // constructor(food){
  //   // if we do take in food as para and call super on food, it will only inherite food property?
  //   super(food)
  //   this.age = 5;
  //   this.color = 'yellow';
  //   this.job = 'Keep on growing'
  // }

};
