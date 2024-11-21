// Definir el tamaño de la matriz de butacas
const NF = 4; // Número de filas y columnas
const NC = 6; // sólo acepta 99 asientos en la misma fila!!
// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];
    let ContadorF = 1
    for (let i = 0; i < NF; i++) {
        // Nueva fila
        let fila = [];

        for (let j = 0; j < NC; j++) {
            // Nuevo asiento
            fila.push({
                id: idContador + 0 + ContadorF*100,
                estado: false // Estado inicial libre
            });
            idContador++;

        }
        idContador = 0;
        ContadorF++;
        butacas.push(fila);
    }
    return butacas;
}



// Inicializar la matriz
var butacas = setup();

// Imprimir la matriz
console.log(butacas);


// funcion para seleccionar la butaca por id devuelve un 
//conjunto nuevo de butacas con el nuevo estado
function butacasSelect(id,butacas){
    console.log("butacas select for id "+id);
    let new_butacas = butacas;
    for (let f in butacas){
        for (let s in butacas[f]){
            if (butacas[f][s]['id'] === id){
                console.log(new_butacas[f][s]);
                new_butacas[f][s]['estado'] = true;
                console.log(new_butacas[f][s]);
            }

        }

    }

    return new_butacas;
}


// devuelve la butaca buscada con el id
function butacafor(id,butacas){
    
    for (let f in butacas){
        for (let s in butacas[f]){
            if (butacas[f][s]['id'] === id){
                return butacas[f][s]
            }

        }

    }
    return null;
}

// devuelve el conjunto de ids de las butacas 
//  para el número de butacas reservadas
// perdón por la mezcla de idiomas
function suggest(butacasAReservar){//,butacas){
    let suggestion = new Set();
    //console.log(butacas)
    if (butacasAReservar <= NC){
        
        //console.log("butacas A Reservar "+ butacasAReservar);
    // checking empty spaces in a row
        for (let j = NF-1; j>0;j--){//we start from the search on the last row
            
            for (let i = 0;i < NC-butacasAReservar+1;i++){
                //searching a string of empty seats                    
                freeCounter = 0;
                //console.log(  j+", "+i)

                //console.log("Fila "+ j +" silla " + i + " butaca: " + butacas[j])
                //console.log("checking fila: "+ butacas[j][i]['id']);
                for (let f = 0; f < butacasAReservar; f++){
                    let butaca_dic = butacas[j][i+f];
                    //console.log("checking butaca: "+ butaca_dic['id']);
                    if (butaca_dic["estado"] === false){
                        //console.log("butaca libre en " + butacas[j][i+f]["id"])
                        freeCounter++;
                        suggestion.add(butacas[j][i+f]['id']);
                        if (freeCounter == butacasAReservar){
                            console.log("returning "+ suggestion);
                            f = butacasAReservar;
                            i = NC;
                            j = 0;
                            //return suggestion;
                        }
                    }else{
                        f = butacasAReservar;//end the for
                        suggestion = new Set();
                    }
                }
            }
        }
        
        
        
    }
    if (suggestion.size > 0){
        console.log(suggestion);
        return suggestion;
    }else{
        return null;
    }
}

//butacas = butacasSelect(407,butacas);
//    butacas = butacasSelect(406,butacas);
    
// funcion de test
function test_suggest(){
    //let butacas = setup();

    butacas = butacasSelect(405,butacas);
    butacas = butacasSelect(404,butacas);
    butacas = butacasSelect(401,butacas);

    console.log(" seat state: "+ butacafor(405,butacas)["id"],butacafor(404,butacas)["estado"]); 

    
    let testResults = [{test:3,result:[300,301,302]},{test:2,result:[402,403]},{test:11,result:null},{test:5,result:[301,302,303,304,305]}];
    
    for (let tR in testResults){

        console.log("---- testing "+ testResults[tR]['test']+"\n");
        let t = suggest(testResults[tR]['test']);//, butacas);//tR['test']);
        //console.log(" result from suggest " + [...t]);
        //console.log(" expected " + testResults[tR]['result']);
        let test_result = false;
        let res = testResults[tR]['result'];
        if (t == null && testResults[tR]['result'] == null){
            console.log('*****     O K    *****      with '+ null );
        }else{
        for (let i = 0;i < res.length;i++){
            //console.log([...res])
            if (t.has(res[i])){
                test_result = true;
            }else{
                i = t.length;
                test_result = false;
            }
        }
        if (test_result){
            console.log('*****     O K    *****      with '+ [...t] );
        }else{
            console.log('-_-_- F A I L E D -_-_- expected ' + testResults[tR]['result'] + ', returned '+[...t]);
        }
        }
    }
}


//test_suggest();