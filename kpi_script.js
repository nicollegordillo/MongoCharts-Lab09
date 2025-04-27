// Rendimiento Medio:
    //Se obtiene la tasa tiempo/longitud
{$divide: [
    {$sum: [
        {$divide: [ '$A*_Tiempo', '$A*_Longitud' ] },
        {$divide: [ '$BFS_Tiempo', '$BFS_Longitud' ] },
        {$divide: [ '$DFS_Tiempo', '$DFS_Longitud' ] },
        {$divide: [ '$Dijkstra_Tiempo', '$Dijkstra_Longitud' ] }
    ]},
    4
]}

// Mejor solucion
    // Tasa entre complejidad de solucion y complejidad del problema inicial
{$min: [
    {$divide: [ '$A*_Longitud', '$A*_Nodos'] },
    {$divide: [ '$BFS_Longitud', '$BFS_Nodos'] },
    {$divide: [ '$DFS_Longitud', '$DFS_Nodos'] },
    {$divide: [ '$Dijkstra_Longitud', '$Dijkstra_Nodos'] }
]}
