class Form {

    constructor() {
    
      this.input = createInput("Name");
      this.button = createButton('Next');
     this.image = loadImage("loadingScreen.png");
    }
    hide(){
   
      this.button.hide();
      this.input.hide();
      
      //this.charizard.hide();
    }
  
    display(){
      //background(this.image)
        image(bgImg,100,100,500,500)
      imageMode(CENTER)
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
    
     this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        script = new Script()
        script.display();
        
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        
      });
  
  
    }
    
  
  }
  