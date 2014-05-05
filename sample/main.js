#import "tuneup.js"
#import "mechanic.js"

var target = UIATarget.localTarget();

function checkInstanceExist(instance) {
    var errorTimes = 0;
    while (!instance && errorTimes < 50) {
        errorTimes++;
        target.delay(1);
    }
} 

function tapWelcome()
{
    checkInstanceExist(target.frontMostApp().mainWindow().buttons()[1].tap); 
    target.frontMostApp().mainWindow().buttons()[1].tap();
    target.delay(1);
    checkInstanceExist(target.frontMostApp().mainWindow().buttons()[0].tap); 
    target.frontMostApp().mainWindow().buttons()[0].tap();
    target.delay(1);
}

function tapTabar()
{
    for (var j=0; j<4; ++j) 
    {
        checkInstanceExist(target.frontMostApp().tabBar().buttons()[j]); 
	target.frontMostApp().tabBar().buttons()[j].tap(); 
        target.delay(1);
    }
}
tapWelcome();
tapTabar();
