// Khai bao hang

const tenHang = giatri;

// // Quy tac ten hang
// start with character or _
// Not start with number
// Unlimit length

// Khai bao bien
var tenbien = Giatri;

// Hien thi du lieu 
// C1: dung document.write() hoac document.writeln()
// C2: dung console.log()

// Break

for (var i=0; i<=10; i++){

    document.write(i)
    
    if (i==5){
        break;s
    }
}

// Countinue
for (var i=0; i<=10; i++){
    
    if (i==5){
        countinue;
    document.write(i + "<br>");
    }
}

//Function
function funName(){
    //Code
}

function getWebsite(){
    document.write('Http://toidicode.com');
}

 //Functin co tham so truyen vao

 function funName(param_1,..., param_n){
    //Code
 }

 function getSum(a,b){
     document.write('Tong: '+(a+b));
 }

 // function co tham so mac dinh
 
 function funName(param_1=value_1,..., param_n=value_n){
     //Code
 }

 function getSum(a=1, b=2){
    document.write('Tong: '+(a+b));

//Ham co gia tri tra va khong

function getSum(a=1, b=2){
    return a+b;
}

// Goi ham

funName();

// Hien thi thong bao ra man hinh trong javascript

// Ham alert()

alert(content);

alert('hoc lap trinh online toi dicodedao.com');

// Ham confirm

confirm(content);

if (confirm('Ban co phai fan cua toidicode.com khong?')){
    document.write('Cam on ban rat nhieu');
} else {
    document.write('Sao the ban?');
}

// Ham prompt()

if (resutl = confirm('Chao ban, nam nay ban bao nhieu tuoi?')){
    document.write(resutl);
} else {
    document.write('Sao khong tra loi a ban?');
}

// Mang trong javascript

// Khai bao mang
var arr = [value1, value2, ... , valuen];
//Khai bao mang bang new array

var arr=new Array(value1, value2, ... , valuen);

//Ham xu ly mang

arr.length;
var arr= new Array(1, 2, 4, 5, 9, 6);
alert(arr.length);

//Ham join 

arr.join(string);

// Ham valueOf()


// Ham push()


// Ham pop()


// Ham unshift()

//Ham shift()

//Ham splice()

//Ham concat()

//Ham slice()

//Ham sort()

//Ham reverse()


//DOM elements trong javascript

//DOM Document Object Model

// Tim the HTML thong qua id

document.getElementById('idName');

//Vd 

// <!DOCTYPE html>
// <html>

// <head>
//     <meta charset="utf-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <title>Toidicode.com javascript</title>
// </head>

// <body>
// <div id="hello">Chào mừng các bạn đến với website học lập trình online</div>
// <div id="toidicode">TOIDICODE.COM</div>

// <script type="text/javascript">
//     var element = document.getElementById('toidicode');
//     var content = element.innerHTML;
//     alert(content);
// </script>
// </body>

// </html>


// Tim the HTML thong qua class

document.getElementByclassName('className');
document.getElementByTagName('tagName');

// This trong javascript

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>toidicode.com</title>
</head>
<body>
    <div>Click vào các button để xem kết quả</div>
	<button onclick="showInfo(this)" > button1</button>
	<button onclick="showInfo(this)" > button2</button>
	<button onclick="showInfo(this)" > button3</button>
	<button onclick="showInfo(this)" > button4</button>
	<script type="text/javascript">
		function showInfo(e)
		{
			alert(e.innerText);
		}
	</script>
</body>

</html>


addEventListener()
removeEventListener()

element.addEventListener('eventName', functionName);

element.addEventListener('eventName', function() {
    //CODE
})


{/* <!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>toidicode.com</title>
	<link rel="stylesheet" href="">
</head>

<body>
	<div>Click vào chữ '<em>click</em>' để xem kết quả</div>
	<p id="container"> Click</p>
	<script type="text/javascript">
		var element = document.getElementById('container');
		element.addEventListener('click', function() {
			alert('Bạn vừa click');
		})
	</script>
</body>

</html> */}

element.removeEventListener('eventName', functionName, option);

{/* <!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>toidicode.com</title>
	<link rel="stylesheet" href="">
</head>

<body>
	<div>Click vào chữ '<em>click</em>' để xem kết quả</div>
	<p id="container">Click</p>
	<script type="text/javascript">
		var element = document.getElementById('container');
		element.addEventListener('click', getClick );
		function getClick()
		{
			alert('Bạn vừa click');
		}
		element.removeEventListener('click', getClick);
	</script>
</body>

</html> */}



