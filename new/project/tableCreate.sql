
drop table kursy;
drop table pracownicy;
drop table adresy;
drop table kierowcy;
drop table dowody_osobiste;
drop table trasy;
drop table czas;
drop table pojazdy;


create table dowody_osobiste(
	id int not null primary key,
	imie varchar(40) not null, 
	nazwisko varchar(40) not null, 
	pesel varchar(40) not null, 
	numer_dowodu varchar(40) not null,
);

create table kierowcy (
	id int not null primary key,
	prawo_jazdy varchar(40) not null,
	id_dowodu int not null references dowody_osobiste(id),
);

create table adresy(
	id int not null primary key,
	miasto varchar(40) not null, 
	ulica varchar(40) not null, 
	numer_domu varchar(40) not null, 
	kod_pocztowy varchar(40) not null,
);


create table pracownicy(
	id int not null primary key,
	id_kierowcy int not null references kierowcy(id),
	id_adresu int not null references adresy(id),
	pensja_netto float not null, 
	rok_podpisania_umowy int not null, 
    miesiac_podpisania_umowy int not null, 
    dzien_podpisania_umowy int not null, 
);

create table trasy(
	id int not null primary key,
	miasto_odjazu varchar(100) not null,
	miasto_przyjazdu varchar(100) not null,
	cena_biletu_nor int not null, 
	cena_biletu_ulg int not null, 
);


create table czas(
	id int not null primary key,
	godzina_odjazdu int not null,
    minuty_odjazdu int not null,
	godzina_przyjazdu int not null,
    minuty_przyjazdu int not null,
	rok_kursu int not null, 
    miesiac_kursu int not null, 
    dzien_kursu int not null, 
);


create table pojazdy(
	id int not null primary key,
	marka varchar(40) not null,
	model varchar(40) not null,
	pojemnosc_silnika float not null, 
	moc_km int not null, 
	liczba_miejsc int not null, 
);

create table kursy (
	id int not null primary key,
	id_trasy int references trasy(id),
	id_pojazdu int references pojazdy(id),
	id_pracownika int references pracownicy(id),
	id_czasu int references czas(id),
	ilosc_biletow_nor int not null,
	ilosc_biletow_ulg int not null,
	godzina_przejazdu int not null,
	minuty_przejazdu int not null,
	poziom_wypelnienia float not null,
	odleglosc float not null,
	przychod float not null,
);
