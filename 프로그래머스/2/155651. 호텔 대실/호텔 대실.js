const solution = (book_time) => {
  let rooms = []

  book_time.sort().forEach(([checkIn, checkOut]) => {
      let start = parseInt(checkIn.split(':')[0]) * 60 + parseInt(checkIn.split(':')[1])
      let end = parseInt(checkOut.split(':')[0]) * 60 + parseInt(checkOut.split(':')[1]) + 10

      if (rooms.length === 0) {
          rooms.push(end)
          
      } else {
          rooms = rooms.sort()
          let newRoom = true
          for (let i=0; i<rooms.length; i++) {
              
              if (rooms[i] <= start) {
                  rooms[i] = end
                  newRoom = false
                  break
              }
          }
          
          if (newRoom) rooms.push(end)
      }
  })
  return rooms.length
}
