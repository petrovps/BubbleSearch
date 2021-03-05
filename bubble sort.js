/*
Для начала, предлагаю придумать, куда выводить результаты.
JavaScript код может выполняться в браузере, в этому случае программисту доступны методы API браузера такие как console (для вывода значений в консоль браузера) document (для доступа к элементам веб-страницы) и др..
также, JavaScript может выполняться вне браузера, тогда ему не доступна консоль и др. 
Предлагаю записывать результаты в текстовый файлик, для этого напишем небольшую функцию, которую будем вызывать всегда, когда нужно будет записать результат:
*/ 
function log(text)
{
    var file = new ActiveXObject("Scripting.FileSystemObject"); //Объект для работы с файлами
    if(file.FileExists("logfile.txt")){ //нужно проверить, что файл уже не создан, чтобы не пересоздавать его при каждой новой записи
        var f = file.OpenTextFile("logfile.txt", 8, true); //если файл уже есть, то открываем его на редактирование ( ForReading = 1, ForWriting = 2, ForAppending = 8) 
    }
    else{
        var f = file.CreateTextFile("logfile.txt", true); //если файла нет, создаем его в том же каталоге, где запущен наш скрипт
    }
    f.WriteLine(text); // записываем текст в файл
    f.Close(); // не забываем закрыть файл
}


//Создадим новый массив
var newArr = [25,7,13,19,4,28,10,22,31,16];
log("Созданный массив: "+newArr); //выведем его в наш текстовый файл

//напишем функцию сортировки 
function sort(array) { //на вход принимаем массив
    for (j = 0; j < array.length; j++) { //цикл повторяется столько раз, сколько элементов в массиве
      for (i = 0; i < array.length; i++) { // перебираем элементы массива 
        if (array[i] > array[i + 1]) { // попарно сравниваем рядом стоящие элементы и меняем местами значения если первый элемент больше второго
          var temp = array[i]; 
          array[i] = array[i + 1]; 
          array[i + 1] = temp; 
        }  
      }
    }
    return array; // вернем отсортированный массив
  }

  log("Сортированный массив: "+sort(newArr)); //вызовем функцию сортировки и выведем результат в текстовый файл

//бонус: 

//можно создавать массив автоматически
var newArr1 = []; //объявим еще один массив

//теперь наполним массив значениями 
for (i = 0; i<100; i += 3) { //
  newArr1.push(i);
}
log("Созданный автоматически массив: "+newArr1);

//функция перемешивания значений массива
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];        array[j] = temp;
  }
  return array;
}

log("Перемешанный массив: "+shuffleArray(newArr1));
log("Сортированный массив: "+sort(newArr1));

//ну и на всякий случай функция бинарного поиска (проверяет наличие элемента в массиве)
function binarySearch(array, target) {
  var newArray = [];
  var n = Math.floor(array.length / 2);
  if (array.length === 1) {
   if(array[0] === target) {
     return true;
   } 
   else {
     return false;
   }
  }
  else if (array[n] > target) {
    newArray = array.slice(0, n);
    return binarySearch(newArray, target);
  }
  else if (array[n] < target) {
    newArray = array.slice((n + 1), array.length);
    return binarySearch(newArray, target);
  }
}

log("Цифра 15 есть в массиве? = " +binarySearch(newArr1, 15));