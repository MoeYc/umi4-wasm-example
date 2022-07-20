

class Rocket  {

  constructor(){
    this.instance = undefined;
  }

  init(onReady,OnError){
    import("../index.js")
      .then((module) => {
        console.log('ooooo')
        this.instance = module;
        this.mount();
        this.merge();
        onReady();
      })
      .catch(OnError);
  };

  mount(){
    if (!window.maliang) window.maliang = {};
    window.maliang.rocket = this.instance;
  }

  merge(){
    Object.assign(this,this.instance);
  }

}
 
console.log('ooooo')

let rocket = new Rocket();
// rocket.init("../plg/index.js",ready,error);
rocket.init(ready,error);

function ready(){
  // rocket.mount();
  let ver = rocket.ver();
  console.log("rocket verision:",ver);
  console.log(new Data)
}

function error(e){
  // console.error(e)
}
