//Дан массив.Проверить, одинаковые ли элементы в массиве.

const arr = [1, 2, 3, 3]

let isEqual = true;
const reference = arr[0];

for (let item of arr) {
	if (item !== reference) {
		isEqual = false;
	}
}

console.log(isEqual)// в косоль вышло false.Не одинаковые 