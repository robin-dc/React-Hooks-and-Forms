import { useEffect, useState } from 'react'

function Message({ size, featherCount }) {
  const [message, setMessage] = useState('');

  useEffect(() =>{
      if (featherCount <= 0)
          setMessage('Oh my! Your bird is naked!');
      else if (featherCount >= 10) {
          setMessage('Full turkey!');
      } else {
          setMessage('Coming along...');
      }
  }, [featherCount])

  return (
    <div className={`message ${size}`}>
      {message}
    </div>
  );
};

export default Message;
