const wordEnding = {
    getMessageCountString(count) {
      if (count === 1) {
        return `${count} сообщение`;
      } else if (count >= 2 && count <= 4) {
        return `${count} сообщения`;
      } else {
        return `${count} сообщений`;
      }
    },
  
    getUserCountString(count) {
      if (count === 1) {
        return `${count} пользователь`;
      } else if (count >= 2 && count <= 4) {
        return `${count} пользователя`;
      } else {
        return `${count} пользователей`;
      }
    }
  };
  
  export default wordEnding;
  