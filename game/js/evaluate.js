var answers = JSON.parse(localStorage.getItem("my_answers")); //get them back

var answers = [...new Set(answers)];

document.getElementsByTagName("div")[0].innerHTML = answers;

var mark = 0;

//.toLocaleLowerCase().replace(/\s/g, '')
var movies = [
"Titanic","Jumanji","Matrix","Harry potter","Moana","Ice age","The Batman","IT","Pirates of the Caribbean","The Mandalorian","Saw","The wizard of Oz","Charlie and the chocolate factory" , "Shang-Chi and the Legend of ten rings","John Wick","Game of thrones","Moon Knight" ,"Loki","Inception" ,"butterfly effect"];

var correctAnswers = ['titanic', 'jumanji', 'matrix', 'harrypotter', 'moana', 'iceage', 'thebatman', 'it', 'piratesofthecaribbean', 'themandalorian', 'saw', 'thewizardofoz', 'charlieandthechocolatefactory', 'shang-chiandthelegendoftenrings', 'johnwick', 'gameofthrones', 'moonknight', 'loki', 'inception', 'butterflyeffect'];


for(let i = 0; i<correctAnswers.length; i++){
    if(correctAnswers.includes(answers[i])){
        
        mark++;
    }
   
}

console.log(mark);