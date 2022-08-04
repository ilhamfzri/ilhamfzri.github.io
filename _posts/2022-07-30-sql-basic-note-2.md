---
layout: post
title: SQL Basic Note 2
date: 2022-08-02 23:00:00
description: 
tags: SQL note tutorial
categories: post
---


## **Sample Database**
I've used MySQL Sample Database from this source :

[https://www.mysqltutorial.org/mysql-sample-database.aspx](https://www.mysqltutorial.org/mysql-sample-database.aspx)


## **COUNT()**
### Definition
The `COUNT()` function returns the number of rows that matches a specified criterion.
### Syntax
  ```sql
  SELECT COUNT(column_name)
  FROM table_name
  WHERE condition;
  ```
### Example 
Calculate number of costumers from new york city.
```sql
SELECT COUNT(*) FROM classicmodels.customers
WHERE CITY="NYC";
```

|COUNT(*)|
|--------|
|5       |

---

## **AVG()**
### Definition
The `AVG()` function returns the average value of a numeric column. 

### Syntax
```sql
SELECT AVG(column_name)
FROM table_name
WHERE condition;
```

### Example 
Calculate the avarage value of credit limit for costumers from USA.
```sql
SELECT AVG(creditLimit) FROM classicmodels.customers
WHERE country="USA";
```

|AVG(creditLimit)|
|----------------|
|78102.777778    |

---

## **SUM()**
### Definition
The `SUM()` function returns the total sum of a numeric column. 
### Syntax
  ```sql
  SELECT SUM(column_name)
  FROM table_name
  WHERE condition;
  ```
### Example
Calculate the total value of credit limit for costumers from Victoria, Australia.
```sql
SELECT SUM(creditLimit) FROM classicmodels.customers
WHERE state="Victoria";
```

|SUM(creditLimit)|
|----------------|
|177600.00       |

---

## **MAX()**
### Definition
The `MAX()` function returns the largest value of the selected column.
### Syntax
  ```sql
  SELECT MAX(column_name)
  FROM table_name
  WHERE condition;
  ```
### Example
Find a customer name who has the largest of credit limit.
```sql
SELECT (customerName) FROM classicmodels.customers
WHERE creditLimit = (SELECT MAX(creditLimit) FROM classicmodels.customers);
```

|customerName          |
|----------------------|
|Euro+ Shopping Channel|


---

## **MIN()**
### Definition
The `MIN()` function returns the smallest value of the selected column.
### Syntax
  ```sql
  SELECT MIN(column_name)
  FROM table_name
  WHERE condition;
  ```
### Example
Find 5 costumers data who has minimum credit limit.
```sql
SELECT * FROM classicmodels.customers
WHERE creditLimit = (SELECT MIN(creditLimit) FROM classicmodels.customers);
```

|customerNumber|customerName              |contactLastName|contactFirstName|phone         |addressLine1          |addressLine2|city     |state|postalCode|country  |salesRepEmployeeNumber|creditLimit|
|--------------|--------------------------|---------------|----------------|--------------|----------------------|------------|---------|-----|----------|---------|----------------------|-----------|
|125           |Havel & Zbyszek Co        |Piestrzeniewicz|Zbyszek         |(26) 642-7555 |ul. Filtrowa 68       |NULL        |Warszawa |NULL |01-012    |Poland   |NULL                  |0.00       |
|168           |American Souvenirs Inc    |Franco         |Keith           |2035557845    |149 Spinnaker Dr.     |Suite 101   |New Haven|CT   |97823     |USA      |1286                  |0.00       |
|169           |Porto Imports Co.         |de Castro      |Isabel          |(1) 356-5555  |Estrada da saúde n. 58|NULL        |Lisboa   |NULL |1756      |Portugal |NULL                  |0.00       |
|206           |Asian Shopping Network, Co|Walker         |Brydey          |+612 9411 1555|Suntec Tower Three    |8 Temasek   |Singapore|NULL |038988    |Singapore|NULL                  |0.00       |
|223           |Natürlich Autos           |Kloss          |Horst           |0372-555188   |Taucherstraße 10      |NULL        |Cunewalde|NULL |01307     |Germany  |NULL                  |0.00       |

---

## **MIN()**
### Definition
The `MIN()` function returns the smallest value of the selected column.
### Syntax
  ```sql
  SELECT MIN(column_name)
  FROM table_name
  WHERE condition;
  ```
### Example
Find 5 costumers data who has minimum credit limit.
```sql
SELECT * FROM classicmodels.customers
WHERE creditLimit = (SELECT MIN(creditLimit) FROM classicmodels.customers);
```

|customerNumber|customerName              |contactLastName|contactFirstName|phone         |addressLine1          |addressLine2|city     |state|postalCode|country  |salesRepEmployeeNumber|creditLimit|
|--------------|--------------------------|---------------|----------------|--------------|----------------------|------------|---------|-----|----------|---------|----------------------|-----------|
|125           |Havel & Zbyszek Co        |Piestrzeniewicz|Zbyszek         |(26) 642-7555 |ul. Filtrowa 68       |NULL        |Warszawa |NULL |01-012    |Poland   |NULL                  |0.00       |
|168           |American Souvenirs Inc    |Franco         |Keith           |2035557845    |149 Spinnaker Dr.     |Suite 101   |New Haven|CT   |97823     |USA      |1286                  |0.00       |
|169           |Porto Imports Co.         |de Castro      |Isabel          |(1) 356-5555  |Estrada da saúde n. 58|NULL        |Lisboa   |NULL |1756      |Portugal |NULL                  |0.00       |
|206           |Asian Shopping Network, Co|Walker         |Brydey          |+612 9411 1555|Suntec Tower Three    |8 Temasek   |Singapore|NULL |038988    |Singapore|NULL                  |0.00       |
|223           |Natürlich Autos           |Kloss          |Horst           |0372-555188   |Taucherstraße 10      |NULL        |Cunewalde|NULL |01307     |Germany  |NULL                  |0.00       |

---

## **GROUP BY**
### Definition
The `GROUP BY` statement groups rows that have the same values into summary rows, like "find the number of customers in each country".

The `GROUP BY` statement is often used with aggregate functions `(COUNT(), MAX(), MIN(), SUM(), AVG())` to group the result-set by one or more columns.

### Syntax
  ```sql
  SELECT column_name(s)
  FROM table_name
  WHERE condition
  GROUP BY column_name(s)
  ```
### Example
Find average credit limit for customers by country segmentation.
```sql
SELECT country, AVG(creditLimit) 
FROM classicmodels.customers
GROUP BY country;
```

|country  |AVG(creditLimit)|
|---------|----------------|
|France   |77691.666667    |
|USA      |78102.777778    |
|Australia|86060.000000    |
|Norway   |91200.000000    |
|Poland   |0.000000        |
|Germany  |19776.923077    |
|Spain    |73971.428571    |
|Sweden   |84750.000000    |
|Denmark  |102100.000000   |
|Singapore|67233.333333    |

---

## **ORDER BY**
### Definition
The `ORDER BY` keyword is used to sort the result-set in ascending or descending order.

The `ORDER BY` keyword sorts the records in ascending order by default. To sort the records in descending order, use the `DESC` keyword.

### Syntax
  ```sql
  SELECT column1, column2, ...
  FROM table_name
  ORDER BY column1, column2, ... ASC|DESC;
  ```
### Example
Find the top ten number of customers by country

```sql
SELECT country, COUNT(*)
FROM classicmodels.customers
GROUP BY country
ORDER BY COUNT(*) DESC
LIMIT 10;

```

|country    |COUNT(*)|
|-----------|--------|
|USA        |36      |
|Germany    |13      |
|France     |12      |
|Spain      |7       |
|Australia  |5       |
|UK         |5       |
|New Zealand|4       |
|Italy      |4       |
|Norway     |3       |
|Singapore  |3       |

---

## **DISTINCT**
### Definition
The **SELECT DISTINCT** statement is used to return only distinct (different) values.
### Syntax
  ```sql
  SELECT DISTINCT column1, column2, ...
  FROM table_name;
  ```
### Example
Top ten list of state sort by ascending order
```sql
SELECT DISTINCT(state)
FROM classicmodels.customers
ORDER BY state
LIMIT 10;
```

|state        |
|-------------|
|NULL         |
|BC           |
|CA           |
|Co. Cork     |
|CT           |
|Isle of Wight|
|MA           |
|NH           |
|NJ           |
|NSW          |


## Reference
[W33 School SQL](https://www.w3schools.com/sql)

