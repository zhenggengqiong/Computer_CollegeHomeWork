###  大二课程Web前端开发实验作业

> 实验内容及要求：
>
> 设计实现一个网页前端程序“网页计算器”，完成以下内容：
>
> 1）设计“网页计算器”，模拟实体计算器外观； 
>
> 2）设置页面元素的id供JavaScript控制；
>
> 3）编写外部JavaScript脚本实现用户交互；
>
> 4）实现基本四则运算。
>
> 要求：
>
> 1）有详细的功能描述、界面交互设计描述；
>
> 2）有解决方案（原理）描述；
>
> 3）有关键代码及注解。

#####  功能描述及关键代码

######  加、减、乘、除、除余的计算，和删除、清空的功能。

```javascript
<script>
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
	var backSpace=function(){
		var input = document.getElementById('input');
		//文本框的值的长度减一，实现删除
		input.value = input.value.substr(0,input.value.length-1);
	}
	
	Document.getElementById( 'AC')= function(){
		var input = document.getElementById('input');
		//文本框的值清空为0
		input.value = "0";
	}
//改变样式
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
	}	</script>
```

#####  实验结果及分析

######  可以进行运算和删除、清空功能。

######  先搭建计算机结构和css样式，用的div和position和float。每个符号的onClick事件都等于 取值函数get()，输出到文本框中。等于的onClick等于对应函数，计算结果，如果错误，返回ERROR。

######  通过setAttribute函数改变css样式,并用全局变量计数 

######  用document.getElementById(‘id’)获取id；onClick = function() 可以写点击时的操作；

######  eval(str)可以自动返回计算字符串的结果，错误则抛出异常；

######  .indexOf(x) 返回x的角标，如果没有则返回-1；

######  .length 返回长度





