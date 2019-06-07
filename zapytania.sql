//Zapytania ROLLUP
//Zapytanie, ktore dla kazdej trasy i dla kazdego pojazdu poda sredni przychod

SELECT    Nvl(to_char(ID_TRASY), 'WSZYSTKIE') AS ID_TRASY,
		  Nvl(to_char(ID_POJAZDU), 'WSZYSTKIE') AS ID_POJAZDU,
          Round(Avg(przychod), 2) AS SREDNI_PRZYCHOD
FROM      KURS
GROUP BY  ROLLUP(ID_TRASY,ID_POJAZDU);

//Zapytanie, ktore dla kazdej trasy, dla kazdego pojazdu i dla kazdego kierowcy poda sredni czas przejazdu

SELECT    Nvl(to_char(ID_TRASY), 'WSZYSTKIE') AS ID_TRASY,
		  Nvl(to_char(ID_POJAZDU), 'WSZYSTKIE') AS ID_POJAZDU,
		  Nvl(to_char(ID_KIEROWCY), 'WSZYSCY') AS ID_KIEROWCY,
          Round(Avg(CZAS_PRZEJAZDU), 2) AS SREDNI_CZAS_PRZEJAZDU
FROM      KURS
GROUP BY  ROLLUP(ID_TRASY,ID_POJAZDU,ID_KIEROWCY);


//Zapytania CUBE
//Zapytanie, ktore dla kazdego pojazdu na kazdej trasie poda sume przejechanych kilometrow

SELECT    Nvl(to_char(ID_POJAZDU), 'WSZYSTKIE') AS ID_POJAZDU,
		  Nvl(to_char(ID_TRASY), 'WSZYSTKIE') AS ID_TRASY,
          SUM(odleglosc) AS PRZEBIEG
FROM      KURS
GROUP BY  CUBE(ID_POJAZDU,ID_TRASY);

//Zapytanie, ktore dla kazdego kierowcy na danej trasie i dla kazdego pojazdu poda sume sprzedanych biletow normalych i ulgowych

SELECT    Nvl(to_char(ID_KIEROWCY), 'WSZYSCY') AS ID_KIEROWCY,
		  Nvl(to_char(ID_TRASY), 'WSZYSTKIE') AS ID_TRASY,
		  Nvl(to_char(ID_POJAZDU), 'WSZYSTKIE') AS ID_POJAZDU,
          SUM(ILOSC_BILETOW_NOR) AS ILOSC_BILETOW_NOR,
		  SUM(ILOSC_BILETOW_ULG) AS ILOSC_BILETOW_ULG
FROM      KURS
GROUP BY  CUBE(ID_KIEROWCY,ID_TRASY,ID_POJAZDU);



//Zapytania GROUPING SETS
//Zapytanie, ktore dla kazdej trasy i dla kazdego pojazdu poda sredni poziom wypelnienia

SELECT  Nvl(to_char(ID_TRASY), 'WSZYSTKIE') AS ID_TRASY,
		Nvl(to_char(ID_POJAZDU), 'WSZYSTKIE') AS ID_POJAZDU,
		Round(Avg(poziom_wypelnienia), 2) AS SREDNI_POZIOM
FROM	KURS
GROUP BY GROUPING SETS
(
	(ID_TRASY),
	(ID_TRASY, ID_POJAZDU)
 
);

//Zapytanie, ktore dla kazdego pojazdu na danej trasie i danego kierowcy poda sume przychodow 

SELECT  Nvl(to_char(ID_POJAZDU), 'WSZYSTKIE') AS ID_POJAZDU,
		Nvl(to_char(ID_TRASY), 'WSZYSTKIE') AS ID_TRASY,
		Nvl(to_char(ID_KIEROWCY), 'WSZYSCY') AS ID_KIEROWCY,
		SUM(PRZYCHOD) AS SUMA_PRZYCHODOW
FROM	KURS
GROUP BY GROUPING SETS
(
	(ID_POJAZDU),
	(ID_POJAZDU, ID_TRASY),
	(ID_POJAZDU, ID_TRASY,ID_KIEROWCY)
 
);

//Zapytania PARTITION

//Zapytanie,ktore dla kazdego pojazdu i kazdej trasy poda procent kursow jakie pojazd odbyl na danej trasie w stosunku do wszystkich kursow na wszystkich trasach jakie odbyl ten pojazd

SELECT DISTINCT ID_POJAZDU AS "ID_POJAZDU", ID_TRASY AS "ID_TRASY",
ROUND((100*COUNT(ID_TRASY) 
OVER (PARTITION BY ID_POJAZDU, ID_TRASY)/COUNT(ID_TRASY)
OVER (PARTITION BY ID_POJAZDU)),2) AS "PROCENT"
FROM KURS 
ORDER BY ID_POJAZDU, ID_TRASY;





//Zapytanie, ktore dla kazdego kierowcy i kazdej trasy poda procent kursow jakie kierowca odbyl na danej trasie w stosunku do wszystkich kursow jakie odbyl na wszystkich trasach

SELECT DISTINCT ID_KIEROWCY AS "ID_KIEROWCY", ID_TRASY AS "ID_TRASY",
ROUND((100*COUNT(ID_TRASY) 
OVER (PARTITION BY ID_KIEROWCY, ID_TRASY)/COUNT(ID_TRASY)
OVER (PARTITION BY ID_KIEROWCY)),2) AS "PROCENT"
FROM KURS 
ORDER BY ID_KIEROWCY, ID_TRASY;


//Zapytania z oknami (dane w tych zapytaniach sa wybierane z przedzialu od roku 2015 do 2016)

//Zapytanie, ktore poda dla kazdej trasy i kazdego kierowcy oraz kazdego pojazdu sume przejechanych kilometrow

SELECT DISTINCT KURS.ID_TRASY AS "ID_TRASY",KURS.ID_KIEROWCY AS "ID_KIEROWCY", KURS.ID_POJAZDU AS "ID_POJAZDU",
SUM(KURS.ODLEGLOSC) 
OVER (PARTITION BY KURS.ID_TRASY, KURS.ID_KIEROWCY,KURS.ID_POJAZDU
ORDER BY CZAS.DATA RANGE BETWEEN INTERVAL '10' YEAR PRECEDING AND CURRENT ROW) AS "SUMA_KM"
FROM KURS,CZAS
WHERE CZAS.ID_CZASU = KURS.ID_CZASU AND
EXTRACT(YEAR FROM CZAS.DATA) BETWEEN 2015 AND 2016 
ORDER BY KURS.ID_TRASY,KURS.ID_KIEROWCY,KURS.ID_POJAZDU;

//Zapytanie, ktore poda dla kazdej trasy i kazdego kierowcy srednia przejechanych kilometrow

SELECT DISTINCT KURS.ID_TRASY AS "ID_TRASY",KURS.ID_KIEROWCY AS "NR_KIEROWCY",
ROUND(AVG(KURS.ODLEGLOSC) OVER (PARTITION BY KURS.ID_TRASY, KURS.ID_KIEROWCY
ORDER BY CZAS.DATA RANGE BETWEEN INTERVAL '10' YEAR PRECEDING AND CURRENT ROW),2) AS "SREDNIA_ODLEGLOSC"
FROM KURS,CZAS
WHERE CZAS.ID_CZASU = KURS.ID_CZASU AND
EXTRACT(YEAR FROM CZAS.DATA) BETWEEN 2015 AND 2016 
ORDER BY KURS.ID_TRASY,KURS.ID_KIEROWCY;
