//1.组成不同三位数
function ott() {
	var count = 0;
	for(var i = 1; i < 5; i++) {
		for(var j = 1; j < 5; j++) {
			for(var u = 1; u < 5; u++) {
				if(i != j && i != u && j != u) {
					count++;
					console.log(i * 100 + j * 10 + u)
				}
			}
		}
	}
	alert("运算完毕，共能组成" + count + "个不同的三位数，请查看控制台")
}

//2.企业奖金问题
function getComm() {
	var a = document.getElementById('t2').value
	var money = 0
	if(a <= 100000) {
		money = a * 0.1;
		alert("奖金应为" + money.toFixed(2) + "元")
	} else if(a >= 100000 && a <= 200000) {
		money = (a - 100000) * 0.075 + 100000 * 0.1
		alert("奖金应为" + money.toFixed(2) + "元")
	} else if(a >= 200000 && a <= 400000) {
		money = (a - 200000) * 0.05 + 100000 * 0.075 + 100000 * 0.1
		alert("奖金应为" + money.toFixed(2) + "元")
	} else if(a >= 400000 && a <= 600000) {
		money = (a - 400000) * 0.03 + 200000 * 0.05 + 100000 * 0.075 + 100000 * 0.1
		alert("奖金应为" + money.toFixed(2) + "元")
	} else if(a >= 600000 && a <= 1000000) {
		money = (a - 600000) * 0.015 + 200000 * 0.03 + 200000 * 0.05 + 100000 * 0.075 + 100000 * 0.1
		alert("奖金应为" + money.toFixed(2) + "元")
	} else if(a > 1000000) {
		money = (a - 1000000) * 0.01 + 400000 * 0.015 + 200000 * 0.03 + 200000 * 0.05 + 100000 * 0.075 + 100000 * 0.1
		alert("奖金应为" + money.toFixed(2) + "元")
	} else {
		alert("您输入有误，请重新输入")
	}
}

//3.完全平方数问题
function isInteger(i) {
	return parseInt(i, 10) === i
}

function msgNum() {
	for(var x = 1; x < 10000; x++) {
		if(isInteger(Math.sqrt(x + 100)) == true && isInteger(Math.sqrt(x + 268)) == true) {
			console.log("该数字为" + x) //我是上面的console
			alert("运算完毕，请查看控制台")
		}
	}
}

//4.判断某日是今年第几天的问题
//判断是否为闰年的方法
function isRun(year) {
	if(year % 4 == 0 || year % 400 == 0 && year % 100 != 0) {
		return true
	} else {
		return false
	}
}

function whatDay() {
	//获取用户输入的年月日字符串
	var year = document.getElementById('t4-1').value;
	var month = document.getElementById('t4-2').value;
	var day = document.getElementById('t4-3').value;
	var result = 0;

	//判断输入是否为空
	if(year.length < 1 || month.length < 1 || day.length < 1) {
		alert("您输入为空，请重新输入")
	} else {
		//给年月日转换成Number类型
		year = parseInt(year);
		month = parseInt(month);
		day = parseInt(day);
		//定义月份数组
		var arr = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
		//判断是否为闰年，再给相对应月份的天数赋值
		if(isRun(year) == true) {
			arr[1] = 29
		}
		//判断输入值是否为数字/输入值是否为负/输入天和月是否正确
		if(isNaN(year) || isNaN(month) || isNaN(day) || day > arr[month - 1] || year < 1 || month < 1 || day < 1 || month > 12) {
			alert("您输入有误！请重新输入数字")
		} else { //循环遍历之前每月天数
			for(var i = 0; i < month - 1; i++) {
				result = result + arr[i]
			}
			result = result + day;
			alert(year + "年" + month + "月" + day + "日 是这一年的第" + result + "天")
		}
	}
}

//5.三个数从小到大
function smallToBig() {
	var sNum1 = document.getElementById('t5-1').value;
	var sNum2 = document.getElementById('t5-2').value;
	var sNum3 = document.getElementById('t5-3').value;

	if(sNum1.length < 1 || sNum2.length < 1 || sNum3.length < 1) {
		alert("您输入为空，请重新输入")
	} else {
		sNum1 = parseInt(sNum1);
		sNum2 = parseInt(sNum2);
		sNum3 = parseInt(sNum3);
	}
	var arr = [sNum1, sNum2, sNum3];
	for(var i = 0; i < arr.length - 1; i++) {
		for(var j = i + 1; j < arr.length; j++) {
			if(arr[i] > arr[j]) {
				arr[i] = arr[i] + arr[j];
				arr[j] = arr[i] - arr[j];
				arr[i] = arr[i] - arr[j];
			}
		}
	}
	alert(arr)
}

//8.九九乘法口诀表
function nineNine() {
	var Cnum = document.getElementById('t8').value;
	//传递参数
	var Anum = parseInt(Cnum) + 2;
	//定义字符串数组
	var strArr = [];
	//定义空字符串
	var str3 = ""
	for(var num = Anum; num >= 1; num--) {
		str3 = ""
		for(var i = 1; i <= num; i++) {
			var str1 = (i + "*" + num + "=" + i * num);
			for(var j = 1; j < num; j++) {
				var str2 = (j + "*" + (num - 1) + "=" + j * (num - 1));
			}
			for(var count = 0; count <= str2.length; count++) {
				str1 = str1 + "&nbsp;";
			}
			str3 = str3 + str1;
		}
		str3 = str3.substring(0, str3.length - str2.length * 6);
		if(num < Anum - 1) {
			var temp = 0;
			temp = (strArr[Anum - 1].length) - (str3.length);
			for(var Acount = 0; Acount <= temp / 5.2; Acount++) {
				str3 = "&nbsp;" + str3;
			}
		}
		strArr[num - 1] = str3;
	}
	for(var sel = 0; sel < strArr.length - 2; sel++) {
		document.write(strArr[sel]);
		document.write("</br>");
		document.write("</br>");
	}
}

//11.兔子生崽
//(1) 递归算法
function rabbitMonth() {
	//月份
	var num = document.getElementById('t11').value;
	num = parseInt(num);
	var result = fact(num);
	alert(num + "个月后共有" + result + "对兔子")
}
function fact(num) {
	if(num == 1 || num == 2) {
		return 1;
	} else {
		return fact(num - 1) + fact(num - 2);
	}
}
//(2) 动态规划算法
function rabbitMonth2(){
	//获取页面传递过来的值
	var num = document.getElementById('t11').value;
	num = parseInt(num);
	//定义数组长度
	var month = [num + 1];
	//定义数组初值，第0个月没有兔子，第1个月为一对兔子
	month[0] = 0;
	month[1] = 1;
	//for循环下去，第N个月的兔子数量是---第(N-1)个月的兔子数量+第(N-2)个月的兔子数量
	for (var i = 2; i <= num; i++) {
		month[i] = month[i-1] + month[i-2];
	}
	//这样做的好处是不被太多的return 1占用内存和运算次数，递归的运算次数太多，动态规划可以更好的执行斐波那契数列的计算（因为用数组存储了每个月的兔子数量）
	alert(num + "个月后共有" + month[num] + "对兔子")
}