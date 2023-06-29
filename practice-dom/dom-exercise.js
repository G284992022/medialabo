//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let p1 = document.querySelector('h2#ex42'); 
let x1 = document.createElement('p'); 
x1.textContent = '写真表と都市の緯度軽度のページです'; 
x1.style.textEmphasis = 'sesame green';
p1.insertAdjacentElement('afterend',x1); 

// 練習4-3 写真表作成プログラム
let p4 = document.querySelector('div#phototable');
let x4_1 = document.createElement('img');
x4_1.src = "taro.png";  
let x4 = document.createElement('p');
x4.insertAdjacentElement('beforeend',x4_1); 
p4.insertAdjacentElement('beforeend',x4);
x4_1 = document.createElement('img');
x4_1.src = "jiro.png";  
x4 = document.createElement('p');
x4.insertAdjacentElement('beforeend',x4_1); 
p4.insertAdjacentElement('beforeend',x4); 
x4_1 = document.createElement('img');
x4_1.src = "hanako.png";  
x4 = document.createElement('p');
x4.insertAdjacentElement('beforeend',x4_1); 
p4.insertAdjacentElement('beforeend',x4); 

// 練習4-4 箇条書き削除プログラム
let p2 = document.querySelectorAll('ul#location > li');
for(let n of p2){
	n.remove();
}

// 練習4-5 箇条書き追加プログラム
let p3 = document.querySelector('ul#location');

for(let n of data){
	let x3 = document.createElement('li');
	x3.textContent=n.name + ' ... 緯度:' + n.lat + ',経度:' + n.lng;
	p3.insertAdjacentElement('beforeend',x3);
} 