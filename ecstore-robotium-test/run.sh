rm -rf bin/res/crunch/
ant debug install test
d=`date +'%Y%m%d_%H%M%S'`
mkdir $d
adb pull /sdcard/Robotium-Screenshots/ $d
adb shell rm /sdcard/Robotium-Screenshots/*
open $d
