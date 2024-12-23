// key를 90도씩 회전
function rotate( maps ) {
    const n = maps.length
    const rotation = Array.from({ length: n }, () => Array(n).fill(0))
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rotation[j][n-i-1] = maps[i][j]
        }
    }
    return rotation
}

// key 돌렸을 때 lock의 범위
// n * n의 lock 크기 -> key 돌리면? -> (n + 2 * key.length) * (n + 2 * key.length)
function spaceOfKey ( lock, m ) {
    const n = lock.length
    const sapceLock = Array.from({ length: n + 2 * m }, () => Array(n + 2 * m).fill(0))
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            sapceLock[i + m][j + m] = lock[i][j]
        }
    }
    return sapceLock
}

// 풀리는지 체크하는 함수
function isUnlocked( sapceLock, key, x, y ) {
    const m = key.length
    const n = sapceLock.length - 2 * m

    const tempLock = sapceLock.map((row) => [...row])

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < m; j++) {
            tempLock[x + i][y + j] += key[i][j]
        }
    }

    // 원래 자물쇠 영역 모두 1?
    for (let i = m; i < m + n; i++) {
        for (let j = m; j < m + n; j++) {
            if (tempLock[i][j] !== 1) return false
        }
    }
    return true
}

function solution( key, lock ) {
    const m = key.length
    const n = lock.length

    // 자물쇠 범위 새로 만들기
    const spaceKey = spaceOfKey(lock, m)

    // 4회전
    for (let rote = 0; rote < 4; rote++) {
        for (let i = 0; i <= spaceKey.length - m; i++) {
            for (let j = 0; j <= spaceKey.length - m; j++) {
                if (isUnlocked(spaceKey, key, i, j)) {
                    return true
                }
            }
        }
        key = rotate(key)
    }
    return false
}