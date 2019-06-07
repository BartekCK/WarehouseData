//USUWANIE TABEL
DROP TABLE Kurs;
DROP TABLE Czas;
DROP TABLE Kierowca;
DROP TABLE Pojazd;
DROP TABLE Trasa;

//TABELE WYMIAROW

CREATE TABLE Trasa (
  id_trasy NUMBER(3,0) NOT NULL,
  miasto_odjazdu VARCHAR(40) NOT NULL,
  miasto_przyjazdu VARCHAR(40) NOT NULL,
  cena_biletu_nor NUMBER(5,2) NOT NULL,
  cena_biletu_ulg NUMBER(5,2) NOT NULL
);

CREATE TABLE Czas (
  id_czasu NUMBER(4,0) NOT NULL,
  czas_odjazdu VARCHAR2(5) NOT NULL,
  czas_przyjazdu VARCHAR2(5) NOT NULL,
  data DATE NOT NULL
);

CREATE TABLE Kierowca (
  id_kierowcy NUMBER(4,0) NOT NULL,
  nazwisko VARCHAR2(40) NOT NULL,
  imie VARCHAR2(40) NOT NULL,
  pesel VARCHAR(11) NOT NULL,
  prawo_jazdy VARCHAR(5) NOT NULL,
  pensja_brutto NUMBER(5,0) NOT NULL
);

CREATE TABLE Pojazd (
  id_pojazdu NUMBER(4,0) NOT NULL,
  marka VARCHAR2(20) NOT NULL,
  model VARCHAR(20) NOT NULL,
  pojemnosc_silnika NUMBER(5,0) NOT NULL,
  moc NUMBER(3,0) NOT NULL,
  liczba_miejsc NUMBER(3,0) NOT NULL          
);

//TABELA FAKTOW

CREATE TABLE Kurs (
  id_trasy NUMBER(3,0) NOT NULL,
  id_pojazdu NUMBER(4,0) NOT NULL, 
  id_kierowcy NUMBER(4,0) NOT NULL,    
  id_czasu NUMBER(4,0) NOT NULL,
  ilosc_biletow_nor NUMBER(3,0) NOT NULL,
  ilosc_biletow_ulg NUMBER(3,0) NOT NULL,
  czas_przejazdu NUMBER(3,0) NOT NULL,
  poziom_wypelnienia NUMBER(3,0) NOT NULL,
  odleglosc NUMBER(4,1) NOT NULL,
  przychod NUMBER(6,2) NOT NULL
);
