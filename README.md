### Hexlet tests and linter status:
[![Actions Status](https://github.com/Venzelland/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/Venzelland/frontend-project-44/actions)
<a href="https://codeclimate.com/github/Venzelland/frontend-project-44/maintainability"><img src="https://api.codeclimate.com/v1/badges/0ea287b0a8f45c72a385/maintainability" /></a>

<!-- ### asciinema.org:
exercise №5 https://asciinema.org/a/98qg9Q0amTuhWOOD2h1qsNTLU
exercise №6 https://asciinema.org/a/ommrw4IDZLMNyF8D1b8DEZTcr
exercise №7 https://asciinema.org/a/cRQr8eajTjHc8romFtnvdCwNM
exercise №8 https://asciinema.org/a/yeG5Xqbgc4W1Gs4iJCawWi2Dj
exercise №9 https://asciinema.org/a/SPl9Y8hAstjWzINJoAKkJGYGz -->

# Игры разума (JavaScript)

«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново. 

Игры:
- Определение четного числа.
- Определение простого числа.
- Калькулятор. Арифметические выражения, которые необходимо вычислить.
- Прогрессия. Поиск пропущенных чисел в последовательности чисел.
- Определение наибольшего общего делителя.


## Установка

```
$ sudo npm link 
```

## Игра: "Проверка на четность"

Суть игры в следующем: игрокe показывается случайное число. Ему нужно ответить **yes**, если число чётное, или **no** — если нечётное.

#### Запуск игры

```
$ brain-even
```  

#### Пример игры

[![asciicast](https://asciinema.org/a/98qg9Q0amTuhWOOD2h1qsNTLU.svg)](https://asciinema.org/a/98qg9Q0amTuhWOOD2h1qsNTLU)

## Игра: "Калькулятор"

Суть игры в следующем: игроку показывается случайное математическое выражение, например **35 + 16**, которое нужно вычислить и записать правильный ответ.

#### Запуск игры

```
$ brain-calc
```  

#### Пример игры

[![asciicast](https://asciinema.org/a/ommrw4IDZLMNyF8D1b8DEZTcr.svg)](https://asciinema.org/a/ommrw4IDZLMNyF8D1b8DEZTcr)

## Игра: "НОД"

Суть игры в следующем: игроку показывается два случайных числа, например, **25 50**. Игрок должен вычислить и ввести наибольший общий делитель этих чисел.

#### Запуск игры

```
$ brain-gcd
```  

#### Пример игры

[![asciicast](https://asciinema.org/a/cRQr8eajTjHc8romFtnvdCwNM.svg)](https://asciinema.org/a/cRQr8eajTjHc8romFtnvdCwNM)

## Игра: "Арифметическая прогрессия"

Суть игры в следующем: игроку показывается ряд чисел, образующий арифметическую прогрессию. Игрок должен отгадать число, которое находится за точками.

#### Запуск игры

```
$ brain-progression
```  

#### Пример игры

[![asciicast](https://asciinema.org/a/yeG5Xqbgc4W1Gs4iJCawWi2Dj.svg)](https://asciinema.org/a/yeG5Xqbgc4W1Gs4iJCawWi2Dj)

## Игра: "Простое ли число?"

Суть игры в следующем: игроку показывается случайное число. Ему нужно ответить **yes**, если число простое, или **no** — если нет.

#### Запуск игры

```
$ brain-prime
```  

#### Пример игры

[![asciicast](https://asciinema.org/a/SPl9Y8hAstjWzINJoAKkJGYGz.svg)](https://asciinema.org/a/SPl9Y8hAstjWzINJoAKkJGYGz)