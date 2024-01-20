function saturdayFun(target = "roller-skate") {
    return (`This Saturday, I want to ${target}!`);
  } 
  
  function mondayWork(target = "go to the office") {
    return (`This Monday, I will ${target}.`);
  } 
  
  function wrapAdjective(symb="%") {
    return function inner(name = "special") {
      return (`You are ${symb}${name}${symb}!`);
    };
  }