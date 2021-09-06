
for(var i=0; i<document.querySelectorAll(".drum").length; i++ ) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick) ;

  function handleClick(){
    var buttonInnerHTML=this.innerHTML;

    switch (buttonInnerHTML) {
      case "M":
      var tom1=new Audio("sounds/fake love.mp3")  ;
      tom1.play();

        break;
        case "R.":
        var tom2=new Audio("sounds/Dynamite.mp3")  ;
        tom2.play()

          break;
          case "P":
          var tom3=new Audio("sounds/I'm fine.mp3")  ;
          tom3.play();

            break;
            case "L":
            var tom4=new Audio("sounds/Blood, Sweat and Tears.mp3")  ;
            tom4.play();

              break;
              case "O":
              var snare=new Audio("sounds/snare.mp3")  ;
              snare.play();

                break;
                case "Y":
                var crash=new Audio("sounds/crash.mp3")  ;
                crash.play();

                  break;
    case "E":
        var kick=new Audio("sounds/Pied Piper.mp3")  ;
        kick.play();

          break;
          default:

    }
  //;


}

}
