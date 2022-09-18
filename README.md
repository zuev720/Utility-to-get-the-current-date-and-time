### Задание 1
Написать утилиту получения текущей даты и времени.

Текущая дата и время в формате ISO:  
`cmd current`

Текущий год:  
`cmd current --year` или `cmd current -y`

Текущий месяц:  
`cmd current --month` или `cmd current -m`

Дата в календарном месяце:  
`cmd current --date` или `cmd current -d`

Необходимо добавить возможность получать даты в прошлом или будущем через команды `add` и `sub`:  
`cmd add -d 2` - дата и время в формате ISO на два дня вперед
`cmd sub --month 1` - дата и время в формате ISO на 1 месяц назад