//Tabela Trasa
ALTER TABLE Trasa ADD CONSTRAINT trasa_01 PRIMARY KEY (id_trasy);
ALTER TABLE Trasa ADD CONSTRAINT trasa_02 CHECK (cena_biletu_nor>0);
ALTER TABLE Trasa ADD CONSTRAINT trasa_03 CHECK (cena_biletu_ulg>0);

//Tabela Kierowca
ALTER TABLE Kierowca ADD CONSTRAINT kierowca_01 PRIMARY KEY (id_kierowcy);
ALTER TABLE Kierowca ADD CONSTRAINT kierowca_02 CHECK (imie = InitCap (imie));
ALTER TABLE Kierowca ADD CONSTRAINT kierowca_03 CHECK (nazwisko = InitCap (nazwisko));
ALTER TABLE Kierowca ADD CONSTRAINT kierowca_04 UNIQUE (pesel);
ALTER TABLE Kierowca ADD CONSTRAINT kierowca_05 CHECK (length(pesel) = 11);
ALTER TABLE Kierowca ADD CONSTRAINT kierowca_06 CHECK (pensja_brutto >= 2200);

//Tabela Pojazd
ALTER TABLE Pojazd ADD CONSTRAINT pojazd_01 PRIMARY KEY (id_pojazdu);
ALTER TABLE Pojazd ADD CONSTRAINT pojazd_02 CHECK (liczba_miejsc >= 20);

//Tabela Czas
ALTER TABLE Czas ADD CONSTRAINT czas_01 PRIMARY KEY (id_czasu);

//Tabela Kurs
ALTER TABLE Kurs ADD CONSTRAINT kurs_01 FOREIGN KEY (id_trasy) REFERENCES Trasa (id_trasy);
ALTER TABLE Kurs ADD CONSTRAINT kurs_02 FOREIGN KEY (id_pojazdu) REFERENCES Pojazd (id_pojazdu);
ALTER TABLE Kurs ADD CONSTRAINT kurs_03 FOREIGN KEY (id_kierowcy) REFERENCES Kierowca (id_kierowcy);
ALTER TABLE Kurs ADD CONSTRAINT kurs_04 FOREIGN KEY (id_czasu) REFERENCES Czas (id_czasu);

