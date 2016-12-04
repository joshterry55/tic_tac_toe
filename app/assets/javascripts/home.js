$(document).ready(function() {
  // var $card1 = $('#card1');
  var $spot1 = $('#spot1');
  var $spot2 = $('#spot2');
  var $spot3 = $('#spot3');
  var $spot4 = $('#spot4');
  var $spot5 = $('#spot5');
  var $spot6 = $('#spot6');
  var $spot7 = $('#spot7');
  var $spot8 = $('#spot8');
  var $spot9 = $('#spot9');
  var $xWins = $('#x-wins');
  var $oWins = $('#o-wins');
  var $result = $('#result');
  var $playAgain = $('#play-again');
  var choices = ["spot1", "spot2", "spot3", "spot4", "spot5", "spot6", "spot7", "spot8", "spot9"]
  var $playSinglePlayer = $('#play-single-player');
  var $play2Player = $('#play-2-player')

  var totalClicks = 0
  var xWinsCount = 0
  var oWinsCount = 0
  var playComputer = 0

  var $placeHolder = $('.selected');

  $playSinglePlayer.click(function() {
    playComputer += 1
    $playSinglePlayer.removeClass('blue')
    $playSinglePlayer.addClass('red')

    $play2Player.removeClass('red')
    $play2Player.addClass('blue')

  });

  $play2Player.click(function() {
    playComputer = 0
    $playSinglePlayer.removeClass('red')
    $playSinglePlayer.addClass('blue')

    $play2Player.removeClass('blue')
    $play2Player.addClass('red')
  });

  function computerRandomize() {
    if(playComputer != 0) {
      var index = Math.floor(Math.random() * choices.length)
      var compSelection = choices[index]
      if(compSelection === "spot1") {
        if($spot1.hasClass('selected')) {
          $spot1.removeClass('selected');
          $spot1.addClass('blue-o')
          totalClicks += 1
        } else {
          computerRandomize()
        }
      }
      if(compSelection === "spot2") {
        if($spot2.hasClass('selected')) {
          $spot2.removeClass('selected');
          $spot2.addClass('blue-o')
          totalClicks += 1
        } else {
          computerRandomize()
        }
      }
      if(compSelection === "spot3") {
        if($spot3.hasClass('selected')) {
          $spot3.removeClass('selected');
          $spot3.addClass('blue-o')
          totalClicks += 1
        } else {
          computerRandomize()
        }
      }
      if(compSelection === "spot4") {
        if($spot4.hasClass('selected')) {
          $spot4.removeClass('selected');
          $spot4.addClass('blue-o')
          totalClicks += 1
        } else {
          computerRandomize()
        }
      }
      if(compSelection === "spot5") {
        if($spot5.hasClass('selected')) {
          $spot5.removeClass('selected');
          $spot5.addClass('blue-o')
          totalClicks += 1
        } else {
          computerRandomize()
        }
      }
      if(compSelection === "spot6") {
        if($spot6.hasClass('selected')) {
          $spot6.removeClass('selected');
          $spot6.addClass('blue-o')
          totalClicks += 1
        } else {
          computerRandomize()
        }
      }
      if(compSelection === "spot7") {
        if($spot7.hasClass('selected')) {
          $spot7.removeClass('selected');
          $spot7.addClass('blue-o')
          totalClicks += 1
        } else {
          computerRandomize()
        }
      }
      if(compSelection === "spot8") {
        if($spot8.hasClass('selected')) {
          $spot8.removeClass('selected');
          $spot8.addClass('blue-o')
          totalClicks += 1
        } else {
          computerRandomize()
        }
      }
      if(compSelection === "spot9") {
        if($spot9.hasClass('selected')) {
          $spot9.removeClass('selected');
          $spot9.addClass('blue-o')
          totalClicks += 1
        } else {
          computerRandomize()
        }
      }
    }
}



  // function computerChoice(){
  //   if(compSelection === "spot1") {
  //     if($spot1.hasClass('selected')) {
  //       $spot1.removeClass('selected');
  //       $spot1.addClass('blue-o')
  //       totalClicks += 1
  //     } else {
  //       computerRandomize()
  //     }
  //   }
  //   if(compSelection === "spot2") {
  //     if($spot2.hasClass('selected')) {
  //       $spot2.removeClass('selected');
  //       $spot2.addClass('blue-o')
  //       totalClicks += 1
  //     } else {
  //       computerRandomize()
  //     }
  //   }
  //   if(compSelection === "spot3") {
  //     if($spot3.hasClass('selected')) {
  //       $spot3.removeClass('selected');
  //       $spot3.addClass('blue-o')
  //       totalClicks += 1
  //     } else {
  //       computerRandomize()
  //     }
  //   }
  //   if(compSelection === "spot4") {
  //     if($spot4.hasClass('selected')) {
  //       $spot4.removeClass('selected');
  //       $spot4.addClass('blue-o')
  //       totalClicks += 1
  //     } else {
  //       computerRandomize()
  //     }
  //   }
  // }

  $playAgain.click(function() {
    totalClicks = 0
    $result.text('')
    $spot1.removeClass('blue-x');
    $spot1.removeClass('red-x');
    $spot2.removeClass('blue-x');
    $spot2.removeClass('red-x');
    $spot3.removeClass('blue-x');
    $spot3.removeClass('red-x');
    $spot4.removeClass('blue-x');
    $spot4.removeClass('red-x');
    $spot5.removeClass('blue-x');
    $spot5.removeClass('red-x');
    $spot6.removeClass('blue-x');
    $spot6.removeClass('red-x');
    $spot7.removeClass('blue-x');
    $spot7.removeClass('red-x');
    $spot8.removeClass('blue-x');
    $spot8.removeClass('red-x');
    $spot9.removeClass('blue-x');
    $spot9.removeClass('red-x');
    $spot1.removeClass('blue-o');
    $spot1.removeClass('red-o');
    $spot2.removeClass('blue-o');
    $spot2.removeClass('red-o');
    $spot3.removeClass('blue-o');
    $spot3.removeClass('red-o');
    $spot4.removeClass('blue-o');
    $spot4.removeClass('red-o');
    $spot5.removeClass('blue-o');
    $spot5.removeClass('red-o');
    $spot6.removeClass('blue-o');
    $spot6.removeClass('red-o');
    $spot7.removeClass('blue-o');
    $spot7.removeClass('red-o');
    $spot8.removeClass('blue-o');
    $spot8.removeClass('red-o');
    $spot9.removeClass('blue-o');
    $spot9.removeClass('red-o');
    $spot1.addClass('selected');
    $spot2.addClass('selected');
    $spot3.addClass('selected');
    $spot4.addClass('selected');
    $spot5.addClass('selected');
    $spot6.addClass('selected');
    $spot7.addClass('selected');
    $spot8.addClass('selected');
    $spot9.addClass('selected');
  });

  $spot1.click(function(){

    if(totalClicks % 2 === 0) {
      if($spot1.hasClass('selected')) {
        $spot1.removeClass('selected')
        $spot1.addClass('blue-x');
        totalClicks += 1
        computerRandomize()
      }
    } else if(totalClicks % 2 === 1) {
      if($spot1.hasClass('selected')) {
        $spot1.removeClass('selected')
        $spot1.addClass('blue-o');
        totalClicks += 1
      }
    }
    won()
  });



  $spot2.click(function(){
    if(totalClicks % 2 === 0) {
      if($spot2.hasClass('selected')) {
        $spot2.removeClass('selected')
        $spot2.addClass('blue-x');
        totalClicks += 1
        computerRandomize()
      }
    } else if(totalClicks % 2 === 1) {
      if($spot2.hasClass('selected')) {
        $spot2.removeClass('selected')
        $spot2.addClass('blue-o');
        totalClicks += 1
      }
    }
    won()
  });

  $spot3.click(function(){
    if(totalClicks % 2 === 0) {
      if($spot3.hasClass('selected')) {
        $spot3.removeClass('selected')
        $spot3.addClass('blue-x');
        totalClicks += 1
        computerRandomize()
      }
    } else if(totalClicks % 2 === 1) {
      if($spot3.hasClass('selected')) {
        $spot3.removeClass('selected')
        $spot3.addClass('blue-o');
        totalClicks += 1
      }
    }
    won()
  });

  $spot4.click(function(){
    if(totalClicks % 2 === 0) {
      if($spot4.hasClass('selected')) {
        $spot4.removeClass('selected')
        $spot4.addClass('blue-x');
        totalClicks += 1
        computerRandomize()
      }
    } else if(totalClicks % 2 === 1) {
      if($spot4.hasClass('selected')) {
        $spot4.removeClass('selected')
        $spot4.addClass('blue-o');
        totalClicks += 1
      }
    }
    won()
  });

  $spot5.click(function(){
    if(totalClicks % 2 === 0) {
      if($spot5.hasClass('selected')) {
        $spot5.removeClass('selected')
        $spot5.addClass('blue-x');
        totalClicks += 1
        computerRandomize()
      }
    } else if(totalClicks % 2 === 1) {
      if($spot5.hasClass('selected')) {
        $spot5.removeClass('selected')
        $spot5.addClass('blue-o');
        totalClicks += 1
      }
    }
    won()
  });

  $spot6.click(function(){
    if(totalClicks % 2 === 0) {
      if($spot6.hasClass('selected')) {
        $spot6.removeClass('selected')
        $spot6.addClass('blue-x');
        totalClicks += 1
        computerRandomize()
      }
    } else if(totalClicks % 2 === 1) {
      if($spot6.hasClass('selected')) {
        $spot6.removeClass('selected')
        $spot6.addClass('blue-o');
        totalClicks += 1
      }
    }
    won()
  });
  $spot7.click(function(){
    if(totalClicks % 2 === 0) {
      if($spot7.hasClass('selected')) {
        $spot7.removeClass('selected')
        $spot7.addClass('blue-x');
        totalClicks += 1
        computerRandomize()
      }
    } else if(totalClicks % 2 === 1) {
      if($spot7.hasClass('selected')) {
        $spot7.removeClass('selected')
        $spot7.addClass('blue-o');
        totalClicks += 1
      }
    }
    won()
  });
  $spot8.click(function(){
    if(totalClicks % 2 === 0) {
      if($spot8.hasClass('selected')) {
        $spot8.removeClass('selected')
        $spot8.addClass('blue-x');
        totalClicks += 1
        computerRandomize()
      }
    } else if(totalClicks % 2 === 1) {
      if($spot8.hasClass('selected')) {
        $spot8.removeClass('selected')
        $spot8.addClass('blue-o');
        totalClicks += 1
      }
    }
    won()
  });
  $spot9.click(function(){
    if(totalClicks % 2 === 0) {
      if($spot9.hasClass('selected')) {
        $spot9.removeClass('selected')
        $spot9.addClass('blue-x');
        totalClicks += 1
        computerRandomize()
      }
    } else if(totalClicks % 2 === 1) {
      if($spot9.hasClass('selected')) {
        $spot9.removeClass('selected')
        $spot9.addClass('blue-o');
        totalClicks += 1
      }
    }
    won()
  });

  function won() {
    if($spot1.hasClass('blue-o') && $spot2.hasClass('blue-o') && $spot3.hasClass('blue-o')) {
      $spot1.removeClass('blue-o');
      $spot2.removeClass('blue-o');
      $spot3.removeClass('blue-o');
      $spot1.addClass('red-o');
      $spot2.addClass('red-o');
      $spot3.addClass('red-o');
      totalClicks = undefined
      $oWins.text(oWinsCount += 1)
      $result.text('O Wins!')
    }
    if($spot1.hasClass('blue-o') && $spot4.hasClass('blue-o') && $spot7.hasClass('blue-o')) {
      $spot1.removeClass('blue-o');
      $spot4.removeClass('blue-o');
      $spot7.removeClass('blue-o');
      $spot1.addClass('red-o');
      $spot4.addClass('red-o');
      $spot7.addClass('red-o');
      totalClicks = undefined
      $oWins.text(oWinsCount += 1)
      $result.text('O Wins!')
    }
    if($spot3.hasClass('blue-o') && $spot6.hasClass('blue-o') && $spot9.hasClass('blue-o')) {
      $spot3.removeClass('blue-o');
      $spot6.removeClass('blue-o');
      $spot9.removeClass('blue-o');
      $spot3.addClass('red-o');
      $spot6.addClass('red-o');
      $spot9.addClass('red-o');
      totalClicks = undefined
      $oWins.text(oWinsCount += 1)
      $result.text('O Wins!')
    }
    if($spot7.hasClass('blue-o') && $spot8.hasClass('blue-o') && $spot9.hasClass('blue-o')) {
      $spot7.removeClass('blue-o');
      $spot8.removeClass('blue-o');
      $spot9.removeClass('blue-o');
      $spot7.addClass('red-o');
      $spot8.addClass('red-o');
      $spot9.addClass('red-o');
      totalClicks = undefined
      $oWins.text(oWinsCount += 1)
      $result.text('O Wins!')
    }
    if($spot3.hasClass('blue-o') && $spot5.hasClass('blue-o') && $spot7.hasClass('blue-o')) {
      $spot3.removeClass('blue-o');
      $spot5.removeClass('blue-o');
      $spot7.removeClass('blue-o');
      $spot3.addClass('red-o');
      $spot5.addClass('red-o');
      $spot7.addClass('red-o');
      totalClicks = undefined
      $oWins.text(oWinsCount += 1)
      $result.text('O Wins!')
    }
    if($spot1.hasClass('blue-o') && $spot5.hasClass('blue-o') && $spot9.hasClass('blue-o')) {
      $spot1.removeClass('blue-o');
      $spot5.removeClass('blue-o');
      $spot9.removeClass('blue-o');
      $spot1.addClass('red-o');
      $spot5.addClass('red-o');
      $spot9.addClass('red-o');
      totalClicks = undefined
      $oWins.text(oWinsCount += 1)
      $result.text('O Wins!')
    }
    if($spot2.hasClass('blue-o') && $spot5.hasClass('blue-o') && $spot8.hasClass('blue-o')) {
      $spot2.removeClass('blue-o');
      $spot5.removeClass('blue-o');
      $spot8.removeClass('blue-o');
      $spot2.addClass('red-o');
      $spot5.addClass('red-o');
      $spot8.addClass('red-o');
      totalClicks = undefined
      $oWins.text(oWinsCount += 1)
      $result.text('O Wins!')
    }
    if($spot4.hasClass('blue-o') && $spot5.hasClass('blue-o') && $spot6.hasClass('blue-o')) {
      $spot4.removeClass('blue-o');
      $spot5.removeClass('blue-o');
      $spot6.removeClass('blue-o');
      $spot4.addClass('red-o');
      $spot5.addClass('red-o');
      $spot6.addClass('red-o');
      totalClicks = undefined
      $oWins.text(oWinsCount += 1)
      $result.text('O Wins!')
    }


    if($spot1.hasClass('blue-x') && $spot2.hasClass('blue-x') && $spot3.hasClass('blue-x')) {
      $spot1.removeClass('blue-x');
      $spot2.removeClass('blue-x');
      $spot3.removeClass('blue-x');
      $spot1.addClass('red-x');
      $spot2.addClass('red-x');
      $spot3.addClass('red-x');
      totalClicks = undefined
      $xWins.text(xWinsCount += 1)
      $result.text('X Wins!')
    }
    if($spot1.hasClass('blue-x') && $spot4.hasClass('blue-x') && $spot7.hasClass('blue-x')) {
      $spot1.removeClass('blue-x');
      $spot4.removeClass('blue-x');
      $spot7.removeClass('blue-x');
      $spot1.addClass('red-x');
      $spot4.addClass('red-x');
      $spot7.addClass('red-x');
      totalClicks = undefined
      $xWins.text(xWinsCount += 1)
      $result.text('X Wins!')
    }
    if($spot3.hasClass('blue-x') && $spot6.hasClass('blue-x') && $spot9.hasClass('blue-x')) {
      $spot3.removeClass('blue-x');
      $spot6.removeClass('blue-x');
      $spot9.removeClass('blue-x');
      $spot3.addClass('red-x');
      $spot6.addClass('red-x');
      $spot9.addClass('red-x');
      totalClicks = undefined
      $xWins.text(xWinsCount += 1)
      $result.text('X Wins!')
    }
    if($spot7.hasClass('blue-x') && $spot8.hasClass('blue-x') && $spot9.hasClass('blue-x')) {
      $spot7.removeClass('blue-x');
      $spot8.removeClass('blue-x');
      $spot9.removeClass('blue-x');
      $spot7.addClass('red-x');
      $spot8.addClass('red-x');
      $spot9.addClass('red-x');
      totalClicks = undefined
      $xWins.text(xWinsCount += 1)
      $result.text('X Wins!')
    }
    if($spot3.hasClass('blue-x') && $spot5.hasClass('blue-x') && $spot7.hasClass('blue-x')) {
      $spot3.removeClass('blue-x');
      $spot5.removeClass('blue-x');
      $spot7.removeClass('blue-x');
      $spot3.addClass('red-x');
      $spot5.addClass('red-x');
      $spot7.addClass('red-x');
      totalClicks = undefined
      $xWins.text(xWinsCount += 1)
      $result.text('X Wins!')
    }
    if($spot1.hasClass('blue-x') && $spot5.hasClass('blue-x') && $spot9.hasClass('blue-x')) {
      $spot1.removeClass('blue-x');
      $spot5.removeClass('blue-x');
      $spot9.removeClass('blue-x');
      $spot1.addClass('red-x');
      $spot5.addClass('red-x');
      $spot9.addClass('red-x');
      totalClicks = undefined
      $xWins.text(xWinsCount += 1)
      $result.text('X Wins!')
    }
    if($spot2.hasClass('blue-x') && $spot5.hasClass('blue-x') && $spot8.hasClass('blue-x')) {
      $spot2.removeClass('blue-x');
      $spot5.removeClass('blue-x');
      $spot8.removeClass('blue-x');
      $spot2.addClass('red-x');
      $spot5.addClass('red-x');
      $spot8.addClass('red-x');
      totalClicks = undefined
      $xWins.text(xWinsCount += 1)
      $result.text('X Wins!')
    }
    if($spot4.hasClass('blue-x') && $spot5.hasClass('blue-x') && $spot6.hasClass('blue-x')) {
      $spot4.removeClass('blue-x');
      $spot5.removeClass('blue-x');
      $spot6.removeClass('blue-x');
      $spot4.addClass('red-x');
      $spot5.addClass('red-x');
      $spot6.addClass('red-x');
      totalClicks = undefined
      $xWins.text(xWinsCount += 1)
      $result.text('X Wins!')
    }
    if($result.text() != 'X Wins!' && $result.text() != 'O Wins!') {
      if(!$spot1.hasClass('selected') && !$spot2.hasClass('selected') && !$spot3.hasClass('selected') && !$spot4.hasClass('selected') && !$spot5.hasClass('selected') && !$spot6.hasClass('selected') && !$spot7.hasClass('selected') && !$spot8.hasClass('selected')) {
        if(!$spot9.hasClass('selected')) {
          $result.text('Cat')
        }
      }
    }
  }




});
