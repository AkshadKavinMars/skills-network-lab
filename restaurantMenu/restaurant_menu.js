const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const BreakfastMenuHTML = breakfastMenu.map((item,index) => `<p> Items ${index+1}: ${item}</p>`).join(' ')
document.getElementById("breakfastMenuItems").innerHTML = BreakfastMenuHTML

const mainCourseMenuHTML = mainCourseMenu.map((item,index) => `<p> Index ${index+1}: ${item}</p>`).join(" ")
document.getElementById("maincourseMenuItems").innerHTML = mainCourseMenuHTML