#include <stdio.h>
#include <stdlib.h>
#include <time.h>


int random(int min_num, int max_num){
    int result=0,low_num=0,hi_num=0;
    if(min_num<max_num){
      low_num=min_num;
      hi_num=max_num+1;
    }else{
      low_num=max_num+1;
       hi_num=min_num;
    }
    result = (rand()%(hi_num-low_num))+low_num;
    return result;
}

char* imiona[] = {"Bartlomiej","Marcin","Sebastian","Janusz","Andrzej","Marian","Wojciech","Kamil","Jerzy","Karol","Michal","Marek","Rafal","Fryderyk","Dominik","Adam","Franciszek","Oliwier","Miroslaw","Aleksander","Piotr","Patryk","Robert","Wlodzimierz","Emanuel","Jaroslaw","Boleslaw","Kornel"};
char* nazwiska[] = {"Nosacz","Nowak","Kot","Piekarczyk","Jurek","Kowalski","Bialy","Warna","Stolarczyk","Michnik","Kolasa","Skorek","Kajetanowicz","Kopczyk","Rok","Solec","Warnenczyk","Kowal","Stefanczyk","Mularczyk","Gniewko","Dolas","Banan","Asinski","Adamczyk","Stolarz","Lubawski","Oraniec","Matysiak"};
char* miasta[] = {"Kielce","Ozarow","Opatow","Ostrowiec Swietokrzyski","Starachowice","Skarzysko Kamienna","Morawica","Konskie","Jedrzejow","Busko-Zdroj","Pinczow","Staszow","Sandomierz","Daleszyce","Wachock","Wloszczowa","Checiny","Suchedniow","Cmielow","Chmielnik","Kazimierza Wielka","Radoszyce"};
int odleglosci[] = {85,62,62,53,35,14,50,38,48,40,70,92,19,48,55,14,29,71,32,89,42};
char* prawo_jazdy[] = {"D","D+E","D1","D1+E"};
char* marki[] ={"SOLARIS","MERCEDES-BENZ","VOLVO","MAN SE","IVECO","NEOPLAN","SETRA","VOLKSWAGEN","DAEWOO","KIA"};
char* modele[]={"KTW 200","VOL 500","7900","WTC 23","S13","P22","511 HD","CRA 234","GDW","WNP","PSC","MKS 200","VIA3","LESD 1200","GFR 6","2500","POL 123","JPG","PNG","CSS","JS 200","FBA 2","CPP","WFP"};



void g_kierowcy(){
     FILE* plik = fopen("kierowcy.csv","w");

    int i;
    for(i = 1; i <= 1000; i++){
          char* imie = imiona[random(0, sizeof(imiona)/sizeof(imiona[0])-1)];
          char* nazwisko = nazwiska[random(0, sizeof(nazwiska)/sizeof(nazwiska[0])-1)];
          fprintf(plik, "%d,%s,%s,%d%d%d%d3%d,%s,%d\n", i, nazwisko, imie,random(70,98),random(10,12),random(10,30),random(100,999),random(0,9),prawo_jazdy[random(0,3)],random(2200,9000));
    }

    fclose(plik);
}

void g_pojazdy(){
      FILE* plik = fopen("pojazdy.csv","w");

    int i;
    for(i = 1; i <= 333; i++){
          char* marka = marki[random(0, sizeof(marki)/sizeof(marki[0])-1)];
          char* model = modele[random(0, sizeof(modele)/sizeof(modele[0])-1)];
          fprintf(plik, "%d,%s,%s,%d,%d,40\n", i, marka, model,random(7000,9900),random(180,320));

    }

    for(i = 334; i <= 700; i++){
          char* marka = marki[random(0, sizeof(marki)/sizeof(marki[0])-1)];
          char* model = modele[random(0, sizeof(modele)/sizeof(modele[0])-1)];
          fprintf(plik, "%d,%s,%s,%d,%d,30\n", i, marka, model,random(7000,9900),random(180,320));

    }

    for(i = 701; i <= 1000; i++){
          char* marka = marki[random(0, sizeof(marki)/sizeof(marki[0])-1)];
          char* model = modele[random(0, sizeof(modele)/sizeof(modele[0])-1)];
          fprintf(plik, "%d,%s,%s,%d,%d,20\n", i, marka, model,random(7000,9900),random(180,320));

    }


    fclose(plik);
}


void g_trasy(){
      FILE* plik = fopen("trasy.csv","w");

      int i;
      int j = 22;

      for(i=1;i<=21;i++)
      {
          fprintf(plik,"%d,%s,%s,%.2f,%.2f\n",i,miasta[0],miasta[i],odleglosci[i-1]*0.21,odleglosci[i-1]*0.21*0.5);
      }



      for(i=21;i>=1;i--)
      {
          fprintf(plik,"%d,%s,%s,%.2f,%.2f\n",j,miasta[i],miasta[0],odleglosci[i-1]*0.21,odleglosci[i-1]*0.21*0.5);
          j++;
      }

        fclose(plik);
}

void g_czasy()
{
    FILE* plik = fopen("czasy.csv","w");

    int i;


    for(i=1;i<=2000;i++)
    {
        fprintf(plik,"%d,%d:%d,%d:%d,%d/%d/%d\n",i,random(10,11),random(10,55),random(11,12),random(10,55),random(14,18),random(1,12),random(1,28));
    }

    for(i=2001;i<=3000;i++)
    {
        fprintf(plik,"%d,%d:%d,%d:%d,%d/%d/%d\n",i,random(13,14),random(10,55),random(14,15),random(10,55),random(14,18),random(1,12),random(1,28));
    }

    for(i=3001;i<=4000;i++)
    {
        fprintf(plik,"%d,%d:%d,%d:%d,%d/%d/%d\n",i,random(16,17),random(10,55),random(18,19),random(10,55),random(14,18),random(1,12),random(1,28));
    }

    for(i=4001;i<=5000;i++)
    {
        fprintf(plik,"%d,%d:%d,%d:%d,%d/%d/%d\n",i,random(20,21),random(10,55),random(22,23),random(10,55),random(14,18),random(1,12),random(1,28));
    }

    fclose(plik);
}

void g_kursy()
{
int ilosc;
int id_pojazdu;
int b_nor;
int b_ulg;
int odleglosc;

    FILE* plik = fopen("kursy.csv","w");

    int i;

    for(i=1;i<=5000;i++)
    {
         id_pojazdu = random(1,1000);

         if(id_pojazdu<=333)
         {
             ilosc = 40;
             b_nor = random(1,30);
             b_ulg = random(1,10);
         }

         else if(id_pojazdu<=700)
         {
             ilosc = 30;
             b_nor = random(1,20);
             b_ulg = random(1,10);
         }

         else
         {
             ilosc = 20;
             b_nor = random(1,15);
             b_ulg = random(1,5);
         }

         odleglosc = odleglosci[random(0, sizeof(odleglosci)/sizeof(odleglosci[0])-1)];

         fprintf(plik, "%d,%d,%d,%d,%d,%d,%d,%d,%d,%.2f\n",random(1,42),id_pojazdu,random(1,1000),random(1,5000),b_nor,b_ulg,random(30,160),((b_nor+b_ulg)*100)/ilosc,odleglosc,(odleglosc*0.21*b_nor)+ (odleglosc*0.21*b_ulg*0.5) );

    }

    fclose(plik);

}


int main(){
    srand(time(NULL));

    g_kierowcy();
    g_pojazdy();
    g_trasy();
    g_czasy();
    g_kursy();

    return 0;
}
