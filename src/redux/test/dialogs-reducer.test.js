import dialogsReducer,{addNewMessageAC} from '../dialogs-reducer'

const initialState = {
    dialogItems: ['Sveta', 'Kostya', 'Sasha', 'Vitalyi', 'Dasha', 'Sergei', 'Nastya'],
    messages: ['message1', 'message2', 'message3', 'message4', 'message5', 'message6', 'message7'],
}

test('length of messages-arr should increase',() => {
    let action = addNewMessageAC('New message from test!')
    let newStateIncreasedMessage = dialogsReducer(initialState,action)

    expect(newStateIncreasedMessage.messages.length).toBe(8)
})

test('last elem in messages-arr should be equal added elem',() => {
    let action = addNewMessageAC('New message from test!')
    let newStateAddMessage = dialogsReducer(initialState,action)
    let length = newStateAddMessage.messages.length

    expect(newStateAddMessage.messages[length-1]).toBe('New message from test!')
})