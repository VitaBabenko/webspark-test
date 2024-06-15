const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const icon1 = document.getElementById('icon1');
const icon2 = document.getElementById('icon2');
const list1 = document.getElementById('list1');
const list2 = document.getElementById('list2');

list2.classList.add('hidden');
icon1.classList.add('active');

btn1.addEventListener('click', function () {
	console.log('click');
	list1.classList.remove('hidden');
	icon1.classList.add('active');

	list2.classList.add('hidden');
	icon2.classList.remove('active');
});

btn2.addEventListener('click', function () {
	list2.classList.remove('hidden');
	icon2.classList.add('active');

	list1.classList.add('hidden');
	icon1.classList.remove('active');
});
