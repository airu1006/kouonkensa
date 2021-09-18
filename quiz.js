var quiz = [
    ["paNda", "◯", "×",1],
    ["poketto", "◯","×",1],
    ["basu","◯","×",1],
    ["budo:", "◯","×",2],
    ["mame", "◯","×",2],
    ["megane", "◯","×",2],
    ["mikan","◯", "×",2],
    ["taiko", "◯","×",2],
    ["toke:", "◯", "×",1],
    ["terebi", "◯","×",1],
    ["denwa","◯","×",1],
    ["naiteru", "◯","×",2],
    ["neko", "◯","×",2],
    ["niNdziN", "◯","×",2],
    ["kani","◯", "×",2],
    ["koppu", "◯","×",2],
    ["ke:ki", "◯", "×",1],
    ["kutci", "◯","×",1],
    ["kiriN","◯","×",1],
    ["gakko:", "◯","×",2],
    ["gohan", "◯","×",2],
    ["gju:nju:", "◯","×",2],
    ["sakana","◯", "×",2],
    ["sora", "◯","×",2],
    ["semi", "◯", "×",1],
    ["suika", "◯","×",1],
    ["tsukue","◯","×",1],
    ["dzo:", "◯","×",2],
    ["dzuboN", "◯","×",2],
    ["cinbuN", "◯","×",2],
    ["tco:tco","◯", "×",2],
    ["tci:sai", "◯","×",2],
    ["dzaNkeN", "◯", "×",1],
    ["dzu:su", "◯","×",1],
    ["dziteNca","◯","×",1],
    ["ɸu:sen", "◯","×",2],
    ["çiko:ki", "◯","×",2],
    ["happa", "◯","×",2],
    ["hasami","◯", "×",2],
    ["rappa", "◯","×",2],
    ["robotto", "◯", "×",1],
    ["re:dzo:ko", "◯","×",1],
    ["ringo","◯","×",1],
    ["jakju", "◯","×",2],
    ["jukidaruma", "◯","×",2],
    ["açi", "◯","×",2],
    ["açiru","◯", "×",2],
    ["eNpitsu", "◯","×",2],
    ["usagi","◯", "×",2],
    ["inu", "◯","×",2],
    
    


  ];
  var counter = 0;
  var score = 0;
  var end = false;

  function set(){
    var order = document.getElementById("order");
    var question = document.getElementById("question");
    order.innerHTML ="【第" + (counter + 1) + "問】";
    question.innerHTML = quiz[counter][0];

    for(var i = 1; i < 10; i ++){
        var answer = document.getElementById("answer" + i);
        answer.innerHTML = quiz[counter][i];
      }
  }
  function judge(num){
    if(end){
        return;
      }
    var result = document.getElementById("result");
    var answer = quiz[0][5];
    if( 1 == num){
      result.innerHTML = "正解！";
      score += 1;
    }
    else{
      result.innerHTML = "不正解";
    }
    if(counter == quiz.length - 1){
        result.innerHTML += quiz.length + "問中" + score + "問正解！";
        end = true;
      }
    
      else{
        counter += 1;
        set();
      }
  }
  
