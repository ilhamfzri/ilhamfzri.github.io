---
layout: post
title: SQL Basic Note 1
date: 2022-07-28 23::00
description: 
tags: SQL note tutorial
categories: post
---

# SQL Basic Note #1

## What is SQL ?
SQL  stands for structured query language and it is used to communicate with relational database. But for more simplicity it as “excel on steroids”. I stated that because SQL is just like excel that the data is represent in table format with row and column. The big advantage when using SQL than excel are SQL can query faster even when the data has 10 millions row that is why the reason SQL mostly used as database.

---

## **Create Table**
```sql
CREATE TABLE zoo(
  animal varchar (10),
  uniq_id integer PRIMARY KEY,
  water_need integer
);

INSERT INTO zoo (animal,uniq_id,water_need) VALUES
  ('elephant',1001,500),
  ('elephant',1002,600),
  ('elephant',1003,550),
  ('tiger',1004,300),
  ('tiger',1005,320),
  ('tiger',1006,330),
  ('tiger',1007,290),
  ('tiger',1008,310),
  ('zebra',1009,200),
  ('zebra',1010,220),
  ('zebra',1011,240),
  ('zebra',1012,230),
  ('zebra',1013,220),
  ('zebra',1014,100),
  ('zebra',1015,80),
  ('lion',1016,420),
  ('lion',1017,600),
  ('lion',1018,500),
  ('lion',1019,390),
  ('kangaroo',1020,410),
  ('kangaroo',1021,430),
  ('kangaroo',1022,410);
```

---

## **SELECT**
### Definition
The `SELECT` statement is used to select data from a database.
### Syntax
  ```sql
  SELECT column1, column2, ...
  FROM table_name;
  ```
### Example
```sql
SELECT animal, water_need FROM zoo
```

|animal|water_need                   |
|------|:-----------------------------:|
|elephant|500                          |
|elephant|600                          |
|elephant|550                          |
|tiger |300                          |
|tiger |320                          |
|tiger |330                          |
|tiger |290                          |
|tiger |310                          |
|zebra |200                          |

---

## **WHERE**
### Definition
The `WHERE` clause is used to filter records.

### Syntax
```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```
We add comparision operator for set the condition

|Comparision Operator|What does it mean?|
|------|----------|
|= |Equal to       |
|<> |Not equal to       |
|!= |Not equal to       |
|< |Less than       |
|<= |Less than or equal to       |
|> |Greater than       |
|>= |Greather thn or equal to        |
|LIKE '%expression%' |Contains 'expression'|
|IN('exp1', 'exp2', 'exp3') |Contains any of 'exp1', 'exp2' and 'exp3'|


### Example 1
```sql
SELECT animal, water_need FROM zoo
WHERE animal='zebra'
```
|animal|water_need|
|------|----------|
|zebra |200       |
|zebra |220       |
|zebra |240       |
|zebra |230       |
|zebra |220       |
|zebra |100       |
|zebra |80        |

### Example 2
```sql
SELECT animal, water_need FROM zoo
WHERE water_need>500
```

|animal  |water_need|
|--------|----------|
|elephant|600       |
|elephant|550       |
|lion    |600       |

### Example 3
```sql
SELECT animal, water_need FROM zoo
WHERE animal LIKE 'ele%'
```

|animal  |water_need|
|--------|----------|
|elephant|500       |
|elephant|600       |
|elephant|550       |

### Example 4
```sql
SELECT animal, water_need FROM zoo
WHERE animal IN ('elephant','lion')
```

|animal  |water_need|
|--------|----------|
|elephant|500       |
|elephant|600       |
|elephant|550       |

---

## **LIMIT**
### Definition
The `LIMIT` clause is used to specify the number of records to return.
### Syntax
  ```sql
  SELECT column_name(s)
  FROM table_name
  WHERE condition
  LIMIT number;
  ```
### Example
```sql
SELECT animal, water_need FROM zoo.zoo
WHERE animal='tiger'
LIMIT 3
```

|animal|water_need|
|------|----------|
|tiger |300       |
|tiger |320       |
|tiger |330       |

---


## **AND, OR and NOT**
### Definition
The `WHERE` clause can be combined with AND, OR, and NOT operators.
### Syntax
- AND
  ```sql
  SELECT column1, column2, ...
  FROM table_name
  WHERE condition1 AND condition2 AND condition3 ...;
  ```
- OR
  ```sql
  SELECT column1, column2, ...
  FROM table_name
  WHERE condition1 OR condition2 OR condition3 ...;
  ```
- NOT
  ```sql
  SELECT column1, column2, ...
  FROM table_name
  WHERE NOT condition;
  ```

### Example 1
```sql
SELECT animal, water_need FROM zoo.zoo
WHERE animal='tiger' AND water_need<300;
```

|animal|water_need|
|------|----------|
|tiger |290       |


### Example 2
```sql
SELECT animal, water_need FROM zoo.zoo
WHERE water_need<200 OR water_need>500;
```

|animal  |water_need|
|--------|----------|
|elephant|600       |
|elephant|550       |
|zebra   |100       |
|zebra   |80        |
|lion    |600       |

---

## Reference
[W33 School SQL](https://www.w3schools.com/sql)

[SQL Tutorial by Tomi Mester - Data36](https://www.youtube.com/watch?v=Ad3QTG-Xr4k&t=1165s)