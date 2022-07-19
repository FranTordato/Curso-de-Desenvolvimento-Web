for (let i = 0; i < 10; i++) {
    console.log(i)
}

let funcs = []
for(let e = 0 ; e < 10; e ++){
    funcs.push(function(){
        console.log(e)
    })
}

funcs[2]()
funcs[7]()