export function sayHello(name: String){
    return `Hello from ${name}`;
}

export function showHello(divName: string, name: string){
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

export let x:number = 1;
export let y = 2;