// 1.
  const ws = new WebSocket('wss://asd.com/asd/asd.ashx')
  const [messages, setMessages] = useState<MyMessagesType>([])
  useEffect(() => {
    ws.addEventListener('message', (e) => {
      let newMessages = JSON.parse(e.data)
      setMessages((prevMessages) => [...prevMessages, ...newMessages])
    })
  }, [])

  return (
    <>
      {messages.map(el => <Message key={el.id} message={el.mess}>)}
    </>
  )

// 2.
const [message, setMessage] = useState('')
const sendMessage = () => {
  if (!message) return 
  ws.send(message)
  setMessage('')
}
return (
  <>
    <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
    <button onClick={sendMessage}>Send</button>
  </>
)