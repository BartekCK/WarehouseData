use sherlock;

drop table podejrzani;
drop table przestepcy;
drop table adresy;
drop table pojazdy;
drop table rodzaje_przestepstw;
drop table krs;
drop table formy_prawne;
drop table polaczenia;
drop table adresy_telekomunikacyjne;
drop table umowy_operatora;
drop table operatorzy;

create table operatorzy (
	id int not null primary key,
	nazwa varchar(30) not null,
);

create table umowy_operatora (
	id int not null primary key,
	id_opertora int not null references operatorzy(id),
	data_rozpoczecia_umowy datetime not null, 
	data_zakonczenia_umowy datetime not null, 
	ilosc_wykorzystanych_danych float default 0,
);

create table adresy_telekomunikacyjne(
	id int not null primary key,
	adres_routera varchar(20) not null,
	id_umowy int not null references umowy_operatora(id),
);

create table polaczenia (
	id int not null primary key,
	adres_docelowy varchar(20) not null,
	data_rozpoczecia_polaczenia datetime not null, 
	data_zakonczenia_polaczenia datetime not null, 
);

create table formy_prawne (
	id int not null primary key,
	opis varchar(30) not null,
);

create table krs (
	id int not null primary key,
	nip varchar(20) not null,
	regon varchar(20) not null,
	data_rejestracji datetime not null, 
	id_formy_prawnej int not null references formy_prawne(id),
	  float not null check(kapital_zalozycielski >= 5000),
);

create table rodzaje_przestepstw (
	id int not null primary key,
	opis varchar(100) not null,
);


create table pojazdy (
	id int not null primary key,
	marka varchar(20) not null,
	model varchar(20) not null,
	data_produkcji datetime not null, 
	data_rejestracji datetime not null, 
	numer_rej varchar(10) not null check(len(numer_rej) > 0), 
	numer_vin varchar(10) not null check(len(numer_vin) = 17), 
);

create table adresy (
	id int not null primary key,
	miejscowosc varchar(50) not null,
	ulica varchar(50) not null,
	numer_domu varchar(50) not null,
	kod_pocztowy varchar(6) not null check(len(kod_pocztowy) = 6),
);

create table przestepcy(
	id int not null primary key,
	imie varchar(50) not null,
	nazwisko varchar(50) not null,
	pesel varchar(50) not null,
	id_adresu int not null references adresy(id),
);

create table podejrzani (
	id int not null primary key,
	id_przestepcy int references przestepcy(id),
	id_pojazdu int references pojazdy(id),
	id_przestepstwa int references rodzaje_przestepstw(id),
	id_adresu_ip int references adresy_telekomunikacyjne(id),
	id_adresu_polaczenia int references polaczenia(id),
	id_krs int references krs(id),
	obecnosc_na_miejscu_zbrodni bit not null,
	liczba_lat_wyroku int default 0,
	rozpoczecie_pozbawienia_wolnosci datetime, 
	zakonczenie_pozbawienia_wolnosci datetime, 
);




