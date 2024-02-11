import {MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('9ea521f1-ccc6-4566-b6b2-bbe8fe808372', props.user.username, props.user.secret);
    return <div style={{height: '100vh'}}>
    <MultiChatSocket {...chatProps} />
    <MultiChatWindow {...chatProps} style={{height: '100%'}} />
    </div>
}
export default ChatsPage;
