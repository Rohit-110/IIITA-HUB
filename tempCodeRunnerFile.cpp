#include <bits/stdc++.h>
using namespace std;
const int INF = 1e9;


int fordFulkerson(vector<vector<int>>& graph, int source, int sink) {
    int n = graph.size();
    vector<vector<int>> residualGraph(graph);
    int maxFlow = 0;
    while (true) {
        vector<int> parent(n, -1);
        queue<int> q;
        q.push(source);
        while (!q.empty()) {
            int u = q.front();
            q.pop();
            for (int v = 0; v < n; ++v) {
                if (parent[v] == -1 && residualGraph[u][v] > 0) {
                    parent[v] = u;
                    q.push(v);
                }
            }
        }
        if (parent[sink] == -1) break;
        int pathFlow = INF;
        for (int v = sink; v != source; v = parent[v]) {
            int u = parent[v];
            pathFlow = min(pathFlow, residualGraph[u][v]);
        }
        for (int v = sink; v != source; v = parent[v]) {
            int u = parent[v];
            residualGraph[u][v] -= pathFlow;
            residualGraph[v][u] += pathFlow;
        }
        maxFlow += pathFlow;
    }
    return maxFlow;
}


int main() {
    clock_t start=clock();
    int n, m;
    cin >> n >> m;
    int source = 0, sink = n + m + 1;
    vector<vector<int>> graph(n + m + 2, vector<int>(n + m + 2, 0));
    for (int i = 1; i <= n; ++i) graph[source][i] = 1;
    for (int i = 1; i <= n; ++i) {
        int k;
        cin >> k;
        for (int j = 0; j < k; ++j) {
            int v;
            cin >> v;
            graph[i][n + v] = 1;
        }
    }
    for (int i = n + 1; i <= n + m; ++i)  graph[i][sink] = 1;


    int largestMatching = fordFulkerson(graph, source, sink);
    clock_t end=clock();
    cout << "Largest Matching: " << largestMatching << endl;
    cout<< "Time : " <<end-start<<endl;
}
