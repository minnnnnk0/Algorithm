function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    // 다리 위 트럭
    let bridge = Array.from({length: bridge_length}, () => 0);
    // 다리의 무게
    let bridge_weight = 0;
  
    // 1초를 증가 + 1번 트럭 출발
    answer++;
    bridge.shift();
    bridge_weight += truck_weights[0];
    bridge.push(truck_weights.shift());

    while (bridge_weight > 0) {
        answer++;
        bridge_weight -= bridge.shift();
      
        // 다음 트럭의 무게를 더해도 되나?
        if (truck_weights.length > 0 && bridge_weight + truck_weights[0] <= weight) {
            // 가능 -> 다음 트럭 출발
            bridge_weight += truck_weights[0];
            bridge.push(truck_weights.shift());
          } else {
            bridge.push(0);
        }
    }
    // console.log(answer)
    return answer;
  }