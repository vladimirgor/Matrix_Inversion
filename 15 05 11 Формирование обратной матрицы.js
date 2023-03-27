// Формирование обратной матрицы
// Вычисление значения определителя матрицы
// Ввод размера матрицы
var pr = true;
while ( pr ) {
    alert ('Ввод размера матрицы.');
    var n = 0;
    n = vvodN(1);
    if ( n <= 1 ) {
        alert ('Размер матрицы д.б. больше 1.');
    }
    else { pr = false; }
}
var k = 0;
// Ввод матрицы по строкам
var str = 1; // счетчик строк
var matr = new Array(n); //исходная матрица n  строк
var matr1 = new Array(n); //копия исходной матрицы n  строк
var rmatr = new Array(n); //обратная матрица n  строк
var one = new Array(n); //единичная матрица n  строк
for(var i = 0; i < n; i++ ) {
    rmatr [i] = new Array(n);  //обратная матрица n столбцов 
    matr [i] = new Array(2*n); //исходная матрица n столбцов + n столбцов
    matr1 [i] = new Array(n); //копия исходной матрицы n столбцов
    one [i] = new Array(n); }   //единичная матрица n  столбцов
for( i = 0; i < n; i++) {
    for (  j = n; j < 2*n; j++ ) {
    matr [i][j] = 0;    // Единичная матрица 
    }                   // в столбцах с n по 
    matr [i][i+n] = 1;  // 2n-1
}
for (  i = 0; i < n; i++ ) { 
    alert ('Ввод строки ' + str);
    for (  j = 0; j < n; j++ ) {
       matr [i][j] = vvodN(1); matr1 [i][j] = matr [i][j];
       rmatr [i][j] = 0; one[i][j] = 0; // Копирование исх.матр.
    }  // Обнуление обр. и ед. матриц 
    str = str + 1;
}
alert ( 'матрица '+ matr1 );  

//Приведение матрицы к треугольному виду.
var b = 0; 
var sch = 0;// счетчик переноса строк
i = 0;
pr = true;
do { 
    if ( matr [i][i]  !== 0 ) {
        for ( j = i + 1; j < n; j++ ) { 
               b = matr[j][i]/matr[i][i]; 
             for (  k = 0; k < 2*n; k++) { 
                 matr[j][k] = matr[j][k] - matr[i][k] * b; 
             }
        } i = i + 1;
    }
else { var l = 1; // перенос строк
    do { sch = sch + 1;
        for ( j = i; j < 2*n; j++) {
            b = matr [i][j]; matr [i][j] = matr [i+l][j]; matr [i+l][j] = b;
        }  
        l = l + 1;  if ( l > n-i-1 ) { alert ( 'Определитель матрицы равен     0.'); pr = false;}
     }
     while ( matr [i][i] === 0 && pr);
    }
}
while ( i < n && pr );
if (pr) {
    var det = 1;
    for ( i = 0; i < n; i++) { det = det * matr [i][i];}
    det = det*st(sch);
    alert ('Определитель матрицы = '+ det);
// Определение элементов обратной матрицы
    var c = 0;
    for ( i = 0; i < n ; i++ ) { 
        for ( j = n - 1; j > -1; j--) { c = 0; 
            for ( k = 0; k < n; k++ ){ 
                c = c + matr [j][k] * rmatr [k][i];
            }
            b = 1/matr [j][j];                          
            rmatr [j][i] =  b * (matr [j][i+n] - c );    
       } 
    }
    alert ('Обратная матрица= '+rmatr);
//Умножение исходной матрицы на обратную матрицу
    for (  i = 0; i < n; i++ ) {
        for (  j = 0; j < n; j++ ) { c= 0;
            for (  k = 0; k < n; k++ ) {
                c = c + matr1 [i][k] * rmatr [k][j];
            } one [i][j] = Math.round(c*10)/10;
        }
    }
    alert ('Умножение исходной и обратной матриц = '+one);
    }
// ФУНКЦИИ
// Ввод числа
function vvodN(b) {
    var a = b; 
    var i = true;
do 
    {
        a = prompt('Введите число');
        if (isNaN(a)) 
        {
            alert ('Вы ввели не число');
            i = true;
        }
        else 
        {
            a = Number(a);
            return (a);
        }
    }
    while (i); 
}
// (-1)  в степени n
function st(n) {
    var res = 1;
    if ( n % 2 === 0 ) { res = 1;}
    else { res = -1;}
    return res;
}