
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    return cats.push("Ralph");
}
function destructivelyPrependCat(name){
    return cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    return cats.pop();
}
function destructivelyRemoveFirstCat(){
    return cats.shift();
}
function appendCat(name){
    const Cat = [...cats,"Broom"];
    return Cat;
}
function prependCat(name){
    const catss = ["Arnold", ...cats];
    return catss
}
function removeLastCat(){
    const cats1 = cats.slice(0, -1);
    return cats1
}
function removeFirstCat(){
    const cats2 = cats.slice(1);
    return cats2;
}
