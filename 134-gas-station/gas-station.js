function canCompleteCircuit(gas,cost){
    let totalGas = 0;
    let totalCost = 0;
    let tank = 0;
    let startIndex = 0;

    for(let i=0;i<gas.length;i++){
        totalGas += gas[i];
        totalCost += cost[i];
        tank += gas[i] - cost[i];

        if(tank < 0){
           startIndex = i+1;
            tank = 0;
        }
    }
    if(totalGas < totalCost){
        return -1;
    }
    return startIndex;
}