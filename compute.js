// JavaScript Document
//compute_计算器
//获取按键的值，并输入进文本框
	var get = function(x){
		var input = document.getElementById('input');
		//默认为0，输入时清空
		if(input.value == 0){
			input.value = "";
		}
		//输入进文本框
		input.value += document.getElementById(x.id).value;
	}
	//小数点的点击操作
	var Point = function(){
		var input = document.getElementById('input');
		//控制不能有多个小数点
		if(input.value.indexOf('.')==-1){
		   input.value+='.';
		}
	}
	//等号的点击操作
	var is = function(){
		var input = document.getElementById('input');
		//判断输入的操作是否错误
		try{
			var sum = eval(input.value);
			//控制不能有多个等号，并输出等号
			if(input.value.indexOf('=')==-1){
				input.value += '=';	
			}
			//输出计算结果
			input.value += sum;
		}catch(e){
			//如果出错，文本框的值变为ERROR
			input.value += "=ERROR";
		}
	}
	//退格DEL的点击操作
	var backSpace = function(){
		var input = document.getElementById('input');
		//文本框的值的长度减一，实现删除
		input.value = input.value.substr(0,input.value.length-1);
	}
	//AC按钮 清零功能
	document.getElementById('AC').onclick = function(){
		var input = document.getElementById('input');
		input.value = "0";
	}
	//改变样式 全局变量计数
	var count = 1;
	var change = function(){
		var button = document.getElementById("css");
		if(document.getElementById("change").onclick){
			count++;	
		}
		if(count%2==0){
			button.setAttribute("href","compute2.css");
		}else{
			button.setAttribute("href","compute.css");
		}
	}
