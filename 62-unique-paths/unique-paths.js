function uniquePaths(m,n){
    const paths = Array.from({length:m},()=>Array(n).fill(0)); 

    for(let r=0;r<m;r++){
        for(let c=0;c<n;c++){
            if(r===0||c===0){
                paths[r][c]=1;
            }
            else{
                paths[r][c]=paths[r-1][c]+paths[r][c-1];
            }
        }
    }
    return paths[m-1][n-1];
}