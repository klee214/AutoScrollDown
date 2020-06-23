//Automatic scroll function
/***************************************************
 * Total height - (How much scroll down + The new message height) = 0 
 * This means you are at the last message
 * If the value is more than 0, you are in the middle of the chat
 * To get the each height and margin, use getComputedStyle, scrollHeight, offsetHeight
****************************************************/
const autoScroll = ()=>{
    // get the last message
    const $newMessage = $messages.lastElementChild;

    // get the last message styles to get the margin and etc..
    const newMessageStyles = getComputedStyle($newMessage);

    // get the margin, then get the last message's height
    const newMessageMargin = parseInt(newMessageStyles.marginBottom); 
    const newMessageHeight = newMessageMargin + $newMessage.offsetHeight

    // get the visible chat-box and message container total height
    const visibleHeight = $messages.offsetHeight;
    const containerHeight = $messages.scrollHeight;

    // how far have I scroll down?
    const scrollHeight = $messages.scrollTop + visibleHeight;

    if((containerHeight - newMessageHeight) <= scrollHeight){
        $messages.scrollTop = $messages.scrollHeight;
    }
}
