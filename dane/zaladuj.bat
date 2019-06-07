cd
sqlldr BLYSKAWICA/blyskawica control=kierowcy.txt LOG='kierowcy_log.LOG'
sqlldr BLYSKAWICA/blyskawica control=pojazdy.txt  LOG='pojazdy_log.LOG'
sqlldr BLYSKAWICA/blyskawica control=trasy.txt  LOG='trasy_log.LOG'
sqlldr BLYSKAWICA/blyskawica control=czasy.txt  LOG='czasy_log.LOG'
sqlldr BLYSKAWICA/blyskawica control=kursy.txt  LOG='kursy_log.LOG'
del *.bad
pause