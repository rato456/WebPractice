//<%@ page language="java"; contentType="text/html"; charset="UTF-8"; pageEncoding="UTF-8";%>

var chance = false;
var timeoutComputer;
var rps = ["바위", "보", "가위"];
var computer_rps;
var user_rps;
var consecutive_victory = 0;

function computer()
{
	chance = true;
	computer_rps = Math.round(Math.random() * 100) % 3;
	document.getElementById("computer").innerHTML = rps[computer_rps];
}

function startIntervalComputer()
{
	timeoutComputer = setInterval(computer, 100);
}

function user(input)
{
	if (!chance)//기회 없으면 퇴짜
		return;
	chance = false;//기회 있으면 한 번 쓰고 끝
	clearInterval(timeoutComputer);
	user_rps = parseInt(input);
	document.getElementById("user").innerHTML = rps[user_rps];
	judgment();
}

function judgment()
{
	var win = -1;//-1: 패배, 0: 무승부, 1: 승리
	
	switch (computer_rps)
	{
	case 0://바위
		if (user_rps == 1)
			win = 1;
		else
			win = -1;
		break;
	case 1://보
		if (user_rps == 0)
			win = -1;
		else
			win = 1;
		break;
	case 2://가위
		if (user_rps == 0)
			win = 1;
		else
			win = -1;
		break;
	}
	if (computer_rps == user_rps)//무승부라면 정정
		win = 0;

	result(win);
	chance = false;
}

function result(win)
{
	//document.getElementById("debug").innerHTML = computer_rps;
	switch (win)
	{
	case 1:
		document.getElementById("result").innerHTML = "승리";
		consecutive_victory++;
		document.getElementById("consecutive_victory").innerHTML = consecutive_victory + " 연승 중!";
		break;
	case 0:
		document.getElementById("result").innerHTML = "무승부";
		break;
	case -1:
		document.getElementById("result").innerHTML = "패배";
		consecutive_victory = 0;
		document.getElementById("consecutive_victory").innerHTML = consecutive_victory + " 연승 중!";
		break;
	}
}

/*수정할 것
- 멘트 추가하기
- 닉네임 입력받기
*/