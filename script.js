var friends=['Goku','Vegeta','Gohan','Krillen','Bulma']

for(var j=0;j<friends.length;j++){
        for(var i=99;i>0;i--){
            if(i>1){
            console.log(i + ' lines of code in the file, ' + i + ' lines of code; ' + friends[j] + ' strikes one out, clears it all out, ');
        }else{
            console.log(' 1 line of code in the file, 1 line of code; ' + friends[j] + ' strikes one out, clears it all out, no more lines of code in the file');
        }
    }
}  


