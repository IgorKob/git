// Камінь б’є Ножиці
// Ножиці б'ють папір
// Папір б'є Камінь
//kim
function rps(p1, p2) {
	let p11 = 5;
	let p22 = 5;
	if (p1 == "Rock") {
		if (p2 == "Paper") {
		  p22 += 2;
	  }
	  if (p2 == "Scissors") {
	  	p22 -= 1;
    }
		p11 += 1;
	}
	//
	if (p2 == "Rock") {
	  if (p1 == "Paper") {
		  p11 += 2;
	  }
	  if (p1 == "Scissors") {
		  p11 -= 1;
	  }
		p22 += 1;
	}
	//
	if (p1 == "Paper") {
	  if (p2 == "Rock") {
		  p22 -= 1;
	  }
	  if (p2 == "Scissors") {
	  	p22 += 2;
	  }
	  p11 += 1;
	}
	//
	if (p2 == "Paper") {
		if (p1 == "Rock") {
	  	p11 -= 1;
	  }
	  if (p1 == "Scissors") {
		  p11 += 2;
	  }
		p22 += 1;
	}
	//
	if (p1 == "Scissors") {
		if (p2 == "Rock") {
	  	p22 += 2;
	  }
	  if (p2 == "Paper") {
	  	p22 -= 1;
	  }
		  p11 += 1;
	}
	//
	if (p2 == "Scissors") {
		if (p1 == "Rock") {
		  p11 += 2;
	  }
	  if (p1 == "Paper") {
		  p11 -= 1;
	  }
		p22 += 1;
	}
	return p11>p22 ? 'The winner is p1' : p11<p22 ? 'The winner is p2' : "It's a draw";
}
//
function rps(p1, p2) {
  let w = {
    Rock: "Scissors",
    Scissors: "Paper",
    Paper: "Rock"
  }
  if (p1 === p2) return "It's a draw"
	return `The winner is ${w[p1] === p2 ? 'p1' : 'p2'}`
}
//
const rps = (p1, p2) => {
	dic = {Rock: 'Scissors', Scissors: 'Paper', Paper: 'Rock'};
	return p1==p2? "It's a draw" : `The winner is p${2-(dic[p1]==p2)}`;
};
//
function rps(p1, p2) {
	return p1 === p2 ? "It's a draw" :
		(p1 === 'Rock' && p2 === 'Scissors') ||
		(p1 === 'Scissors' && p2 === 'Paper') ||
		(p1 === 'Paper' && p2 === 'Rock') ? "The winner is p1" : "The winner is p2";
}
//
