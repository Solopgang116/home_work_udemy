/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?'),
      movieName1 = prompt('Один из последних просмотренных фильмов?'),
      movieGrade1 = +prompt('Один из последних просмотренных фильмов?'),
      movieName2 = prompt('Один из последних просмотренных фильмов?'),
      movieGrade2 = +prompt('Один из последних просмотренных фильмов?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
personalMovieDB.movies[movieName1] = movieGrade1;  //если передовать через . personalMovieDB.movies.movieName -> ожидание >>
// 'название фильма': 'оценка' , но получаем  movieName: 'оценка', поэтому лучше использовать [] с именем переменной внутри, значение  
// которого станет ключом , 
// ПО ТЗ нужно задать два вопроса и получить дважды структуру 'название фильма': 'оценка'
// повторное исользование структуры personalMovieDB.movies[movieName] = movieGrade; явлется ошибочной, т.к смысл идентичен первому выражению
// и в лушчем случае произайдет перезапись: в объекте останется одна запись 'название фильма': 'оценка'
personalMovieDB.movies[movieName2] = movieGrade2; //банальным решение будет создать ещё переменных  

console.log(personalMovieDB); //теперь всё Хорошо >> movies: {логан: 8, дюна: 7}

// интересное наблюдение: почему при использовании сруктуры
// personalMovieDB.movies[movieName] = movieGrade;
// personalMovieDB.movies[movieName] = movieGrade;
// опрос был единожды
// ГИпотезаЖ: в первом случае вопрос был задан дважды, но заисался последний результат, в последующих попытках было по одному вопросу
// напрашивается вывод, что программа оптемизировала вопросы, т.к дважды задавать при такой структуре бесполезно(трата памяти, ресурсов)
// и приоритет имеет последняя запись


